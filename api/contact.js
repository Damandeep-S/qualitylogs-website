/**
 * Contact / demo-request handler.
 *
 * Runs on Vercel's Node runtime so BREVO_API_KEY never reaches the browser.
 * Sends one transactional email (Brevo /v3/smtp/email) to CONTACT_TO_EMAIL,
 * with reply-to set to whoever filled in the form.
 */

const BREVO_ENDPOINT = 'https://api.brevo.com/v3/smtp/email';

const LIMITS = {
  name: 120,
  email: 200,
  phone: 40,
  company: 160,
  fleetSize: 40,
  message: 4000,
};

function text(value, limit) {
  return typeof value === 'string' ? value.trim().slice(0, limit) : '';
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function row(label, value) {
  return `<tr>
    <td style="padding:8px 14px;border-bottom:1px solid #e4e9ec;color:#5c6f7a;font-size:13px;white-space:nowrap;">${label}</td>
    <td style="padding:8px 14px;border-bottom:1px solid #e4e9ec;color:#0d2431;font-size:14px;">${escapeHtml(value) || '—'}</td>
  </tr>`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !senderEmail || !toEmail) {
    console.error('Contact form: missing BREVO_API_KEY / BREVO_SENDER_EMAIL / CONTACT_TO_EMAIL');
    return res.status(500).json({ error: 'Email is not configured' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};

  const name = text(body.name, LIMITS.name);
  const email = text(body.email, LIMITS.email);
  const phone = text(body.phone, LIMITS.phone);
  const company = text(body.company, LIMITS.company);
  const fleetSize = text(body.fleetSize, LIMITS.fleetSize);
  const message = text(body.message, LIMITS.message);
  const services = Array.isArray(body.services)
    ? body.services.filter((s) => typeof s === 'string').slice(0, 10).join(', ')
    : '';

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return res.status(400).json({ error: 'That email address looks invalid' });
  }

  const htmlContent = `<div style="font-family:Arial,Helvetica,sans-serif;background:#f4f6f8;padding:24px;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid #e4e9ec;">
    <div style="background:#082635;padding:20px 24px;">
      <div style="color:#18C8DB;font-size:12px;letter-spacing:2px;text-transform:uppercase;font-weight:bold;">Quality Logs</div>
      <div style="color:#ffffff;font-size:19px;font-weight:bold;margin-top:4px;">New website inquiry</div>
    </div>
    <table style="width:100%;border-collapse:collapse;">
      ${row('Name', name)}
      ${row('Email', email)}
      ${row('Phone', phone)}
      ${row('Company / fleet', company)}
      ${row('Fleet size', fleetSize)}
      ${row('Interested in', services)}
    </table>
    <div style="padding:16px 14px 22px;">
      <div style="color:#5c6f7a;font-size:13px;margin-bottom:6px;">Message</div>
      <div style="color:#0d2431;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message) || '—'}</div>
    </div>
  </div>
</div>`;

  try {
    const brevoRes = await fetch(BREVO_ENDPOINT, {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { name: process.env.BREVO_SENDER_NAME || 'Quality Logs', email: senderEmail },
        to: [{ email: toEmail }],
        replyTo: { email, name },
        /* Front-load what the team triages on: who, which fleet, how big. */
        subject: ['New inquiry', name, company, fleetSize].filter(Boolean).join(' · '),
        htmlContent,
      }),
    });

    const raw = await brevoRes.text();
    const payload = safeParse(raw);

    /* Brevo does not always signal failure with the status code — an unauthorised
       IP, for instance, comes back as 200 with an error body. A real send returns
       201 with a messageId, so that is what we check for. */
    if (!brevoRes.ok || payload.code || !payload.messageId) {
      console.error(`Brevo responded ${brevoRes.status}: ${raw}`);
      if (payload.code === 'unauthorized') {
        console.error(
          'Brevo rejected this server. Check Authorised IPs: https://app.brevo.com/security/authorised_ips'
        );
      }
      return res.status(502).json({ error: 'Could not send your request right now' });
    }

    console.log(`Contact form delivered to Brevo, messageId ${payload.messageId}`);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Brevo request failed', err);
    return res.status(502).json({ error: 'Could not send your request right now' });
  }
}

function safeParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

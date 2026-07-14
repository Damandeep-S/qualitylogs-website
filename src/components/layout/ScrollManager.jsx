import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * On route change: jump to top. If the location carries a hash (e.g. /eld#devices
 * clicked from another page), smooth-scroll to that section once it exists.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Let the target page render first
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}

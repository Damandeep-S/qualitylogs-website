import Box from '@mui/material/Box';
import {
  TbBuildingWarehouse,
  TbMountain,
  TbRoad,
  TbSnowflake,
  TbSunrise,
  TbTir,
  TbTruckDelivery,
  TbWind,
} from 'react-icons/tb';
import Reveal from '../common/Reveal';

const FLEETS = [
  { name: 'Skyline Freight', icon: TbSunrise },
  { name: 'IronRoad Logistics', icon: TbRoad },
  { name: 'Prairie Carriers', icon: TbWind },
  { name: 'BlueRidge Transport', icon: TbMountain },
  { name: 'Velocity Haul', icon: TbTruckDelivery },
  { name: 'NorthStar Lines', icon: TbSnowflake },
  { name: 'CopperState Trucking', icon: TbTir },
  { name: 'Summit Express', icon: TbBuildingWarehouse },
];

export default function TrustMarquee() {
  const row = [...FLEETS, ...FLEETS];

  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Reveal>
        <Box
          sx={{
            textAlign: 'center',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
            px: 2,
          }}
        >
          Trusted by 1,200+ fleets across North America
        </Box>
      </Reveal>

      <Reveal delay={0.15}>
        <Box
          sx={{
            mt: 4,
            overflow: 'hidden',
            maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: 'max-content',
              animation: 'marqueeX 36s linear infinite',
              '&:hover': { animationPlayState: 'paused' },
            }}
          >
            {row.map((fleet, i) => (
              <Box
                key={`${fleet.name}-${i}`}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  px: { xs: 3, md: 4.5 },
                  color: 'var(--ink-3)',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.25s ease',
                  '&:hover': { color: 'var(--ink-1)' },
                }}
              >
                <fleet.icon size={20} />
                <Box
                  sx={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '1.02rem',
                    letterSpacing: '0.01em',
                  }}
                >
                  {fleet.name}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Reveal>
    </Box>
  );
}

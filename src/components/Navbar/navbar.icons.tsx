import { useMemo } from 'react';

interface IconProps {
  icon: string;
}

export default function Icon({ icon, ...props }: IconProps) {
  const svg = useMemo(() => {
    switch (icon) {
      case 'document':
        return (
          <svg {...props} viewBox="0 0 24 24">
            <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
          </svg>
        );
      default:
        console.warn(
          icon
            ? `Icon: type ${icon} is not valid; using fallback`
            : `Icon: no type present; using fallback`
        );
        return (
          <svg {...props} height="24" viewBox="0 0 24 24" width="24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
          </svg>
        );
    }
  }, [props, icon]);

  return svg;
}

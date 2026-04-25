import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 256,
  height: 256,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFFFF',
          color: '#000000',
          fontSize: '180px',
          fontWeight: 900,
          lineHeight: '1',
          textTransform: 'uppercase',
          letterSpacing: '-0.05em',
          paddingTop: '20px'
        }}
      >
        A
      </div>
    ),
    { ...size }
  );
}

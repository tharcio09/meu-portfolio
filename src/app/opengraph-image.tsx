import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Tharcio Santos - Desenvolvedor Full Stack';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#0d1117',
        color: '#e2e8f0',
        padding: '64px',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99, 102, 241, 0.18), transparent)',
        }}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            fontSize: 30,
            fontWeight: 800,
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
              background: '#4f46e5',
              color: '#ffffff',
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            T
          </div>
          <span>
            Tharcio<span style={{ color: '#818cf8' }}>.dev</span>
          </span>
        </div>
        <div
          style={{
            border: '1px solid rgba(129, 140, 248, 0.45)',
            borderRadius: 999,
            color: '#818cf8',
            padding: '10px 18px',
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          Disponível para oportunidade júnior
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          position: 'relative',
        }}
      >
        <div style={{ color: '#818cf8', fontSize: 28, fontWeight: 700 }}>
          React · Next.js · Node.js · TypeScript
        </div>
        <div style={{ maxWidth: 900, fontSize: 78, lineHeight: 1.02, fontWeight: 900 }}>
          Tharcio Santos
        </div>
        <div style={{ maxWidth: 950, color: '#cbd5e1', fontSize: 34, lineHeight: 1.28 }}>
          Desenvolvedor Full Stack com stack completa em produção.
        </div>
        <div style={{ maxWidth: 950, color: '#a8b4c7', fontSize: 30, lineHeight: 1.28 }}>
          Aplicações com interface, autenticação, banco de dados, APIs e deploy ativo.
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          color: '#a8b4c7',
          fontSize: 24,
          position: 'relative',
        }}
      >
        <span>Projetos com deploy ativo</span>
        <span>·</span>
        <span>Código público</span>
        <span>·</span>
        <span>Decisões técnicas visíveis</span>
      </div>
    </div>,
    size
  );
}

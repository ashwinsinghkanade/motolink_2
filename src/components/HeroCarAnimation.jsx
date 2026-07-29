import React from 'react';

export default function HeroCarAnimation({ currentCity }) {
  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1100px',
        margin: '0 auto',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(255, 94, 0, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: '#07090e'
      }}
    >
      {/* Big High-Resolution Sports Car Image Showcase */}
      <div style={{ position: 'relative', width: '100%', minHeight: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
          src="/hero_sports_car.png" 
          alt="MotoLink Supercar Showcase" 
          style={{
            width: '100%',
            height: '100%',
            maxHeight: '480px',
            objectFit: 'cover',
            display: 'block'
          }}
        />

        {/* Ambient Overlay Gradient for Seamless Blend */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(7, 9, 14, 0.3) 0%, transparent 40%, rgba(7, 9, 14, 0.8) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Bottom Floating Stats Pill */}
        <div 
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(13, 17, 26, 0.85)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 94, 0, 0.3)',
            borderRadius: '50px',
            padding: '0.6rem 1.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
            color: '#FFF',
            whiteSpace: 'nowrap'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 700 }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#FF5E00', display: 'inline-block', boxShadow: '0 0 10px #FF5E00' }}></span>
            <span>Metro Hub: <strong style={{ color: '#FF5E00' }}>{currentCity?.name || 'Mumbai'}</strong></span>
          </div>

          <div style={{ height: '16px', width: '1px', background: 'rgba(255,255,255,0.15)' }} />

          <div style={{ fontSize: '0.85rem', color: '#94A3B8', fontWeight: 600 }}>
            🏎️ Supercar Rentals & ECU Tuning Ready
          </div>
        </div>
      </div>
    </div>
  );
}

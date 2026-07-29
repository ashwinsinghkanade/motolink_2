import React from 'react';
import { Car, Mail, PhoneCall, ShieldCheck, MapPin, Send, Heart } from 'lucide-react';
import { METRO_CITIES } from '../data/motolinkData';

export default function Footer({ setActiveTab }) {
  return (
    <footer 
      style={{
        background: '#040609',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '4rem',
        paddingBottom: '2rem',
        color: '#94A3B8'
      }}
    >
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          {/* Column 1: Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #FF5E00 0%, #FF2E00 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                <Car size={24} />
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#FFF' }}>
                MOTO<span className="text-gradient-orange">LINK</span>
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.2rem' }}>
              India's premier automotive super-app for Metro Cities. Rent self-drive SUVs, book OEM workshops, get ECU remaps, and trade certified pre-owned cars.
            </p>
            <div style={{ fontSize: '0.8rem', color: '#00E5FF', fontWeight: 700 }}>
              24x7 Roadside Assistance: 1800-209-9000
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: 800, marginBottom: '1.2rem', fontFamily: 'var(--font-heading)' }}>
              Core Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.88rem' }}>
              <li>
                <span onClick={() => setActiveTab('rent')} style={{ cursor: 'pointer', hover: { color: '#FF5E00' } }}>
                  🚗 Self-Drive Car Rentals
                </span>
              </li>
              <li>
                <span onClick={() => setActiveTab('repair')} style={{ cursor: 'pointer' }}>
                  🛠️ Certified Workshop Repairs
                </span>
              </li>
              <li>
                <span onClick={() => setActiveTab('modify')} style={{ cursor: 'pointer' }}>
                  🏎️ ECU Remap & Bodykit Studio
                </span>
              </li>
              <li>
                <span onClick={() => setActiveTab('buysell')} style={{ cursor: 'pointer' }}>
                  🏷️ Pre-Owned Buy & Sell
                </span>
              </li>
              <li>
                <span onClick={() => setActiveTab('contact')} style={{ cursor: 'pointer' }}>
                  📞 Contact & Support Desk
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Metro Cities Focus */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: 800, marginBottom: '1.2rem', fontFamily: 'var(--font-heading)' }}>
              Metro Hub Coverage
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.85rem' }}>
              {METRO_CITIES.map(c => (
                <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <MapPin size={12} color="#FF5E00" />
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: 800, marginBottom: '1.2rem', fontFamily: 'var(--font-heading)' }}>
              Automotive Newsletter
            </h4>
            <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
              Subscribe for weekend rental deals, tuning discounts, and car news in Indian metros.
            </p>
            <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem' }}>
              <input type="email" placeholder="Your email..." className="form-input" style={{ padding: '0.55rem 0.8rem', fontSize: '0.85rem' }} />
              <button type="submit" className="btn-primary" style={{ padding: '0.55rem 0.9rem' }}>
                <Send size={15} />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.8rem' }}>
          <div>
            © 2026 MotoLink Automotive Technologies Pvt Ltd. All rights reserved. Crafted for Metro Drivers in India.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }}>RTO Guidelines</span>
            <span style={{ cursor: 'pointer' }}>Sitemap</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

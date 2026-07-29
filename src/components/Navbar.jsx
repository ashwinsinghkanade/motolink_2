import React, { useState } from 'react';
import { Car, MapPin, Wrench, ShieldCheck, ShoppingBag, PhoneCall, UserCheck, ChevronDown, Sparkles, Shield, Zap } from 'lucide-react';
import { METRO_CITIES } from '../data/motolinkData';

export default function Navbar({ activeTab, setActiveTab, currentCity, setCurrentCity, onOpenAuth, onOpenDashboard, onOpenAdmin, user }) {
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Car },
    { id: 'rent', label: 'Rent a Car', icon: Car },
    { id: 'repair', label: 'Repair Workshop', icon: Wrench },
    { id: 'modify', label: 'Modification', icon: Sparkles },
    { id: 'buysell', label: 'Buy & Sell', icon: ShoppingBag },
    { id: 'contact', label: 'Contact Us', icon: PhoneCall },
  ];

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(7, 9, 14, 0.92)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '78px' }}>
        
        {/* Animated Premium Logo */}
        <div 
          onClick={() => setActiveTab('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', cursor: 'pointer' }}
        >
          {/* Animated Logo Emblem Icon */}
          <div 
            className="logo-icon-container"
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #FF6A00 0%, #EE0979 100%)',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              color: '#FFF',
              border: '1px solid rgba(255,255,255,0.25)',
              position: 'relative'
            }}
          >
            {/* Custom Animated Sports Car Emblem */}
            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 13 L5 11 L10 6 L17 4 L22 8 L27 11 L28 13 L2 13 Z" fill="#FFF" opacity="0.9" />
              <path d="M11 6.5 L16.5 4.5 L21 8.5 Z" fill="#00E5FF" opacity="0.8" />
              {/* Front Wheel */}
              <circle cx="22" cy="14" r="3.5" fill="#0D111A" stroke="#FFF" strokeWidth="1.5" />
              <circle cx="22" cy="14" r="1" fill="#FF5E00" />
              {/* Rear Wheel */}
              <circle cx="7" cy="14" r="3.5" fill="#0D111A" stroke="#FFF" strokeWidth="1.5" />
              <circle cx="7" cy="14" r="1" fill="#FF5E00" />
              {/* Headlight Glow Dot */}
              <circle cx="27.5" cy="11.5" r="1.5" fill="#00E5FF" />
            </svg>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'var(--font-heading)', color: '#FFF', letterSpacing: '-0.03em' }}>
                MOTO
              </span>
              <span className="text-gradient-orange" style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'var(--font-heading)', letterSpacing: '-0.03em' }}>
                LINK
              </span>
            </div>
            <span className="logo-shimmer-sub" style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.16em', marginTop: '-2px' }}>
              METRO AUTOMOTIVE HUB
            </span>
          </div>
        </div>

        {/* Metro City Selector Pill */}
        <div style={{ position: 'relative' }}>
          <button 
            onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 94, 0, 0.3)',
              borderRadius: '50px',
              padding: '0.45rem 1rem',
              color: '#FFF',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'all 0.2s ease'
            }}
          >
            <MapPin size={15} color="#FF5E00" />
            <span>{currentCity.name}</span>
            <ChevronDown size={14} color="#94A3B8" />
          </button>

          {/* City Dropdown Menu */}
          {cityDropdownOpen && (
            <div 
              className="glass-panel"
              style={{
                position: 'absolute',
                top: '110%',
                left: 0,
                width: '210px',
                padding: '0.5rem',
                zIndex: 200,
                background: '#0d111a',
                border: '1px solid rgba(255, 94, 0, 0.3)'
              }}
            >
              <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 700, padding: '0.4rem 0.6rem', textTransform: 'uppercase' }}>
                Select Metro City
              </div>
              {METRO_CITIES.map((city) => (
                <div
                  key={city.id}
                  onClick={() => {
                    setCurrentCity(city);
                    setCityDropdownOpen(false);
                  }}
                  style={{
                    padding: '0.5rem 0.75rem',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    fontWeight: currentCity.id === city.id ? 700 : 500,
                    color: currentCity.id === city.id ? '#FF5E00' : '#E2E8F0',
                    background: currentCity.id === city.id ? 'rgba(255, 94, 0, 0.12)' : 'transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>{city.name}</span>
                  <span style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 600 }}>{city.popularRto}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Center Nav Links */}
        <nav style={{ display: 'flex', gap: '0.2rem' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  background: isActive ? 'rgba(255, 94, 0, 0.12)' : 'transparent',
                  color: isActive ? '#FF5E00' : '#94A3B8',
                  border: 'none',
                  borderBottom: isActive ? '2px solid #FF5E00' : '2px solid transparent',
                  padding: '0.6rem 0.9rem',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 600,
                  fontFamily: 'var(--font-heading)',
                  cursor: 'pointer',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={16} color={isActive ? '#FF5E00' : '#94A3B8'} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          
          {/* Admin Portal Button - Strictly visible ONLY for logged-in ADMIN */}
          {user && user.role === 'ADMIN' && (
            <button 
              onClick={onOpenAdmin}
              style={{
                background: 'linear-gradient(135deg, #00E5FF, #0088FF)',
                border: 'none',
                color: '#FFF',
                padding: '0.5rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                boxShadow: '0 0 15px rgba(0, 229, 255, 0.4)'
              }}
            >
              <Shield size={16} /> Admin Portal
            </button>
          )}

          {user ? (
            <button 
              onClick={onOpenDashboard}
              className="btn-secondary" 
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            >
              <Car size={16} color="#FF5E00" />
              <span>{user.role === 'ADMIN' ? 'Admin Profile' : 'My Garage'}</span>
            </button>
          ) : (
            <button 
              onClick={onOpenAuth}
              className="btn-primary" 
              style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}
            >
              <UserCheck size={16} />
              <span>Sign In</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
}

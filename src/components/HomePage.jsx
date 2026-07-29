import React from 'react';
import { Car, Wrench, Sparkles, ShoppingBag, ArrowRight, ShieldCheck, Clock, MapPin, Star, Zap, CheckCircle2 } from 'lucide-react';
import HeroCarAnimation from './HeroCarAnimation';
import { RENTAL_CARS, WORKSHOPS, MODIFICATION_PACKAGES, PREOWNED_CARS } from '../data/motolinkData';

export default function HomePage({ setActiveTab, currentCity, onOpenAuth }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', paddingBottom: '4rem' }}>
      
      {/* Hero Section with Interactive Driving Car Animation */}
      <section style={{ paddingTop: '2rem' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 2.5rem auto' }}>
            <span className="badge-neon" style={{ marginBottom: '1rem' }}>
              <Zap size={14} color="#FF5E00" /> NEXT-GEN INDIAN AUTOMOTIVE EXPERIENCE
            </span>
            <h1 style={{ fontSize: '2.8rem', fontWeight: 900, lineHeight: 1.15, marginBottom: '1rem' }}>
              Drive, Repair, Modify & Trade Cars in <span className="text-gradient-orange">{currentCity.name}</span>
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#94A3B8', lineHeight: 1.6 }}>
              The complete automotive super-app built for Metro India. Rent self-drive SUVs, book certified doorstep repairs, upgrade with custom ECU remaps, and trade pre-owned cars seamlessly.
            </p>
          </div>

          {/* Interactive Car Driving Animation Component */}
          <HeroCarAnimation currentCity={currentCity} />
          
        </div>
      </section>

      {/* 4 Core Quick Module Cards */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Explore MotoLink Services</h2>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>Select a service below to get instant quotes and bookings in {currentCity.name}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          
          {/* Card 1: Rent a Car */}
          <div 
            onClick={() => setActiveTab('rent')}
            className="glass-card" 
            style={{ padding: '2rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 94, 0, 0.15)', color: '#FF5E00', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
              <Car size={28} />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Rent a Car</h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Self-drive SUVs, EVs, and luxury sedans with zero security deposit hassle in {currentCity.name}.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FF5E00', fontWeight: 700, fontSize: '0.9rem' }}>
              Browse Rentals <ArrowRight size={16} />
            </div>
          </div>

          {/* Card 2: Repair Workshop */}
          <div 
            onClick={() => setActiveTab('repair')}
            className="glass-card" 
            style={{ padding: '2rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(0, 229, 255, 0.15)', color: '#00E5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
              <Wrench size={28} />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Repair Workshop</h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Book certified OEM-grade workshops with free doorstep pickup & live video repair updates.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#00E5FF', fontWeight: 700, fontSize: '0.9rem' }}>
              Book Repair <ArrowRight size={16} />
            </div>
          </div>

          {/* Card 3: Modification */}
          <div 
            onClick={() => setActiveTab('modify')}
            className="glass-card" 
            style={{ padding: '2rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255, 184, 0, 0.15)', color: '#FFB800', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
              <Sparkles size={28} />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Car Modification</h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Stage 1/2 ECU remaps, custom valvetronic exhausts, body kits, and satin PPF wraps.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#FFB800', fontWeight: 700, fontSize: '0.9rem' }}>
              Explore Tuning <ArrowRight size={16} />
            </div>
          </div>

          {/* Card 4: Buy & Sell */}
          <div 
            onClick={() => setActiveTab('buysell')}
            className="glass-card" 
            style={{ padding: '2rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.2rem' }}>
              <ShoppingBag size={28} />
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Buy & Sell Cars</h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Inspect 200+ RTO verified pre-owned cars or list your vehicle for instant cash payout.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10B981', fontWeight: 700, fontSize: '0.9rem' }}>
              View Marketplace <ArrowRight size={16} />
            </div>
          </div>

        </div>
      </section>

      {/* Featured Rental Fleet Carousel Grid */}
      <section className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
          <div>
            <span className="badge-cyan" style={{ marginBottom: '0.5rem' }}>TRENDING CARS</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Popular Rentals in {currentCity.name}</h2>
          </div>
          <button onClick={() => setActiveTab('rent')} className="btn-secondary" style={{ fontSize: '0.85rem' }}>
            View All Vehicles ({RENTAL_CARS.length})
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.8rem' }}>
          {RENTAL_CARS.slice(0, 3).map((car) => (
            <div key={car.id} className="glass-card" style={{ overflow: 'hidden' }}>
              <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                <img 
                  src={car.image} 
                  alt={car.model}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <span className="badge-neon" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.85)' }}>
                  {car.badge}
                </span>
              </div>
              <div style={{ padding: '1.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{car.make} {car.model}</h3>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{car.category} • {car.fuel}</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#FF5E00' }}>₹{car.pricePerDay.toLocaleString('en-IN')}</div>
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>/ day</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', padding: '0.8rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', margin: '1rem 0', fontSize: '0.8rem', color: '#CBD5E1' }}>
                  <span>⚙️ {car.transmission}</span>
                  <span>💺 {car.seats} Seater</span>
                  <span>⭐ {car.rating} ({car.reviews})</span>
                </div>

                <button 
                  onClick={() => setActiveTab('rent')}
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Book Instant Drive
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose MotoLink Grid */}
      <section style={{ background: '#090d16', padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Why Metro Drivers Trust MotoLink</h2>
            <p style={{ color: '#94A3B8' }}>Built to provide maximum transparency, reliability, and speed across top Indian metro cities.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <div style={{ background: 'rgba(255, 94, 0, 0.12)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF5E00', flexShrink: 0 }}>
                <ShieldCheck size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>100% Certified Workshops</h4>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8' }}>All partner workshops undergo strict multi-point quality audits and use genuine OEM spare parts.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <div style={{ background: 'rgba(0, 229, 255, 0.12)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00E5FF', flexShrink: 0 }}>
                <Clock size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>Free Doorstep Pickup</h4>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8' }}>Valet drivers pick up and deliver your car anywhere in {currentCity.name} with live GPS tracking.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.2rem' }}>
              <div style={{ background: 'rgba(255, 184, 0, 0.12)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFB800', flexShrink: 0 }}>
                <CheckCircle2 size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.4rem' }}>RTO & Insurance Verified</h4>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8' }}>Every buy/sell listing and rental car has verified RTO documents, insurance history, and zero hidden charges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

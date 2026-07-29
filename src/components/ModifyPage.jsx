import React, { useState } from 'react';
import { Sparkles, Zap, Flame, Shield, Check, Phone, DollarSign, Image } from 'lucide-react';
import { MODIFICATION_PACKAGES, METRO_CITIES } from '../data/motolinkData';

export default function ModifyPage({ currentCity, user, onOpenAuth, onAddMod }) {
  const [selectedPkg, setSelectedPkg] = useState(MODIFICATION_PACKAGES[0]);
  
  // Complete Specs
  const [carCompany, setCarCompany] = useState('Volkswagen');
  const [carModel, setCarModel] = useState('Polo GT TSI');
  const [mfgYear, setMfgYear] = useState('2021');
  const [engineSpecs, setEngineSpecs] = useState('1.0L TSI Turbo Gasoline (110 HP)');
  const [budget, setBudget] = useState('₹30,000 - ₹75,000');
  const [deliveryCity, setDeliveryCity] = useState(currentCity.name);
  const [phone, setPhone] = useState(user?.phone || '+91 98200 44556');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      onOpenAuth();
      return;
    }

    const newMod = {
      id: `MOD-${Math.floor(100000 + Math.random() * 900000)}`,
      packageName: selectedPkg.title,
      carDetails: `${carCompany} ${carModel} (${mfgYear}) - ${engineSpecs}`,
      budget,
      deliveryCity,
      userPhone: phone || user.phone,
      userName: user.name,
      status: 'QUOTE READY',
      createdAt: new Date().toLocaleDateString()
    };

    onAddMod(newMod);
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem 1.5rem' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="badge-neon" style={{ marginBottom: '0.6rem' }}>PERFORMANCE & STYLING STUDIO</span>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900 }}>
          Car Modification Studio <span className="text-gradient-orange">({currentCity.name})</span>
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '1rem', marginTop: '0.4rem' }}>
          Custom ECU Dyno remaps, valvetronic exhausts, widebody kits, and ceramic PPF wrap coatings by certified tuners.
        </p>
      </div>

      {/* Packages Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem', marginBottom: '3.5rem' }}>
        {MODIFICATION_PACKAGES.map((pkg) => (
          <div 
            key={pkg.id} 
            className="glass-card"
            style={{ 
              overflow: 'hidden', 
              border: selectedPkg.id === pkg.id ? '2px solid #FF5E00' : '1px solid rgba(255,255,255,0.08)',
              background: selectedPkg.id === pkg.id ? 'rgba(255, 94, 0, 0.08)' : 'var(--bg-card)'
            }}
          >
            <div style={{ height: '180px', position: 'relative' }}>
              <img src={pkg.image} alt={pkg.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="badge-cyan" style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.85)' }}>
                {pkg.category}
              </span>
            </div>

            <div style={{ padding: '1.4rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.4rem' }}>{pkg.title}</h3>
              <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginBottom: '1rem' }}>{pkg.description}</p>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: '#FF5E00', marginBottom: '1rem' }}>
                <span>Price: {pkg.priceRange}</span>
                <span style={{ color: '#00E5FF' }}>Est: {pkg.estTime}</span>
              </div>

              <button 
                onClick={() => setSelectedPkg(pkg)}
                className={selectedPkg.id === pkg.id ? "btn-primary" : "btn-secondary"} 
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
              >
                {selectedPkg.id === pkg.id ? "Selected Package" : "Select Package"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Inquiry Form */}
      <div className="glass-panel" style={{ maxWidth: '750px', margin: '0 auto', padding: '2.5rem' }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem', textAlign: 'center' }}>
          Request Custom Build Quote ({selectedPkg.title})
        </h2>
        <p style={{ textAlign: 'center', color: '#94A3B8', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Our tuning specialist in {currentCity.name} will call you back within 30 minutes with a dyno estimation & timeframe.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            
            {user && (
              <div style={{ background: 'rgba(255, 94, 0, 0.08)', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,94,0,0.2)', fontSize: '0.85rem' }}>
                <div style={{ fontWeight: 800, color: '#FF5E00' }}>Tuning Client: {user.name} ({user.phone})</div>
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Selected Tuning Package</label>
              <input type="text" className="form-input" value={selectedPkg.title} readOnly style={{ background: 'rgba(255,94,0,0.1)', color: '#FF5E00', fontWeight: 700 }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Car Company / Brand</label>
                <input type="text" className="form-input" value={carCompany} onChange={e => setCarCompany(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">Car Model</label>
                <input type="text" className="form-input" value={carModel} onChange={e => setCarModel(e.target.value)} required />
              </div>
              <div className="form-group">
                <label className="form-label">Year of Mfg</label>
                <input type="number" className="form-input" value={mfgYear} onChange={e => setMfgYear(e.target.value)} required />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Engine Specs / Code</label>
              <input type="text" className="form-input" value={engineSpecs} onChange={e => setEngineSpecs(e.target.value)} required placeholder="e.g. 2.0L Diesel / 1.5L Turbo Petrol" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Target Budget Bracket</label>
                <select className="form-select" value={budget} onChange={e => setBudget(e.target.value)}>
                  <option value="₹15,000 - ₹30,000">₹15,000 - ₹30,000</option>
                  <option value="₹30,000 - ₹75,000">₹30,000 - ₹75,000</option>
                  <option value="₹75,000 - ₹1,50,000">₹75,000 - ₹1,50,000</option>
                  <option value="₹1,50,000+">₹1,50,000+ (Extreme Custom)</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Contact Phone Number</label>
                <input type="text" className="form-input" value={phone} onChange={e => setPhone(e.target.value)} required />
              </div>
            </div>

            <button type="submit" className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
              <Sparkles size={18} /> Submit Custom Modification Inquiry
            </button>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255, 94, 0, 0.2)', color: '#FF5E00', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              <Check size={32} />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>Inquiry Received!</h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              Our Lead Tuner in {currentCity.name} will reach out at {phone} for {carCompany} {carModel}. Saved to your Garage!
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-secondary">
              Submit Another Inquiry
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

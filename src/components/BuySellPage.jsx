import React, { useState } from 'react';
import { ShoppingBag, ShieldCheck, Tag, MapPin, Phone, Car, PlusCircle, Check } from 'lucide-react';
import { PREOWNED_CARS, METRO_CITIES } from '../data/motolinkData';

export default function BuySellPage({ currentCity, user, onOpenAuth, onAddListing }) {
  const [activeSubTab, setActiveSubTab] = useState('buy'); // buy or sell
  const [selectedCar, setSelectedCar] = useState(null);
  
  // Complete Sell Form State
  const [sellCompany, setSellCompany] = useState('Maruti Suzuki');
  const [sellModel, setSellModel] = useState('Swift');
  const [sellVariant, setSellVariant] = useState('ZXi+ AMT');
  const [sellYear, setSellYear] = useState('2022');
  const [sellKm, setSellKm] = useState('28000');
  const [sellFuel, setSellFuel] = useState('Petrol');
  const [sellTransmission, setSellTransmission] = useState('Automatic');
  const [sellOwners, setSellOwners] = useState('1st Owner');
  const [sellPrice, setSellPrice] = useState('6.50');
  const [sellRto, setSellRto] = useState(currentCity.popularRto);
  const [sellContact, setSellContact] = useState(user?.phone || '+91 98200 44556');
  const [sellSuccess, setSellSuccess] = useState(false);

  const carBrands = ['Maruti Suzuki', 'Hyundai', 'Tata Motors', 'Mahindra', 'Honda', 'Toyota', 'Skoda', 'Volkswagen', 'BMW', 'Mercedes-Benz', 'Audi', 'Kia', 'MG Motor'];

  const handleSellSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      onOpenAuth();
      return;
    }

    const newListing = {
      id: `LIST-${Math.floor(100000 + Math.random() * 900000)}`,
      make: sellCompany,
      model: `${sellModel} ${sellVariant}`,
      year: parseInt(sellYear),
      priceLakhs: parseFloat(sellPrice),
      kmDriven: parseInt(sellKm),
      fuel: sellFuel,
      transmission: sellTransmission,
      owner: sellOwners,
      rtoCode: sellRto,
      city: currentCity.name,
      sellerContact: sellContact || user.phone,
      sellerName: user.name,
      status: 'ACTIVE LISTING',
      image: '/swift_car.png',
      createdAt: new Date().toLocaleDateString()
    };

    onAddListing(newListing);
    setSellSuccess(true);
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem 1.5rem' }}>
      
      {/* Header & Sub-tab Switcher */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
        <div>
          <span className="badge-neon" style={{ marginBottom: '0.6rem' }}>PRE-OWNED CAR MARKETPLACE</span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 900 }}>
            Buy & Sell Cars in <span className="text-gradient-orange">{currentCity.name}</span>
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '1rem', marginTop: '0.4rem' }}>
            RTO verified pre-owned vehicles with 140+ point inspection & instant seller payout.
          </p>
        </div>

        {/* Tab Toggle Buttons */}
        <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(15,20,30,0.8)', padding: '0.4rem', borderRadius: '50px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <button
            onClick={() => setActiveSubTab('buy')}
            style={{
              background: activeSubTab === 'buy' ? 'linear-gradient(135deg, #FF5E00 0%, #E64A00 100%)' : 'transparent',
              color: '#FFF',
              border: 'none',
              borderRadius: '50px',
              padding: '0.6rem 1.5rem',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <ShoppingBag size={16} /> Buy Certified Cars
          </button>

          <button
            onClick={() => setActiveSubTab('sell')}
            style={{
              background: activeSubTab === 'sell' ? 'linear-gradient(135deg, #00E5FF 0%, #0088FF 100%)' : 'transparent',
              color: '#FFF',
              border: 'none',
              borderRadius: '50px',
              padding: '0.6rem 1.5rem',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <PlusCircle size={16} /> Sell My Car
          </button>
        </div>
      </div>

      {/* BUY TAB CONTENT */}
      {activeSubTab === 'buy' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {PREOWNED_CARS.map((car) => (
              <div key={car.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ height: '200px', position: 'relative' }}>
                    <img src={car.image} alt={car.model} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span className="badge-cyan" style={{ position: 'absolute', top: '12px', left: '12px', background: 'rgba(0,0,0,0.85)' }}>
                      RTO: {car.rtoCode}
                    </span>
                    <span className="badge-neon" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.85)' }}>
                      Verified
                    </span>
                  </div>

                  <div style={{ padding: '1.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>{car.make}</h3>
                        <div style={{ fontSize: '0.95rem', color: '#E2E8F0', fontWeight: 700 }}>{car.model}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#FF5E00' }}>₹{car.priceLakhs} Lakh</div>
                        <span style={{ fontSize: '0.75rem', color: '#64748B' }}>Fixed Price</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.8rem', fontSize: '0.8rem', color: '#CBD5E1', margin: '0.8rem 0' }}>
                      <span>📅 {car.year}</span>
                      <span>KM: {car.kmDriven.toLocaleString('en-IN')}</span>
                      <span>👤 {car.owner}</span>
                      <span>⛽ {car.fuel}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#94A3B8' }}>
                      <MapPin size={13} color="#00E5FF" /> {car.location}
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 1.4rem 1.4rem 1.4rem' }}>
                  <button 
                    onClick={() => {
                      if (!user) {
                        onOpenAuth();
                        return;
                      }
                      setSelectedCar(car);
                    }}
                    className="btn-primary" 
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Contact Seller & Book Test Drive
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SELL TAB CONTENT */}
      {activeSubTab === 'sell' && (
        <div className="glass-panel" style={{ maxWidth: '750px', margin: '0 auto', padding: '2.5rem' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.4rem', textAlign: 'center' }}>
            List Your Car for Sale in {currentCity.name}
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '2rem', textAlign: 'center' }}>
            Get instant valuation quotes and direct calls from verified buyers without middleman commissions.
          </p>

          {!sellSuccess ? (
            <form onSubmit={handleSellSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              
              {user && (
                <div style={{ background: 'rgba(0, 229, 255, 0.08)', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid rgba(0, 229, 255, 0.2)', fontSize: '0.85rem' }}>
                  <div style={{ fontWeight: 800, color: '#00E5FF' }}>Seller: {user.name} ({user.phone})</div>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Car Brand / Company</label>
                  <select className="form-select" value={sellCompany} onChange={e => setSellCompany(e.target.value)}>
                    {carBrands.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Car Model</label>
                  <input type="text" className="form-input" value={sellModel} onChange={e => setSellModel(e.target.value)} required placeholder="e.g. Swift / Creta" />
                </div>

                <div className="form-group">
                  <label className="form-label">Variant</label>
                  <input type="text" className="form-input" value={sellVariant} onChange={e => setSellVariant(e.target.value)} required placeholder="e.g. ZXi+ AMT" />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.8rem' }}>
                <div className="form-group">
                  <label className="form-label">Reg Year</label>
                  <input type="number" className="form-input" value={sellYear} onChange={e => setSellYear(e.target.value)} required />
                </div>

                <div className="form-group">
                  <label className="form-label">KM Driven</label>
                  <input type="number" className="form-input" value={sellKm} onChange={e => setSellKm(e.target.value)} required />
                </div>

                <div className="form-group">
                  <label className="form-label">Fuel</label>
                  <select className="form-select" value={sellFuel} onChange={e => setSellFuel(e.target.value)}>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="CNG">CNG</option>
                    <option value="Electric">Electric</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Transmission</label>
                  <select className="form-select" value={sellTransmission} onChange={e => setSellTransmission(e.target.value)}>
                    <option value="Manual">Manual</option>
                    <option value="Automatic">Automatic</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Ownership Count</label>
                  <select className="form-select" value={sellOwners} onChange={e => setSellOwners(e.target.value)}>
                    <option value="1st Owner">1st Owner</option>
                    <option value="2nd Owner">2nd Owner</option>
                    <option value="3rd Owner+">3rd Owner+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">RTO State Code</label>
                  <input type="text" className="form-input" value={sellRto} onChange={e => setSellRto(e.target.value)} required />
                </div>

                <div className="form-group">
                  <label className="form-label">Expected Price (₹ Lakhs)</label>
                  <input type="text" className="form-input" value={sellPrice} onChange={e => setSellPrice(e.target.value)} required placeholder="e.g. 6.50" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Seller Contact Number</label>
                <input type="text" className="form-input" value={sellContact} onChange={e => setSellContact(e.target.value)} required />
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
                <Tag size={18} /> Publish Car Listing to Marketplace
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <Check size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>Listing Live!</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Your {sellCompany} {sellModel} listed at ₹{sellPrice} Lakh in {currentCity.name}. Saved to your Garage history!
              </p>
              <button onClick={() => setSellSuccess(false)} className="btn-secondary">
                Post Another Car Listing
              </button>
            </div>
          )}
        </div>
      )}

      {/* Seller Contact Modal */}
      {selectedCar && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Verified Seller Details
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
              {selectedCar.make} {selectedCar.model} ({selectedCar.rtoCode})
            </p>

            <div style={{ background: 'rgba(255, 94, 0, 0.1)', padding: '1.2rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '0.8rem', color: '#94A3B8' }}>DIRECT SELLER PHONE</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#FF5E00', marginTop: '0.2rem' }}>{selectedCar.sellerContact}</div>
            </div>

            <button onClick={() => setSelectedCar(null)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

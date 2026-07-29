import React, { useState } from 'react';
import { Car, MapPin, Calendar, ShieldCheck, Check, Clock, User, Phone, CreditCard, X } from 'lucide-react';
import { RENTAL_CARS, METRO_CITIES } from '../data/motolinkData';

export default function RentCarPage({ currentCity, user, onOpenAuth, onAddBooking }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCar, setSelectedCar] = useState(null);

  // Form State
  const [pickupCity, setPickupCity] = useState(currentCity.name);
  const [pickupAddress, setPickupAddress] = useState('Bandra West Terminal, Mumbai');
  const [dropCity, setDropCity] = useState(currentCity.name);
  const [dropAddress, setDropAddress] = useState('Bandra West Terminal, Mumbai');
  const [pickupDate, setPickupDate] = useState('2026-08-01');
  const [pickupTime, setPickupTime] = useState('10:00');
  const [dropDate, setDropDate] = useState('2026-08-03');
  const [dropTime, setDropTime] = useState('18:00');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const categories = ['All', 'SUV / Off-Road', 'Electric SUV', 'Compact SUV', 'Hatchback', 'Luxury Sedan'];

  const filteredCars = RENTAL_CARS.filter(car => {
    if (selectedCategory !== 'All' && car.category !== selectedCategory) return false;
    return true;
  });

  const handleOpenConfigure = (car) => {
    if (!user) {
      onOpenAuth();
      return;
    }
    setSelectedCar(car);
    setBookingSuccess(false);
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!selectedCar) return;

    const days = 2; // calculate or default 2
    const totalAmount = selectedCar.pricePerDay * days * 1.18 + selectedCar.deposit;

    const newBooking = {
      id: `MTL-${Math.floor(100000 + Math.random() * 900000)}`,
      carName: `${selectedCar.make} ${selectedCar.model}`,
      carImage: selectedCar.image,
      pickupCity,
      pickupAddress,
      dropCity,
      dropAddress,
      pickupDate: `${pickupDate} at ${pickupTime}`,
      dropDate: `${dropDate} at ${dropTime}`,
      userName: user.name,
      userPhone: user.phone,
      userDl: user.drivingLicense || 'DL-MH02-2024-9988',
      totalAmount,
      deposit: selectedCar.deposit,
      status: 'CONFIRMED',
      createdAt: new Date().toLocaleDateString()
    };

    onAddBooking(newBooking);
    setBookingSuccess(true);
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem 1.5rem' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="badge-neon" style={{ marginBottom: '0.6rem' }}>SELF-DRIVE CAR RENTALS</span>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900 }}>
          Rent a Car in <span className="text-gradient-orange">{currentCity.name}</span>
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '1rem', marginTop: '0.4rem' }}>
          Choose from sanitised, fully insured vehicles with unlimited kilometers option across Indian metro cities.
        </p>
      </div>

      {/* Category Tabs */}
      <div style={{ display: 'flex', gap: '0.6rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '2rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              background: selectedCategory === cat ? 'rgba(255, 94, 0, 0.18)' : 'rgba(255,255,255,0.04)',
              color: selectedCategory === cat ? '#FF5E00' : '#94A3B8',
              border: selectedCategory === cat ? '1px solid #FF5E00' : '1px solid rgba(255,255,255,0.08)',
              padding: '0.5rem 1.2rem',
              borderRadius: '50px',
              fontWeight: selectedCategory === cat ? 700 : 500,
              fontSize: '0.85rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Car Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '2rem' }}>
        {filteredCars.map((car) => (
          <div key={car.id} className="glass-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ height: '210px', position: 'relative', overflow: 'hidden' }}>
                <img src={car.image} alt={car.model} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span className="badge-neon" style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0,0,0,0.85)' }}>
                  {car.badge}
                </span>
              </div>

              <div style={{ padding: '1.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{car.make} {car.model}</h3>
                    <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>{car.category} ({car.year})</span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#FF5E00' }}>₹{car.pricePerDay.toLocaleString('en-IN')}</div>
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>per day</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', margin: '1rem 0', flexWrap: 'wrap' }}>
                  {car.features.map((f, i) => (
                    <span key={i} style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.6rem', borderRadius: '4px', color: '#CBD5E1' }}>
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ padding: '0 1.4rem 1.4rem 1.4rem' }}>
              <button 
                onClick={() => handleOpenConfigure(car)}
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Configure & Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Rental Booking Modal */}
      {selectedCar && (
        <div className="modal-overlay">
          <div className="modal-content">
            
            <button onClick={() => setSelectedCar(null)} style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer' }}>
              <X size={20} />
            </button>

            {!bookingSuccess ? (
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.3rem' }}>
                  Rental Booking: {selectedCar.make} {selectedCar.model}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  Complete your trip details for {currentCity.name}
                </p>

                <form onSubmit={handleConfirmBooking} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  
                  {/* Driver Profile Summary */}
                  <div style={{ background: 'rgba(255, 94, 0, 0.08)', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,94,0,0.2)', fontSize: '0.85rem' }}>
                    <div style={{ fontWeight: 800, color: '#FF5E00' }}>Driver: {user?.name}</div>
                    <div style={{ color: '#CBD5E1', marginTop: '0.2rem' }}>Phone: {user?.phone} • DL: {user?.drivingLicense || 'DL-Verified'}</div>
                  </div>

                  {/* Pickup Location & Date */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                    <div className="form-group">
                      <label className="form-label">Pickup Metro City</label>
                      <select className="form-select" value={pickupCity} onChange={e => setPickupCity(e.target.value)}>
                        {METRO_CITIES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Pickup Date & Time</label>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <input type="date" className="form-input" value={pickupDate} onChange={e => setPickupDate(e.target.value)} required />
                        <input type="time" className="form-input" value={pickupTime} onChange={e => setPickupTime(e.target.value)} required />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Exact Pickup Address / Landmark</label>
                    <input type="text" className="form-input" value={pickupAddress} onChange={e => setPickupAddress(e.target.value)} required placeholder="e.g. Terminal 2 Airport / BKC Hub" />
                  </div>

                  {/* Drop Location & Date */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                    <div className="form-group">
                      <label className="form-label">Drop Metro City</label>
                      <select className="form-select" value={dropCity} onChange={e => setDropCity(e.target.value)}>
                        {METRO_CITIES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Return Date & Time</label>
                      <div style={{ display: 'flex', gap: '0.4rem' }}>
                        <input type="date" className="form-input" value={dropDate} onChange={e => setDropDate(e.target.value)} required />
                        <input type="time" className="form-input" value={dropTime} onChange={e => setDropTime(e.target.value)} required />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Exact Drop Address / Landmark</label>
                    <input type="text" className="form-input" value={dropAddress} onChange={e => setDropAddress(e.target.value)} required placeholder="e.g. Bandra Railway Station / Home Address" />
                  </div>

                  {/* Price Calculation Card */}
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span>Daily Rate (2 Days)</span>
                      <span style={{ fontWeight: 700 }}>₹{(selectedCar.pricePerDay * 2).toLocaleString('en-IN')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span>GST (18%)</span>
                      <span style={{ fontWeight: 700 }}>₹{(selectedCar.pricePerDay * 2 * 0.18).toLocaleString('en-IN')}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', color: '#10B981' }}>
                      <span>Refundable Deposit</span>
                      <span style={{ fontWeight: 700 }}>₹{selectedCar.deposit.toLocaleString('en-IN')}</span>
                    </div>
                    <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '0.6rem 0' }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: 900, color: '#FF5E00' }}>
                      <span>Total Payable</span>
                      <span>₹{(selectedCar.pricePerDay * 2 * 1.18 + selectedCar.deposit).toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.5rem' }}>
                    <button type="button" onClick={() => setSelectedCar(null)} className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                      Confirm & Reserve Drive
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <div style={{ width: '60px', height: '60px', background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <Check size={32} />
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>Rental Reserved!</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Your {selectedCar.make} {selectedCar.model} has been reserved. Booking added to your Garage history!
                </p>
                <button onClick={() => setSelectedCar(null)} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Done & Back to Rentals
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}

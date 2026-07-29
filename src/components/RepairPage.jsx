import React, { useState } from 'react';
import { Wrench, MapPin, ShieldCheck, Truck, Calendar, Clock, Check, Phone, Car } from 'lucide-react';
import { WORKSHOPS, METRO_CITIES } from '../data/motolinkData';

export default function RepairPage({ currentCity, user, onOpenAuth, onAddRepair }) {
  const [selectedWorkshop, setSelectedWorkshop] = useState(WORKSHOPS[0]);
  const [selectedService, setSelectedService] = useState('Periodic General Service');
  const [doorstepPickup, setDoorstepPickup] = useState(true);

  // Complete Vehicle Form Fields
  const [carCompany, setCarCompany] = useState('Hyundai');
  const [carModel, setCarModel] = useState('Creta');
  const [variant, setVariant] = useState('1.5 SX (O)');
  const [mfgYear, setMfgYear] = useState('2022');
  const [fuelType, setFuelType] = useState('Petrol');
  const [issueDescription, setIssueDescription] = useState('Regular maintenance service & front brake noise check');
  const [preferredDate, setPreferredDate] = useState('2026-08-02');
  const [timeSlot, setTimeSlot] = useState('Morning (9:00 AM - 12:00 PM)');
  const [doorstepAddress, setDoorstepAddress] = useState('Flat 402, Green Acres, Andheri West, Mumbai');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const carBrands = ['Hyundai', 'Maruti Suzuki', 'Tata Motors', 'Mahindra', 'Honda', 'Toyota', 'Skoda', 'Volkswagen', 'BMW', 'Mercedes-Benz', 'Audi', 'Kia', 'MG Motor'];

  const servicesList = [
    { id: 'gen', name: 'Periodic General Service', price: 3499, time: '4 Hours', desc: 'Engine oil replacement, oil filter, air filter cleaning, 40-point diagnostic check.' },
    { id: 'ac', name: 'Car AC Deep Overhaul', price: 2899, time: '3 Hours', desc: 'AC gas topup, compressor pressure check, cabin filter cleaning, leak detection.' },
    { id: 'brake', name: 'Brake Disc & Pad Overhaul', price: 4200, time: '3.5 Hours', desc: 'Front brake pad replacement, brake fluid flushing, rotor skimming.' },
    { id: 'clutch', name: 'Clutch & Transmission Repair', price: 8500, time: '1 Day', desc: 'Clutch plate replacement, pressure plate, release bearing, gearbox oil.' }
  ];

  const currentServiceObj = servicesList.find(s => s.name === selectedService) || servicesList[0];
  const totalPrice = currentServiceObj.price + (doorstepPickup ? 499 : 0);

  const handleSubmitRepair = (e) => {
    e.preventDefault();
    if (!user) {
      onOpenAuth();
      return;
    }

    const newRepair = {
      id: `REP-${Math.floor(100000 + Math.random() * 900000)}`,
      workshopName: selectedWorkshop.name,
      workshopAddress: selectedWorkshop.address,
      serviceName: selectedService,
      carDetails: `${carCompany} ${carModel} ${variant} (${mfgYear} - ${fuelType})`,
      issueDescription,
      serviceDate: `${preferredDate} (${timeSlot})`,
      doorstepPickup,
      pickupAddress: doorstepPickup ? doorstepAddress : 'Self Drive Dropoff',
      userName: user.name,
      userPhone: user.phone,
      totalAmount: totalPrice,
      status: 'IN DIAGNOSTICS',
      createdAt: new Date().toLocaleDateString()
    };

    onAddRepair(newRepair);
    setBookingSuccess(true);
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem 1.5rem' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <span className="badge-cyan" style={{ marginBottom: '0.6rem' }}>OEM-GRADE WORKSHOP NETWORK</span>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900 }}>
          Book Car Repair in <span className="text-gradient-cyan">{currentCity.name}</span>
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '1rem', marginTop: '0.4rem' }}>
          Certified workshops with 100% genuine spare parts, live video service updates, and doorstep pickup.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
        
        {/* Left Column: Form & Services */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          
          {/* Service Selector */}
          <div className="glass-panel" style={{ padding: '1.8rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Wrench size={20} color="#00E5FF" /> 1. Select Service Package
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {servicesList.map(s => (
                <div
                  key={s.id}
                  onClick={() => setSelectedService(s.name)}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-sm)',
                    border: selectedService === s.name ? '1px solid #00E5FF' : '1px solid rgba(255,255,255,0.08)',
                    background: selectedService === s.name ? 'rgba(0, 229, 255, 0.1)' : 'rgba(15,20,30,0.6)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, marginBottom: '0.3rem' }}>
                    <span style={{ color: selectedService === s.name ? '#00E5FF' : '#FFF' }}>{s.name}</span>
                    <span style={{ color: '#FF5E00' }}>₹{s.price.toLocaleString('en-IN')}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#94A3B8', margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Vehicle & Schedule Form */}
          <div className="glass-panel" style={{ padding: '1.8rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Car size={20} color="#FF5E00" /> 2. Complete Vehicle & Appointment Details
            </h3>

            <form onSubmit={handleSubmitRepair} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              
              {/* User Banner */}
              {user && (
                <div style={{ background: 'rgba(0, 229, 255, 0.08)', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid rgba(0, 229, 255, 0.2)', fontSize: '0.85rem' }}>
                  <div style={{ fontWeight: 800, color: '#00E5FF' }}>Customer: {user.name} ({user.phone})</div>
                </div>
              )}

              {/* Company & Model */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Car Company / Brand</label>
                  <select className="form-select" value={carCompany} onChange={e => setCarCompany(e.target.value)}>
                    {carBrands.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Car Model</label>
                  <input type="text" className="form-input" value={carModel} onChange={e => setCarModel(e.target.value)} required placeholder="e.g. Creta / Swift / Thar" />
                </div>
              </div>

              {/* Variant, Mfg Year & Fuel */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem' }}>
                <div className="form-group">
                  <label className="form-label">Variant</label>
                  <input type="text" className="form-input" value={variant} onChange={e => setVariant(e.target.value)} required placeholder="e.g. 1.5 SX" />
                </div>

                <div className="form-group">
                  <label className="form-label">Mfg Year</label>
                  <input type="number" className="form-input" value={mfgYear} onChange={e => setMfgYear(e.target.value)} required />
                </div>

                <div className="form-group">
                  <label className="form-label">Fuel Type</label>
                  <select className="form-select" value={fuelType} onChange={e => setFuelType(e.target.value)}>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="CNG">CNG</option>
                    <option value="Electric">Electric</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Issue Details / Remarks</label>
                <textarea className="form-textarea" rows="2" value={issueDescription} onChange={e => setIssueDescription(e.target.value)} required />
              </div>

              {/* Date & Slot */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Preferred Date</label>
                  <input type="date" className="form-input" value={preferredDate} onChange={e => setPreferredDate(e.target.value)} required />
                </div>

                <div className="form-group">
                  <label className="form-label">Time Slot</label>
                  <select className="form-select" value={timeSlot} onChange={e => setTimeSlot(e.target.value)}>
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Doorstep Pickup Toggle */}
              <div 
                onClick={() => setDoorstepPickup(!doorstepPickup)}
                style={{
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: doorstepPickup ? 'rgba(255, 94, 0, 0.12)' : 'rgba(255,255,255,0.04)',
                  border: doorstepPickup ? '1px solid #FF5E00' : '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer'
                }}
              >
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: doorstepPickup ? '#FF5E00' : '#FFF' }}>
                    🚚 Free Doorstep Pickup & Drop (+₹499)
                  </div>
                  <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Valet driver collects your car from your doorstep in {currentCity.name}</span>
                </div>
                <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: doorstepPickup ? '#FF5E00' : '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                  {doorstepPickup && <Check size={14} />}
                </div>
              </div>

              {doorstepPickup && (
                <div className="form-group">
                  <label className="form-label">Doorstep Pickup Address in {currentCity.name}</label>
                  <input type="text" className="form-input" value={doorstepAddress} onChange={e => setDoorstepAddress(e.target.value)} required />
                </div>
              )}

              {!bookingSuccess ? (
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                  Confirm Workshop Booking (Total: ₹{totalPrice.toLocaleString('en-IN')})
                </button>
              ) : (
                <div style={{ textAlign: 'center', padding: '1.2rem', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10B981', borderRadius: 'var(--radius-sm)' }}>
                  <Check size={28} color="#10B981" style={{ margin: '0 auto 0.5rem auto' }} />
                  <div style={{ fontWeight: 800, color: '#10B981', fontSize: '1.1rem' }}>Repair Booking Confirmed!</div>
                  <p style={{ fontSize: '0.82rem', color: '#CBD5E1', marginTop: '0.3rem' }}>
                    Scheduled for {carCompany} {carModel} on {preferredDate}. Details saved to your Garage!
                  </p>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Right Column: Workshop Card & Details */}
        <div>
          <div className="glass-panel" style={{ padding: '1.8rem', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>Assigned Partner Workshop</h3>
            
            <div style={{ height: '180px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.2rem' }}>
              <img src={selectedWorkshop.image} alt={selectedWorkshop.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 800 }}>{selectedWorkshop.name}</h4>
            <p style={{ color: '#00E5FF', fontSize: '0.85rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <MapPin size={14} /> {selectedWorkshop.address}
            </p>

            <div style={{ fontSize: '0.85rem', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.2rem' }}>
              <div>⭐ Rating: <strong style={{ color: '#FFF' }}>{selectedWorkshop.rating} / 5.0</strong> ({selectedWorkshop.reviewsCount} reviews)</div>
              <div>⏰ Operating Hours: <strong style={{ color: '#FFF' }}>{selectedWorkshop.timing}</strong></div>
              <div>📞 Contact: <strong style={{ color: '#FFF' }}>{selectedWorkshop.phone}</strong></div>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(255, 94, 0, 0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,94,0,0.2)', fontSize: '0.8rem', color: '#CBD5E1' }}>
              🛡️ Includes 6-Month / 10,000 KM MotoLink Service Warranty across all metro workshops.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

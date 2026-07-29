import React, { useState } from 'react';
import { Car, Wrench, Sparkles, ShoppingBag, X, CheckCircle2, Clock, User, LogOut, ShieldCheck } from 'lucide-react';

export default function DashboardModal({ isOpen, onClose, user, onLogout, userBookings, userRepairs, userMods, userListings }) {
  const [activeTab, setActiveTab] = useState('all');

  if (!isOpen || !user) return null;

  const totalHistoryCount = userBookings.length + userRepairs.length + userMods.length + userListings.length;

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ maxWidth: '780px' }}>
        
        <button onClick={onClose} style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer' }}>
          <X size={20} />
        </button>

        {/* User Profile Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'linear-gradient(135deg, #FF5E00, #FF0055)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF', fontWeight: 900, fontSize: '1.4rem' }}>
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF' }}>{user.name}'s Garage</h2>
              <div style={{ fontSize: '0.82rem', color: '#94A3B8', display: 'flex', gap: '0.8rem', marginTop: '0.2rem' }}>
                <span>✉️ {user.email}</span>
                <span>📞 {user.phone}</span>
                <span>💳 DL: {user.drivingLicense || 'DL-Verified'}</span>
              </div>
            </div>
          </div>

          <button onClick={() => { onLogout(); onClose(); }} className="btn-secondary" style={{ padding: '0.45rem 0.9rem', fontSize: '0.82rem' }}>
            <LogOut size={14} /> Sign Out
          </button>
        </div>

        {/* Sub-tab Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.8rem', marginBottom: '1.5rem' }}>
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '50px',
              border: activeTab === 'all' ? '1px solid #FF5E00' : '1px solid rgba(255,255,255,0.08)',
              background: activeTab === 'all' ? 'rgba(255, 94, 0, 0.15)' : 'rgba(255,255,255,0.04)',
              color: activeTab === 'all' ? '#FF5E00' : '#94A3B8',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            All Activity ({totalHistoryCount})
          </button>

          <button
            onClick={() => setActiveTab('rentals')}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '50px',
              border: activeTab === 'rentals' ? '1px solid #FF5E00' : '1px solid rgba(255,255,255,0.08)',
              background: activeTab === 'rentals' ? 'rgba(255, 94, 0, 0.15)' : 'rgba(255,255,255,0.04)',
              color: activeTab === 'rentals' ? '#FF5E00' : '#94A3B8',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            🚗 Rentals ({userBookings.length})
          </button>

          <button
            onClick={() => setActiveTab('repairs')}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '50px',
              border: activeTab === 'repairs' ? '1px solid #00E5FF' : '1px solid rgba(255,255,255,0.08)',
              background: activeTab === 'repairs' ? 'rgba(0, 229, 255, 0.15)' : 'rgba(255,255,255,0.04)',
              color: activeTab === 'repairs' ? '#00E5FF' : '#94A3B8',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            🛠️ Repairs ({userRepairs.length})
          </button>

          <button
            onClick={() => setActiveTab('mods')}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '50px',
              border: activeTab === 'mods' ? '1px solid #FFB800' : '1px solid rgba(255,255,255,0.08)',
              background: activeTab === 'mods' ? 'rgba(255, 184, 0, 0.15)' : 'rgba(255,255,255,0.04)',
              color: activeTab === 'mods' ? '#FFB800' : '#94A3B8',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            🏎️ Tuning ({userMods.length})
          </button>

          <button
            onClick={() => setActiveTab('listings')}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '50px',
              border: activeTab === 'listings' ? '1px solid #10B981' : '1px solid rgba(255,255,255,0.08)',
              background: activeTab === 'listings' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.04)',
              color: activeTab === 'listings' ? '#10B981' : '#94A3B8',
              fontSize: '0.82rem',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            🏷️ Listings ({userListings.length})
          </button>
        </div>

        {/* Empty State */}
        {totalHistoryCount === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', background: 'rgba(255,255,255,0.02)', borderRadius: 'var(--radius-md)' }}>
            <Car size={40} color="#64748B" style={{ margin: '0 auto 1rem auto' }} />
            <h4 style={{ fontSize: '1.1rem', color: '#FFF', fontWeight: 800 }}>Your Garage is Empty</h4>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.3rem' }}>
              You haven't submitted any rental bookings, workshop repairs, or car listings yet.
            </p>
          </div>
        )}

        {/* Activity Feed */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {/* RENTALS */}
          {(activeTab === 'all' || activeTab === 'rentals') && userBookings.map((b) => (
            <div key={b.id} style={{ background: 'rgba(255, 94, 0, 0.06)', border: '1px solid rgba(255, 94, 0, 0.2)', padding: '1.2rem', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div>
                  <span className="badge-neon" style={{ marginBottom: '0.3rem' }}>RENTAL BOOKING • #{b.id}</span>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF' }}>{b.carName}</h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#FF5E00' }}>₹{b.totalAmount.toLocaleString('en-IN')}</div>
                  <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 700 }}>{b.status}</span>
                </div>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <div>📍 Pickup: {b.pickupAddress} ({b.pickupCity}) • {b.pickupDate}</div>
                <div>📍 Return: {b.dropAddress} ({b.dropCity}) • {b.dropDate}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Booked on: {b.createdAt}</div>
              </div>
            </div>
          ))}

          {/* REPAIRS */}
          {(activeTab === 'all' || activeTab === 'repairs') && userRepairs.map((r) => (
            <div key={r.id} style={{ background: 'rgba(0, 229, 255, 0.06)', border: '1px solid rgba(0, 229, 255, 0.2)', padding: '1.2rem', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div>
                  <span className="badge-cyan" style={{ marginBottom: '0.3rem' }}>WORKSHOP REPAIR • #{r.id}</span>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF' }}>{r.serviceName} ({r.carDetails})</h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#00E5FF' }}>₹{r.totalAmount.toLocaleString('en-IN')}</div>
                  <span style={{ fontSize: '0.72rem', color: '#00E5FF', fontWeight: 700 }}>{r.status}</span>
                </div>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <div>🏬 Workshop: {r.workshopName} ({r.workshopAddress})</div>
                <div>📅 Date & Slot: {r.serviceDate}</div>
                <div>🚚 Doorstep Pickup: {r.doorstepPickup ? r.pickupAddress : 'Self Drive Dropoff'}</div>
              </div>
            </div>
          ))}

          {/* MODS */}
          {(activeTab === 'all' || activeTab === 'mods') && userMods.map((m) => (
            <div key={m.id} style={{ background: 'rgba(255, 184, 0, 0.06)', border: '1px solid rgba(255, 184, 0, 0.2)', padding: '1.2rem', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(255,184,0,0.15)', color: '#FFB800', border: '1px solid rgba(255,184,0,0.3)', padding: '0.2rem 0.6rem', borderRadius: '50px', fontWeight: 700, display: 'inline-block', marginBottom: '0.3rem' }}>
                    TUNING QUOTE • #{m.id}
                  </span>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF' }}>{m.packageName}</h4>
                </div>
                <span style={{ fontSize: '0.75rem', color: '#FFB800', fontWeight: 700 }}>{m.status}</span>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <div>🏎️ Vehicle: {m.carDetails}</div>
                <div>💰 Budget Bracket: {m.budget}</div>
                <div>📍 Delivery Metro: {m.deliveryCity}</div>
              </div>
            </div>
          ))}

          {/* LISTINGS */}
          {(activeTab === 'all' || activeTab === 'listings') && userListings.map((l) => (
            <div key={l.id} style={{ background: 'rgba(16, 185, 129, 0.06)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '1.2rem', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', background: 'rgba(16,185,129,0.15)', color: '#10B981', border: '1px solid rgba(16,185,129,0.3)', padding: '0.2rem 0.6rem', borderRadius: '50px', fontWeight: 700, display: 'inline-block', marginBottom: '0.3rem' }}>
                    CAR FOR SALE • #{l.id}
                  </span>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFF' }}>{l.make} {l.model} ({l.year})</h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#10B981' }}>₹{l.priceLakhs} Lakh</div>
                  <span style={{ fontSize: '0.72rem', color: '#10B981', fontWeight: 700 }}>{l.status}</span>
                </div>
              </div>
              <div style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                <div>🚗 Specs: {l.kmDriven.toLocaleString('en-IN')} KM • {l.fuel} • {l.transmission} • {l.owner}</div>
                <div>🏷️ RTO State: {l.rtoCode} • City: {l.city}</div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

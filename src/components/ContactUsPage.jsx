import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Clock, ShieldAlert, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { CONTACT_INFO, METRO_CITIES } from '../data/motolinkData';

export default function ContactUsPage({ currentCity }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState(currentCity.name);
  const [subject, setSubject] = useState('General Query');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ padding: '2rem 1.5rem 4rem 1.5rem' }}>
      
      {/* Header */}
      <div style={{ marginBottom: '2.5rem', textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
        <span className="badge-cyan" style={{ marginBottom: '0.6rem' }}>24x7 SUPPORT & PARTNERSHIPS</span>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 900 }}>
          Contact <span className="text-gradient-orange">MotoLink India</span>
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '1rem', marginTop: '0.4rem' }}>
          Have questions about car rentals, workshop bookings, tuning packages, or workshop partnerships in metro cities? We are here to help 24x7.
        </p>
      </div>

      {/* Emergency Roadside Banner */}
      <div 
        style={{
          background: 'linear-gradient(135deg, rgba(255, 94, 0, 0.2) 0%, rgba(255, 0, 85, 0.2) 100%)',
          border: '1px solid #FF5E00',
          borderRadius: 'var(--radius-md)',
          padding: '1.2rem 2rem',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '3rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: '#FF5E00', color: '#FFF', padding: '0.6rem', borderRadius: '50%' }}>
            <ShieldAlert size={26} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#FFF' }}>24x7 Pan-India Emergency Roadside Towing</div>
            <span style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>Breakdown support across all 8 Metro Expressways</span>
          </div>
        </div>

        <a 
          href={`tel:${CONTACT_INFO.emergencyRoadside.split(' ')[0]}`}
          className="btn-primary" 
          style={{ background: '#FF0055', boxShadow: '0 0 20px rgba(255,0,85,0.4)', textDecoration: 'none' }}
        >
          <PhoneCall size={18} /> Call Tow Hotline: 1800-209-9000
        </a>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        
        {/* Left Column: Direct Contact Info & Metro HQs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.2rem' }}>Corporate Headquarters</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', gap: '0.8rem', color: '#CBD5E1' }}>
                <MapPin size={20} color="#FF5E00" style={{ flexShrink: 0 }} />
                <span>{CONTACT_INFO.address}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', color: '#CBD5E1' }}>
                <PhoneCall size={20} color="#00E5FF" style={{ flexShrink: 0 }} />
                <span>Customer Care: {CONTACT_INFO.helpline}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', color: '#CBD5E1' }}>
                <Mail size={20} color="#FFB800" style={{ flexShrink: 0 }} />
                <span>Support: {CONTACT_INFO.supportEmail}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', color: '#CBD5E1' }}>
                <Clock size={20} color="#10B981" style={{ flexShrink: 0 }} />
                <span>Hours: {CONTACT_INFO.operatingHours}</span>
              </div>
            </div>
          </div>

          {/* Regional Metro Hubs */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>Metro City Regional Offices</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.85rem' }}>
              {CONTACT_INFO.metroHqs.map((hq, idx) => (
                <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ fontWeight: 800, color: '#FF5E00' }}>{hq.city} Hub</div>
                  <div style={{ color: '#94A3B8', marginTop: '0.2rem' }}>{hq.address}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '0.5rem' }}>Send Us a Message</h3>
          <p style={{ color: '#94A3B8', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
            Fill out the form below and an executive from your city will respond within 15 minutes.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" value={name} onChange={e => setName(e.target.value)} required placeholder="e.g. Rahul Sharma" />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} required placeholder="rahul@gmail.com" />
                </div>

                <div className="form-group">
                  <label className="form-label">Metro City</label>
                  <select className="form-select" value={city} onChange={e => setCity(e.target.value)}>
                    {METRO_CITIES.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Inquiry Topic</label>
                <select className="form-select" value={subject} onChange={e => setSubject(e.target.value)}>
                  <option value="General Query">General Query</option>
                  <option value="Car Rental Booking">Car Rental Booking</option>
                  <option value="Workshop Service Inquiry">Workshop Service Inquiry</option>
                  <option value="Custom Tuning Quote">Custom Tuning Quote</option>
                  <option value="Sell My Car Support">Sell My Car Support</option>
                  <option value="Workshop Onboarding Partner">Join as Workshop Partner</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Message Details</label>
                <textarea className="form-textarea" rows="4" value={message} onChange={e => setMessage(e.target.value)} required placeholder="How can our team assist you today?" />
              </div>

              <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                <Send size={16} /> Send Message to MotoLink
              </button>
            </form>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>Message Sent!</h3>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Thank you {name || 'User'}. Our {city} support desk has received your ticket for "{subject}".
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-secondary">
                Send Another Inquiry
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}

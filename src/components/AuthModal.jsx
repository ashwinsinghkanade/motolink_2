import React, { useState } from 'react';
import { User, Mail, Lock, Phone, CreditCard, X, CheckCircle } from 'lucide-react';

export default function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [drivingLicense, setDrivingLicense] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (isSignUp) {
      if (!name || !email || !phone || !drivingLicense || !password) {
        setErrorMsg('Please fill all required registration details!');
        return;
      }
      const newUser = {
        name,
        email,
        phone,
        drivingLicense,
        password,
        role: 'CUSTOMER'
      };
      onLoginSuccess(newUser);
      onClose();
    } else {
      // Secret Admin Credentials Check (hidden from public UI)
      if (email.trim() === 'admin@123' && password.trim() === '12345678') {
        const adminUser = {
          name: 'MotoLink System Admin',
          email: 'admin@123',
          phone: '+91 99999 88888',
          drivingLicense: 'DL-ADMIN-001',
          role: 'ADMIN'
        };
        onLoginSuccess(adminUser);
        onClose();
        return;
      }

      if (!email || !password) {
        setErrorMsg('Please enter email and password!');
        return;
      }
      
      const loggedInUser = {
        name: name || email.split('@')[0] || 'Driver User',
        email,
        phone: phone || '+91 98200 12345',
        drivingLicense: drivingLicense || 'DL-MH02-2023-009988',
        role: 'CUSTOMER'
      };
      onLoginSuccess(loggedInUser);
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <button onClick={onClose} style={{ position: 'absolute', top: '1.2rem', right: '1.2rem', background: 'transparent', border: 'none', color: '#94A3B8', cursor: 'pointer' }}>
          <X size={20} />
        </button>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '0.35rem', borderRadius: '50px', marginBottom: '1.5rem' }}>
          <button
            onClick={() => { setIsSignUp(false); setErrorMsg(''); }}
            style={{
              flex: 1,
              padding: '0.6rem',
              borderRadius: '50px',
              border: 'none',
              background: !isSignUp ? 'linear-gradient(135deg, #00E5FF, #0088FF)' : 'transparent',
              color: '#FFF',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer'
            }}
          >
            Sign In
          </button>

          <button
            onClick={() => { setIsSignUp(true); setErrorMsg(''); }}
            style={{
              flex: 1,
              padding: '0.6rem',
              borderRadius: '50px',
              border: 'none',
              background: isSignUp ? 'linear-gradient(135deg, #FF5E00, #FF2E00)' : 'transparent',
              color: '#FFF',
              fontWeight: 800,
              fontSize: '0.88rem',
              cursor: 'pointer'
            }}
          >
            Sign Up
          </button>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.3rem', textAlign: 'center' }}>
          {!isSignUp ? 'Sign In to MotoLink' : 'Register MotoLink Driver Profile'}
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          {!isSignUp ? 'Sign in to access your active bookings, quotes and garage history' : 'Create your profile to book rentals, workshop repairs & trade cars'}
        </p>

        {errorMsg && (
          <div style={{ background: 'rgba(255, 0, 85, 0.15)', border: '1px solid #FF0055', color: '#FF0055', padding: '0.75rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1rem', textAlign: 'center' }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          
          {isSignUp && (
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" value={name} onChange={e => setName(e.target.value)} required placeholder="e.g. Vikram Malhotra" />
            </div>
          )}

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" value={email} onChange={e => setEmail(e.target.value)} required placeholder="your.email@gmail.com" />
          </div>

          {isSignUp && (
            <>
              <div className="form-group">
                <label className="form-label">Mobile Number (+91)</label>
                <input type="text" className="form-input" value={phone} onChange={e => setPhone(e.target.value)} required placeholder="+91 98200 12345" />
              </div>

              <div className="form-group">
                <label className="form-label">Indian Driving License No.</label>
                <input type="text" className="form-input" value={drivingLicense} onChange={e => setDrivingLicense(e.target.value)} required placeholder="DL-1420110012345" />
              </div>
            </>
          )}

          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" />
          </div>

          <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.5rem', width: '100%' }}>
            {!isSignUp ? 'Sign In Now' : 'Complete Registration & Sign In'}
          </button>
        </form>

      </div>
    </div>
  );
}

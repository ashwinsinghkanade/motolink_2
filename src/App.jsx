import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import RentCarPage from './components/RentCarPage';
import RepairPage from './components/RepairPage';
import ModifyPage from './components/ModifyPage';
import BuySellPage from './components/BuySellPage';
import ContactUsPage from './components/ContactUsPage';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import DashboardModal from './components/DashboardModal';
import AdminPanelModal from './components/AdminPanelModal';
import { METRO_CITIES } from './data/motolinkData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentCity, setCurrentCity] = useState(METRO_CITIES[0]); // Default Mumbai
  const [user, setUser] = useState(null); // Auth User Profile State
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);

  // REAL Stateful User Activity Arrays
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [userBookings, setUserBookings] = useState([]);
  const [userRepairs, setUserRepairs] = useState([]);
  const [userMods, setUserMods] = useState([]);
  const [userListings, setUserListings] = useState([]);

  // Handlers
  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setRegisteredUsers(prev => {
      if (prev.some(u => u.email === userData.email)) return prev;
      return [...prev, userData];
    });
  };

  const handleAddBooking = (booking) => {
    setUserBookings(prev => [booking, ...prev]);
  };

  const handleAddRepair = (repair) => {
    setUserRepairs(prev => [repair, ...prev]);
  };

  const handleAddMod = (mod) => {
    setUserMods(prev => [mod, ...prev]);
  };

  const handleAddListing = (listing) => {
    setUserListings(prev => [listing, ...prev]);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      
      {/* Top Navbar */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentCity={currentCity}
        setCurrentCity={setCurrentCity}
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenDashboard={() => setDashboardOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
        user={user}
      />

      {/* Main View Router */}
      <main style={{ flex: 1 }}>
        {activeTab === 'home' && (
          <HomePage 
            setActiveTab={setActiveTab}
            currentCity={currentCity}
            onOpenAuth={() => setAuthModalOpen(true)}
          />
        )}

        {activeTab === 'rent' && (
          <RentCarPage 
            currentCity={currentCity}
            user={user}
            onOpenAuth={() => setAuthModalOpen(true)}
            onAddBooking={handleAddBooking}
          />
        )}

        {activeTab === 'repair' && (
          <RepairPage 
            currentCity={currentCity}
            user={user}
            onOpenAuth={() => setAuthModalOpen(true)}
            onAddRepair={handleAddRepair}
          />
        )}

        {activeTab === 'modify' && (
          <ModifyPage 
            currentCity={currentCity}
            user={user}
            onOpenAuth={() => setAuthModalOpen(true)}
            onAddMod={handleAddMod}
          />
        )}

        {activeTab === 'buysell' && (
          <BuySellPage 
            currentCity={currentCity}
            user={user}
            onOpenAuth={() => setAuthModalOpen(true)}
            onAddListing={handleAddListing}
          />
        )}

        {activeTab === 'contact' && (
          <ContactUsPage 
            currentCity={currentCity}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Auth Modal */}
      <AuthModal 
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* User Garage Dashboard Modal */}
      <DashboardModal 
        isOpen={dashboardOpen}
        onClose={() => setDashboardOpen(false)}
        user={user}
        onLogout={() => setUser(null)}
        userBookings={userBookings}
        userRepairs={userRepairs}
        userMods={userMods}
        userListings={userListings}
      />

      {/* Admin Panel Modal */}
      <AdminPanelModal 
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        userBookings={userBookings}
        userRepairs={userRepairs}
        userMods={userMods}
        userListings={userListings}
        registeredUsers={registeredUsers}
      />

    </div>
  );
}

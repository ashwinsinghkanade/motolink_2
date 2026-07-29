// Metro Cities Dataset
export const METRO_CITIES = [
  { id: 'mumbai', name: 'Mumbai', state: 'Maharashtra', code: 'MH', coords: { lat: 19.0760, lng: 72.8777 }, popularRto: 'MH-02' },
  { id: 'delhi', name: 'Delhi NCR', state: 'Delhi', code: 'DL', coords: { lat: 28.6139, lng: 77.2090 }, popularRto: 'DL-3C' },
  { id: 'bengaluru', name: 'Bengaluru', state: 'Karnataka', code: 'KA', coords: { lat: 12.9716, lng: 77.5946 }, popularRto: 'KA-01' },
  { id: 'hyderabad', name: 'Hyderabad', state: 'Telangana', code: 'TS', coords: { lat: 17.3850, lng: 78.4867 }, popularRto: 'TS-09' },
  { id: 'chennai', name: 'Chennai', state: 'Tamil Nadu', code: 'TN', coords: { lat: 13.0827, lng: 80.2707 }, popularRto: 'TN-07' },
  { id: 'kolkata', name: 'Kolkata', state: 'West Bengal', code: 'WB', coords: { lat: 22.5726, lng: 88.3639 }, popularRto: 'WB-02' },
  { id: 'pune', name: 'Pune', state: 'Maharashtra', code: 'MH', coords: { lat: 18.5204, lng: 73.8567 }, popularRto: 'MH-12' },
  { id: 'ahmedabad', name: 'Ahmedabad', state: 'Gujarat', code: 'GJ', coords: { lat: 23.0225, lng: 72.5714 }, popularRto: 'GJ-01' },
];

// Rental Fleet Catalog - Fixed with Exact Matched Car Models
export const RENTAL_CARS = [
  {
    id: 'rent-1',
    make: 'Mahindra',
    model: 'Thar 4x4 Hardtop',
    year: 2024,
    category: 'SUV / Off-Road',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 4,
    pricePerDay: 3800,
    deposit: 5000,
    rating: 4.9,
    reviews: 142,
    city: 'mumbai',
    badge: 'Popular Choice',
    image: '/thar_4x4.png',
    features: ['4WD High/Low', 'Convertible Roof', 'Touchscreen Infotainment', 'All-Terrain Tires']
  },
  {
    id: 'rent-2',
    make: 'Tata',
    model: 'Nexon EV Long Range',
    year: 2024,
    category: 'Electric SUV',
    fuel: 'Electric',
    transmission: 'Automatic',
    seats: 5,
    pricePerDay: 2600,
    deposit: 3000,
    rating: 4.85,
    reviews: 98,
    city: 'bengaluru',
    badge: 'Eco Friendly',
    image: '/nexon_ev.png',
    features: ['465 km Range', 'Ventilated Seats', '360 Camera', 'Fast Charging']
  },
  {
    id: 'rent-3',
    make: 'Hyundai',
    model: 'Creta SX (O)',
    year: 2024,
    category: 'Compact SUV',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    pricePerDay: 2900,
    deposit: 4000,
    rating: 4.8,
    reviews: 215,
    city: 'delhi',
    badge: 'Top Rated',
    image: '/creta_suv.png',
    features: ['Panoramic Sunroof', 'Bose 8-Speaker Audio', 'ADAS Level 2', 'Leatherette Seats']
  },
  {
    id: 'rent-4',
    make: 'Maruti Suzuki',
    model: 'Swift ZXi+',
    year: 2023,
    category: 'Hatchback',
    fuel: 'Petrol',
    transmission: 'Manual',
    seats: 5,
    pricePerDay: 1600,
    deposit: 2000,
    rating: 4.7,
    reviews: 310,
    city: 'pune',
    badge: 'Best Value',
    image: '/swift_car.png',
    features: ['22.5 kmpl Mileage', 'SmartPlay Studio', 'Push Start/Stop', 'Cruise Control']
  },
  {
    id: 'rent-5',
    make: 'BMW',
    model: '3 Series Gran Limousine',
    year: 2024,
    category: 'Luxury Sedan',
    fuel: 'Petrol',
    transmission: 'Automatic',
    seats: 5,
    pricePerDay: 9500,
    deposit: 15000,
    rating: 4.95,
    reviews: 64,
    city: 'mumbai',
    badge: 'Premium Luxury',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    features: ['M Sport Package', 'Harman Kardon Sound', 'Ambient Lighting', 'Adaptive Suspension']
  },
  {
    id: 'rent-6',
    make: 'Toyota',
    model: 'Fortuner Legender 4x4',
    year: 2024,
    category: 'Full-Size SUV',
    fuel: 'Diesel',
    transmission: 'Automatic',
    seats: 7,
    pricePerDay: 6800,
    deposit: 10000,
    rating: 4.9,
    reviews: 180,
    city: 'hyderabad',
    badge: 'VIP Executive',
    image: '/fortuner_suv.png',
    features: ['Wireless Charging', 'Power Tailgate', 'JBL Audio', 'Dual Zone AC']
  }
];

// Workshops Dataset in Metro Cities
export const WORKSHOPS = [
  {
    id: 'ws-1',
    name: 'Apex SpeedWorks & Diagnostics',
    city: 'mumbai',
    area: 'Andheri West, Mumbai',
    rating: 4.9,
    reviewsCount: 340,
    services: ['Periodic Service', 'Engine Overhaul', 'Brake Overhaul', 'AC Repair', 'Paint & Bodywork'],
    doorstepPickup: true,
    timing: '8:00 AM - 9:00 PM',
    phone: '+91 98200 11223',
    address: 'Plot 42, Veera Desai Industrial Estate, Andheri West, Mumbai',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ws-2',
    name: 'German AutoTech Specialist',
    city: 'bengaluru',
    area: 'Koramangala 4th Block, Bengaluru',
    rating: 4.88,
    reviewsCount: 420,
    services: ['Computer Diagnostics', 'DSG Transmission Repair', 'Suspension Overhaul', 'ECU Coding'],
    doorstepPickup: true,
    timing: '9:00 AM - 8:30 PM',
    phone: '+91 98450 33445',
    address: '80 Feet Road, Koramangala 4th Block, Bengaluru',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ws-3',
    name: 'Capital MotoCare & Body Shop',
    city: 'delhi',
    area: 'Okhla Phase III, New Delhi',
    rating: 4.82,
    reviewsCount: 290,
    services: ['Accidental Repair', 'Ceramic Coating', 'Tire Alignment', 'Battery Replacement'],
    doorstepPickup: true,
    timing: '8:30 AM - 8:00 PM',
    phone: '+91 98110 55667',
    address: 'C-18, Okhla Industrial Area Phase III, New Delhi',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ws-4',
    name: 'Deccan Performance Workshop',
    city: 'hyderabad',
    area: 'Gachibowli, Hyderabad',
    rating: 4.91,
    reviewsCount: 185,
    services: ['Complete Service', 'Clutch Replacement', 'Radiator Service', 'Denting Painting'],
    doorstepPickup: true,
    timing: '9:00 AM - 9:00 PM',
    phone: '+91 98850 77889',
    address: 'Plot 12, Financial District, Gachibowli, Hyderabad',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  }
];

// Modification Packages
export const MODIFICATION_PACKAGES = [
  {
    id: 'mod-1',
    title: 'Stage 1 ECU Performance Remap',
    category: 'Engine Performance',
    estTime: '1 Day',
    priceRange: '₹22,000 - ₹38,000',
    gains: '+25 HP / +50 Nm Torque',
    description: 'Custom dyno-tuned ECU remap optimizing air-fuel ratios, turbo boost parameters, and throttle response.',
    features: ['Pop & Bang Map option', 'Speed Limiter Removal', 'Fuel Efficiency Boost in Eco Mode', '1 Year Software Warranty'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mod-2',
    title: 'Valvetronic Custom Exhaust System',
    category: 'Exhaust Systems',
    estTime: '2 Days',
    priceRange: '₹45,000 - ₹85,000',
    gains: 'Deep Aggressive Exhaust Note',
    description: 'Stainless steel T304 cat-back exhaust with remote valve control switch (Quiet / Beast mode).',
    features: ['Dual Carbon Fiber Tips', 'Vacuum Actuator Valve', 'Direct Bolt-on Fitment', 'No CEL Error Guarantee'],
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mod-3',
    title: 'Custom Body Kit & Aerodynamics',
    category: 'Exterior Styling',
    estTime: '3-5 Days',
    priceRange: '₹35,000 - ₹1,20,000',
    gains: 'Aggressive Stance & Downforce',
    description: 'Front lip splitter, side skirts, rear diffuser with F1 brake light, and ducktail trunk spoiler.',
    features: ['ABS Plastic / Carbon Fiber Option', 'OEM Paint Matching', 'UV Clear Coat Shield', 'Aerodynamic Efficiency'],
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mod-4',
    title: 'Full Body Self-Healing TPU PPF / Satin Wrap',
    category: 'Paint Protection & Color',
    estTime: '4 Days',
    priceRange: '₹65,000 - ₹1,80,000',
    gains: 'Scratch Proof & Super Hydrophobic',
    description: '10-Mil ultra-clear or satin matte protective film protecting OEM paint from stone chips & scratches.',
    features: ['5-Year Warranty against Yellowing', 'Self-Healing Heat Activation', '99% UV Ray Rejection', 'Custom Color Options'],
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80'
  }
];

// Buy & Sell Pre-owned Used Cars - Exact Model Matched Images
export const PREOWNED_CARS = [
  {
    id: 'car-1',
    make: 'Mahindra',
    model: 'XUV700 AX7 Luxury Pack Diesel 7STR',
    year: 2023,
    priceLakhs: 22.50,
    priceRaw: 2250000,
    kmDriven: 18500,
    fuel: 'Diesel',
    transmission: 'Automatic',
    owner: '1st Owner',
    rtoCode: 'MH-02',
    city: 'mumbai',
    location: 'Bandra West, Mumbai',
    verified: true,
    sellerContact: '+91 98201 99887',
    image: '/fortuner_suv.png',
    features: ['Sony 3D Sound', 'ADAS Level 2', 'Panoramic Sunroof', 'AWD Drive']
  },
  {
    id: 'car-2',
    make: 'Tata',
    model: 'Harrier Fearless Dark Edition',
    year: 2023,
    priceLakhs: 19.80,
    priceRaw: 1980000,
    kmDriven: 24000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    owner: '1st Owner',
    rtoCode: 'DL-3C',
    city: 'delhi',
    location: 'Vasant Kunj, New Delhi',
    verified: true,
    sellerContact: '+91 98112 44332',
    image: '/thar_4x4.png',
    features: ['10.25 Inch Infotainment', 'Memory Seats', 'Air Purifier', '19 Inch Black Alloys']
  },
  {
    id: 'car-3',
    make: 'Skoda',
    model: 'Slavia 1.5 TSI Style DSG',
    year: 2022,
    priceLakhs: 14.20,
    priceRaw: 1420000,
    kmDriven: 31000,
    fuel: 'Petrol',
    transmission: 'Automatic (DSG)',
    owner: '1st Owner',
    rtoCode: 'KA-01',
    city: 'bengaluru',
    location: 'Indiranagar, Bengaluru',
    verified: true,
    sellerContact: '+91 98451 88776',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80',
    features: ['150 HP Turbo Engine', 'Ventilated Front Seats', 'Wireless CarPlay', 'Canton Sound']
  },
  {
    id: 'car-4',
    make: 'Hyundai',
    model: 'Verna 1.5 Turbo SX(O) DCT',
    year: 2023,
    priceLakhs: 15.90,
    priceRaw: 1590000,
    kmDriven: 14500,
    fuel: 'Petrol',
    transmission: 'Automatic',
    owner: '1st Owner',
    rtoCode: 'TS-09',
    city: 'hyderabad',
    location: 'Jubilee Hills, Hyderabad',
    verified: true,
    sellerContact: '+91 98852 11009',
    image: '/creta_suv.png',
    features: ['Horizon LED Light Bar', 'Heated & Ventilated Seats', '160 PS Power', 'Bose Sound']
  }
];

// Headquarters & Contact Info
export const CONTACT_INFO = {
  headquarters: 'MotoLink Automotive Technologies Pvt Ltd',
  address: 'Level 14, One Horizon Center, DLF Phase 5, Sector 43, Gurugram, Delhi NCR - 122002',
  helpline: '+91 (022) 800-MOTOLINK',
  supportEmail: 'support@motolink.in',
  businessEmail: 'partners@motolink.in',
  emergencyRoadside: '1800-209-9000 (24x7 Pan-India)',
  operatingHours: 'Monday - Saturday: 8:00 AM - 10:00 PM IST',
  metroHqs: [
    { city: 'Mumbai', address: 'Bandra-Kurla Complex (BKC), Mumbai' },
    { city: 'Bengaluru', address: 'UB City, Vittal Mallya Road, Bengaluru' },
    { city: 'Hyderabad', address: 'HITEC City, Madhapur, Hyderabad' },
    { city: 'Chennai', address: 'Guindy Industrial Estate, Chennai' }
  ]
};

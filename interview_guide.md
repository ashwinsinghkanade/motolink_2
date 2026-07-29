# 🚗 MotoLink - Master Technical Interview Guide & Architecture Specification

This document provides a 360-degree technical overview of **MotoLink**, an Indian Automotive Super-App built for Metro Cities. Use this guide to answer any technical or architectural question during interviews.

---

## 1. Executive Summary & Tech Stack Versions

| Component | Technology | Version | Key Purpose |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | React | `18.3.1` | Component-driven Single Page Application (SPA) |
| **Build Tool & Bundler** | Vite | `8.1.5` | Fast ESM HMR, asset bundling, and production build |
| **Styling & Design System** | Vanilla CSS3 | Standard | Custom Design Tokens (Dark Neon Automotive theme, Glassmorphism, Responsive CSS Grid) |
| **Icons Library** | Lucide React | `1.16.0` | Feather-based lightweight SVG vector icons |
| **Backend Framework** | Java Spring Boot | `3.2.2` | Enterprise RESTful API Gateway & Business Logic Services |
| **Java Runtime** | OpenJDK / JDK | `17` (LTS) | Long-Term Support Java Virtual Machine |
| **Database** | MySQL | `8.0` / `8.3` | Relational Database Management System (RDBMS) |
| **ORM Framework** | Spring Data JPA / Hibernate | `6.4.1` | Object-Relational Mapping & DDL schema auto-generation |
| **Security & Auth** | Spring Security + JJWT | `0.11.5` | Stateless JWT Bearer Token Authentication & RBAC Filter |
| **Build Automation** | Apache Maven | `3.9.x` | Java dependency management & lifecycle build pipeline |

---

## 2. End-to-End Request Flow Architecture

```mermaid
sequenceDiagram
    autonumber
    actor Client as User / Browser (React SPA)
    participant Gateway as React State / Axios / Fetch
    participant Spring as Spring Boot Security Filter Chain
    participant Controller as REST Controllers (@RestController)
    participant Service as Service Layer (@Service)
    participant Repo as JPA Repositories (JpaRepository)
    participant DB as MySQL Database (motolink_db)

    Client->>Gateway: User completes Form (Rent / Repair / Mod / Sell)
    Gateway->>Spring: HTTP POST /api/v1/{module} (Bearer JWT in Authorization Header)
    Spring->>Spring: Validate JWT Token Signature & Role (CUSTOMER vs ADMIN)
    alt Valid Token & Role
        Spring->>Controller: Route Request Payload (DTO)
        Controller->>Service: Execute Business Validation & Pricing Math
        Service->>Repo: save(entity) / findByCity()
        Repo->>DB: SQL INSERT INTO table (...) VALUES (...)
        DB-->>Repo: Return Generated ID & Timestamp
        Repo-->>Service: Return Saved Entity
        Service-->>Controller: Map Entity to Response DTO
        Controller-->>Spring: 200 OK + JSON Payload
        Spring-->>Client: Update UI & Add Entry to User Garage / Admin Feed
    else Invalid Token / Access Denied
        Spring-->>Client: 401 Unauthorized / 403 Forbidden Response
    end
```

---

## 3. Detailed Page & Module Specification

### 1. Home Page (`HomePage.jsx`)
- **Hero Supercar Showcase**: High-resolution sports car hero display with ambient neon lighting and live Metro Hub indicator pill.
- **Service Launcher Grid**: Quick navigation cards for Rent, Repair, Modify, and Buy/Sell.
- **Popular Rentals Fleet**: Carousel highlights for Tata Nexon EV, Mahindra Thar, Hyundai Creta, Swift, and Fortuner.
- **Trust Indicators**: Verified OEM workshops, doorstep pickup guarantee, RTO verification shield.

### 2. Rent a Car Module (`RentCarPage.jsx`)
- **Functionality**: Self-drive car rental reservation across Indian metro cities.
- **Form Fields**: Pickup Metro Location, Pickup Address/Landmark, Return Metro Location, Return Address/Landmark, Pickup Date & Time, Return Date & Time.
- **Auto-Filled User Info**: Customer Full Name, Mobile (+91), Indian Driving License Number (`DL-XXXXX`).
- **Financial Calculation**: `(Daily Rate × Days) + 18% GST + Refundable Security Deposit`.

### 3. Repair Workshop Module (`RepairPage.jsx`)
- **Functionality**: Book certified workshop service appointments with doorstep pickup.
- **Form Fields**:
  - Car Company / Brand (Dropdown: Maruti Suzuki, Hyundai, Tata, Mahindra, BMW, etc.)
  - Car Model & Variant (e.g. Creta 1.5 SX, Swift ZXi)
  - Year of Manufacture & Fuel Type (Petrol / Diesel / CNG / EV)
  - Service Package (General Service ₹3,499, AC Overhaul ₹2,899, Brake Disc ₹4,200, Transmission ₹8,500)
  - Issue Details, Preferred Service Date, Time Slot
  - Doorstep Pickup Toggle (+₹499 valet pickup) & Pickup Address in Metro City.

### 4. Custom Modification Studio (`ModifyPage.jsx`)
- **Functionality**: Performance tuning & body styling inquiries.
- **Form Fields**: Vehicle Brand, Model, Mfg Year, Engine Specs/Code (e.g. 1.0L TSI / 2.0L Diesel), Package (Stage 1/2 ECU Remap, Valvetronic Exhaust, Widebody Kit, PPF Satin Wrap), Budget Bracket (`₹15k-30k`, `₹30k-75k`, `₹75k-1.5L`, `₹1.5L+`), Delivery Metro City, Phone.

### 5. Buy & Sell Marketplace (`BuySellPage.jsx`)
- **Buy Tab**: Search certified pre-owned cars with RTO codes (`MH-02`, `DL-3C`, `KA-01`), pricing in ₹ Lakhs (`₹22.50 Lakh`), owner history, and direct seller contact modal.
- **Sell Tab**: 3-step listing form (Car Company, Model, Variant, Reg Year, KM Driven, Fuel, Transmission, Ownership Count, RTO State Code, Expected Price in ₹ Lakhs, Seller Contact Number).

### 6. Contact Us Page (`ContactUsPage.jsx`)
- 24x7 Pan-India Emergency Breakdown Towing Banner (`1800-209-9000`).
- Regional Metro HQ Addresses (Gurugram, Mumbai BKC, Bengaluru UB City, Hyderabad HITEC City).
- Interactive Inquiry Form.

### 7. User Garage Dashboard (`DashboardModal.jsx`)
- **No Fake Data**: 100% real-time stateful activity feed.
- **Live User Profile**: Displays user's Name, Email, Phone, and verified Driving License Number.
- **Activity Feed**: Subtabs for Rentals (`userBookings`), Repairs (`userRepairs`), Tuning Quotes (`userMods`), and Car Listings (`userListings`).

### 8. Admin Control Center (`AdminPanelModal.jsx`)
- **Role-Gated Security**: Accessible **ONLY** when logged in with secret admin credentials (`admin@123` / `12345678`). No public buttons in header.
- **Real-Time KPIs**: Live Active Visitors, Registered Users Count, Total Submissions Count, Gross Financial Volume in `₹`.
- **Leads & Submissions Table**: Search & filter all customer form entries with phone, DL, and submitted details.
- **User Directory**: View all registered user profiles and roles.

---

## 4. Authentication, Security & JWT Mechanics

### How JWT Token Flow Works

```mermaid
graph TD
    Client[React App] -->|1. POST /api/v1/auth/login {email, password}| AuthController[Spring Security AuthController]
    AuthController -->|2. Authenticate Credentials| Manager[AuthenticationManager]
    Manager -->|3. Load UserDetails| UserDetailsService[CustomUserDetailsService]
    UserDetailsService -->|4. Verify BCrypt Password| DB[(MySQL Database)]
    Manager -->|5. Generate JWT Token| JwtProvider[JwtTokenProvider]
    JwtProvider -->|6. Sign with Secret Key + Claim Role| Token[JSON Web Token]
    Token -->|7. Return JWT in Response Header/JSON| Client
    Client -->|8. Store Token in localStorage| Storage[Browser LocalStorage]
    Client -->|9. Send 'Authorization: Bearer <token>'| ProtectedAPI[Protected REST API]
```

### Key Spring Security Components

1. **`JwtTokenProvider`**:
   - Generates JWT signed with HMAC-SHA512 algorithm using secret key (`motolink.jwt.secret`).
   - Sets Expiration Time (24 Hours / 86,400,000 ms).
   - Embeds User Role Claims (`ROLE_CUSTOMER` or `ROLE_ADMIN`).

2. **`JwtAuthenticationFilter`**:
   - Intercepts every incoming HTTP request.
   - Extracts `Bearer <token>` from the `Authorization` header.
   - Validates signature and token expiration.
   - Sets `SecurityContextHolder.getContext().setAuthentication(auth)` for Spring Security context.

3. **`SecurityConfig` (`SecurityFilterChain`)**:
   - Disables CSRF (since JWT is stateless).
   - Enables CORS for React frontend origin (`http://localhost:5173`).
   - Gates `/api/v1/admin/**` endpoints with `.hasRole('ADMIN')`.
   - Allows public endpoints (`/api/v1/auth/**`, `/api/v1/cars/**`).

---

## 5. MySQL Database Schema (`motolink_db`)

```sql
CREATE DATABASE IF NOT EXISTS motolink_db;
USE motolink_db;

-- 1. Users Table
CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    driving_license VARCHAR(30),
    role ENUM('CUSTOMER', 'ADMIN') DEFAULT 'CUSTOMER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Rental Fleet Table
CREATE TABLE rental_cars (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    category VARCHAR(30) NOT NULL,
    fuel_type VARCHAR(20) NOT NULL,
    transmission VARCHAR(20) NOT NULL,
    seats INT DEFAULT 5,
    price_per_day DECIMAL(10,2) NOT NULL,
    refundable_deposit DECIMAL(10,2) NOT NULL,
    metro_city VARCHAR(50) NOT NULL,
    image_url VARCHAR(500),
    is_available BOOLEAN DEFAULT TRUE
);

-- 3. Rental Bookings Table
CREATE TABLE rental_bookings (
    id VARCHAR(30) PRIMARY KEY, -- e.g. MTL-492019
    user_id BIGINT NOT NULL,
    car_name VARCHAR(100) NOT NULL,
    pickup_city VARCHAR(50) NOT NULL,
    pickup_address TEXT NOT NULL,
    drop_city VARCHAR(50) NOT NULL,
    drop_address TEXT NOT NULL,
    pickup_date VARCHAR(50) NOT NULL,
    drop_date VARCHAR(50) NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(30) DEFAULT 'CONFIRMED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 4. Repair Appointments Table
CREATE TABLE repair_bookings (
    id VARCHAR(30) PRIMARY KEY, -- e.g. REP-881920
    user_id BIGINT NOT NULL,
    workshop_name VARCHAR(150) NOT NULL,
    service_name VARCHAR(100) NOT NULL,
    car_details VARCHAR(255) NOT NULL,
    issue_description TEXT,
    service_date VARCHAR(100) NOT NULL,
    doorstep_pickup BOOLEAN DEFAULT TRUE,
    pickup_address TEXT,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(30) DEFAULT 'IN DIAGNOSTICS',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 5. Modification Requests Table
CREATE TABLE modification_requests (
    id VARCHAR(30) PRIMARY KEY, -- e.g. MOD-339102
    user_id BIGINT NOT NULL,
    package_name VARCHAR(100) NOT NULL,
    car_details VARCHAR(255) NOT NULL,
    budget_range VARCHAR(50) NOT NULL,
    delivery_city VARCHAR(50) NOT NULL,
    status VARCHAR(30) DEFAULT 'QUOTE READY',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 6. Used Car Listings Table
CREATE TABLE car_listings (
    id VARCHAR(30) PRIMARY KEY, -- e.g. LIST-992011
    seller_id BIGINT NOT NULL,
    make VARCHAR(50) NOT NULL,
    model VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    price_lakhs DECIMAL(6,2) NOT NULL,
    km_driven INT NOT NULL,
    fuel_type VARCHAR(20) NOT NULL,
    transmission VARCHAR(20) NOT NULL,
    owner_count VARCHAR(20) NOT NULL,
    rto_code VARCHAR(20) NOT NULL,
    metro_city VARCHAR(50) NOT NULL,
    seller_contact VARCHAR(15) NOT NULL,
    status VARCHAR(30) DEFAULT 'ACTIVE LISTING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (seller_id) REFERENCES users(id) ON DELETE CASCADE
);
```

---

## 6. Production Deployment & Hybrid Cloud Architecture

> [!IMPORTANT]
> **Vercel vs. Java Spring Boot Hosting Distinction**:
> Vercel is a platform designed specifically for static site generation, Node.js, and serverless JavaScript functions. **Vercel CANNOT natively execute Java Spring Boot servers (`.jar` or JVM runtimes)**.
> Therefore, full-stack React + Java Spring Boot applications use a **Hybrid Multi-Cloud Deployment**:

```mermaid
graph TD
    Developer[Developer Push to GitHub main] -->|GitHub Webhook| GitHubActions[GitHub Actions CI/CD Pipeline]
    
    subgraph Frontend Deployment - Vercel / Netlify
        GitHubActions -->|1. Build Vite Static Assets| Vercel[Vercel Global CDN]
        Vercel -->|Serves dist/index.html & JS| Users[End User Browsers]
    end

    subgraph Backend Container Hosting - Render / AWS / Railway
        GitHubActions -->|2. Docker Build & Push| DockerHub[Docker Container Registry]
        DockerHub -->|3. Deploy JRE 17 Container| Render[Render / AWS EC2 / Railway]
        Render -->|4. Runs Spring Boot JAR on Port 8080| SpringBootApp[Spring Boot REST API]
    end

    subgraph Database Managed Hosting
        SpringBootApp -->|5. HikariCP Connection Pool| ManagedDB[(Render MySQL / AWS RDS 8.0 Database)]
    end

    Users -->|REST API Requests to Backend Domain| Render
```

### Production Deployment Strategy (What to Tell Interviewer)

1. **Frontend Deployment (Vercel / Netlify)**:
   - **Host**: Vercel / Netlify.
   - **Process**: Vercel connects to GitHub repository, runs `npm run build`, and deploys static files (`dist/`).
   - **Environment Configuration**: Set `VITE_API_BASE_URL=https://motolink-backend.onrender.com/api/v1` in Vercel settings so React calls the production Spring Boot domain.

2. **Backend Deployment (Render / AWS EC2 / Railway)**:
   - **Why NOT Vercel for Backend?**: Vercel only supports Node.js/Edge serverless functions and does not support JVM / Java Spring Boot servers.
   - **Host**: **Render.com** (Web Service Docker deployment) or **AWS EC2 / Railway**.
   - **Docker Containerization**: Containerized with a multi-stage `Dockerfile`:
     - Stage 1: Maven build (`mvn package -DskipTests`).
     - Stage 2: `eclipse-temurin:17-jre-alpine` runtime running `java -jar app.jar`.

3. **Database Hosting**:
   - **Host**: **Render Managed MySQL** / **Aiven** / **AWS RDS MySQL 8.0**.
   - **Connection**: Configured using environment variables (`SPRING_DATASOURCE_URL`, `SPRING_DATASOURCE_USERNAME`, `SPRING_DATASOURCE_PASSWORD`).

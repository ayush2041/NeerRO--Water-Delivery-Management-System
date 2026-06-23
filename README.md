# 🚰 NeerRO — Smart RO Water Delivery Management System

A scalable platform that connects customers with local RO water suppliers for on-demand and scheduled water delivery, with live tracking and future AI-driven route optimization.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Overview](#api-overview)
- [Development Roadmap](#development-roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author / Contact](#author--contact)

---

## About

NeerRO is a Swiggy/Zomato-style delivery platform tailored to RO water suppliers and customers. The system supports order placement, supplier management, delivery tracking, and is designed for multi-city expansion with future integrations for route optimization, WhatsApp notifications, and payment gateways.

---

## Features

### Customer
- Registration & login (JWT)
- Browse nearby suppliers
- Order RO water bottles
- Track delivery status and live location (planned)
- Online payment support (planned)

### Supplier / Delivery
- Supplier registration & approval
- Manage orders and stock
- Update delivery status
- Delivery agent management

### Admin
- Manage users and suppliers
- Monitor orders & cities
- Approve suppliers and delivery agents

---

## Tech Stack

- Backend: Node.js, Express, MongoDB, Mongoose, JWT
- Frontend: React, Tailwind CSS
- Future: Google Maps API, Razorpay, WhatsApp Business API, AI route optimization

---

## Project Structure

NeerRO-Water-Delivery-System
```
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── server.js
└── frontend
    ├── components
    ├── pages
    ├── services
    └── App.js
```

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or Atlas)
- (Optional) ngrok or similar for local webhook testing

### Backend Setup
1. cd into the backend
   ```bash
   cd backend
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Create an `.env` file (see [Environment Variables](#environment-variables))
4. Start the server (development)
   ```bash
   npm run dev
   ```
   or
   ```bash
   node server.js
   ```

### Frontend Setup
1. cd into the frontend
   ```bash
   cd frontend
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Configure the frontend `.env` (API base URL, Google Maps key, etc.)
4. Start the dev server
   ```bash
   npm start
   ```

---

## Environment Variables

Create `.env` files for frontend and backend. Example backend `.env` keys:

- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret
- PORT=5000
- RAZORPAY_KEY_ID=your_razorpay_key
- RAZORPAY_KEY_SECRET=your_razorpay_secret
- GOOGLE_MAPS_API_KEY=your_google_maps_key

Add a `.env.example` file to the repo listing variables (without secrets).

---

## API Overview

High-level endpoints (examples — update with exact routes):
- Auth
  - POST /api/auth/register
  - POST /api/auth/login
- Users
  - GET /api/users/:id
- Suppliers
  - GET /api/suppliers
  - POST /api/suppliers
  - PUT /api/suppliers/:id/accept-order
- Orders
  - POST /api/orders
  - GET /api/orders/:id
  - PUT /api/orders/:id/status

Document endpoints in detail (request/response samples) in a separate API docs file or a Postman collection.

---

## Development Roadmap

Phase 1 (Done)
- Backend foundation, models, auth

Phase 2 (In progress)
- Complete Supplier & Order APIs
- JWT middleware, validation

Phase 3
- React customer dashboard

Phase 4
- Supplier & delivery dashboards

Phase 5
- Admin dashboard & analytics

Phase 6
- AI route optimization, GPS live tracking, WhatsApp automation

Phase 7
- Testing, CI/CD, deployment

---

## Contributing

1. Fork the repository
2. Create a feature branch: git checkout -b feat/my-feature
3. Commit changes: git commit -m "feat: add ..."
4. Push: git push origin feat/my-feature
5. Open a pull request describing your changes

Please open issues for bugs or feature requests. Add tests and documentation where possible.

---

## License

This project is offered under the MIT License. See LICENSE file for details.

---

## Author / Contact

Ayush Singh  
Project: NeerRO - Smart RO Water Delivery Management System

For questions or collaboration, open issues or contact me via GitHub.

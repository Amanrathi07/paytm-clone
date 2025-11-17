# 💰 Paytm Clone - Digital Wallet & Payment Platform

[![License](https://img.shields.io/github/license/Amanrathi07/paytm-clone?style=for-the-badge\&color=blue)](https://github.com/Amanrathi07/paytm-clone/blob/main/LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/Amanrathi07/paytm-clone/ci.yml?style=for-the-badge\&label=build)](https://github.com/Amanrathi07/paytm-clone/actions)
[![Website](https://img.shields.io/website?style=for-the-badge\&up_message=live\&url=https%3A%2F%2Fpaytm-clone-7bro.onrender.com)](https://paytm-clone-7bro.onrender.com/signin)

> **A full-stack Paytm-inspired digital wallet application** built with the MERN stack. Features secure authentication, real-time balance updates, peer-to-peer transfers, and transaction management.

---

## 📌 Table of Contents

* [💡 Description](#-description)
* [✨ Features](#-features)
* [🛠️ Tech Stack](#️-tech-stack)
* [📂 Project Structure](#-project-structure)
* [⚡ Installation](#-installation)
* [🔑 Environment Variables](#-environment-variables)
* [▶️ Usage](#️-usage)
* [📡 API Documentation](#-api-documentation)

---

## 💡 Description

**Paytm Clone** is a full-stack digital payment platform built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It demonstrates secure authentication, real-time wallet updates, peer-to-peer transfers, and transaction history management.

---

## ✨ Features

* **Authentication & Security**: JWT auth, bcrypt password hashing, protected routes.
* **Wallet Management**: Add money, real-time balance updates, transaction limits.
* **Money Transfers**: Peer-to-peer transfers with confirmation and notifications.
* **Transaction History**: Complete logs with search and filter options.
* **User Experience**: Responsive UI with Tailwind CSS and intuitive dashboard.

---

## 🛠️ Tech Stack

**Frontend**: React, TypeScript, Tailwind CSS, React Router, Axios, Vite
**Backend**: Node.js, Express.js, TypeScript, JWT, bcrypt, Zod
**Database**: MongoDB, Mongoose, ACID transactions
**Deployment**: Render

---

## 📂 Project Structure

```
paytm-clone/
├── backend/                # Express.js backend application
│   ├── controllers/       # Route controllers & business logic
│   ├── models/            # Mongoose schemas & models
│   ├── routes/            # API route definitions
│   ├── middleware/        # Custom middleware
│   ├── lib/               # Utility functions & config
│   ├── types/             # TypeScript types
│   ├── index.ts           # Entry point
│   ├── package.json
│   └── tsconfig.json
├── frontend/               # React frontend application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── hooks/         # Custom hooks
│   │   ├── context/       # React Context
│   │   ├── utils/         # Helper functions
│   │   ├── types/         # TypeScript interfaces
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── tailwind.config.js
├── .gitignore
└── LICENSE
```

---

## ⚡ Installation

### 📋 Prerequisites

* Node.js v18+
* npm v9+ or yarn
* MongoDB v6+ (local or Atlas)
* Git
* VS Code or any code editor

### 🚀 Setup

```bash
# Clone repo
git clone https://github.com/Amanrathi07/paytm-clone.git
cd paytm-clone

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

## 🔑 Environment Variables

**Backend (`backend/.env`)**

```env
NODE_ENV=development
PORT=5000
MONGO_DB_URL=mongodb://localhost:27017/paytm-clone
JWT_KEY=your-secret-key
CLIENT_URL=http://localhost:5173
```

**Frontend (`frontend/.env`)**

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=Paytm Clone
```

---

## ▶️ Usage

**Start Backend:**

```bash
cd backend
npm run dev
```

**Start Frontend:**

```bash
cd frontend
npm run dev
```

Access the app:

* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend API: [http://localhost:5000/api](http://localhost:5000/api)

---

## 📡 API Documentation

**Base URL:**

```
Local: http://localhost:5000/api
Production: https://paytm-clone-7bro.onrender.com/api
```

**Authentication Endpoints**

* `POST /auth/signup` - Create new user
* `POST /auth/signin` - Login
* `GET /auth/logout` - Logout

**Wallet Endpoints**

* `GET /wallet/balance` - Get wallet balance
* `POST /wallet/add` - Add money
* `POST /wallet/transfer` - Transfer money

**Transaction Endpoints**

* `GET /transactions` - Transaction history
* `GET /transactions/:id` - Transaction details

All endpoints require JWT token in `Authorization: Bearer <token>` header.

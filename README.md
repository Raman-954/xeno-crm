# XENO CRM - AI-Native Mini CRM

XENO CRM is a modern, futuristic customer relationship management system designed for marketing teams. It leverages **Google Gemini AI** for intelligent audience segmentation and campaign generation, featuring a real-time message delivery simulator with webhook integrations.

Built for the **Xeno Engineering SDE Internship Take-Home Assignment**.

## 🚀 Live Demo
- **Frontend:** xeno-crm-amber.vercel.app
- **Backend:** https://xeno-crm-ohqp.onrender.com

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite), Tailwind CSS, Recharts, Lucide React, Axios, Framer Motion.
- **Backend:** Node.js, Express.js, JWT Authentication, Bcrypt.
- **Database:** MongoDB Atlas (Mongoose).
- **AI Engine:** Google Gemini API.

---

## ✨ Key Features

### 1. AI Campaign Assistant
- Chat-based interface where marketers can type prompts (e.g., "Suggest a campaign for customers who haven't bought in 3 months").
- AI suggests target audience, communication channel, and generates personalized content.

### 2. Audience Segmentation
- Rule-based logic (High Spenders, Inactive, etc.).
- AI-driven segmentation for precision targeting.

### 3. Campaign & Webhook Simulator
- **Simulator Service:** Simulates real-world delivery (Sent -> Delivered -> Opened -> Clicked -> Converted).
- **Webhooks:** Automated callbacks to `/api/callback` update campaign stats in real-time without refreshing the page.

### 4. Interactive Dashboard
- Visualizes revenue and customer growth using **Recharts**.
- Real-time tracking of campaign conversion rates.

---

## 📂 Project Structure
```text
xeno-crm/
├── client/              # React (Vite) Frontend
│   ├── src/
│   │   ├── pages/       # Dashboard, Customer Management, AI Chat
│   │   ├── components/  # Sidebar, Layout, UI Cards
│   │   └── App.jsx      # Navigation & Routes
├── server/              # Node.js Backend
│   ├── models/          # MongoDB Schemas (User, Customer, Product, Order, Campaign)
│   ├── routes/          # API Endpoints
│   ├── services/        # AI Service & Message Simulator
│   ├── scripts/         # Database Seeding Script
│   └── index.js         # Entry Point
└── README.md

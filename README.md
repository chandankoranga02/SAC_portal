# SAC - Full-Stack Scalable Architecture

This repository contains a modular, feature-based architecture with separated **frontend** and **backend** layers.

---

## 📁 Project Structure

```text
SAC/
├── frontend/                    # React + Vite + Tailwind CSS + EmailJS
│   ├── .env.example              # Environment variables template
│   ├── tailwind.config.js        # Tailwind CSS v3 configuration
│   ├── postcss.config.js         # PostCSS Configuration
│   └── src/
│       ├── assets/               # Static icons, images, media
│       ├── components/           # Shared reusable components
│       │   ├── common/           # Button, Input, Card, Badge, NotificationToast
│       │   └── layout/           # Navbar, Footer, MainLayout
│       ├── config/               # Configurations
│       │   ├── api.config.js     # API endpoints and base URL
│       │   ├── emailjs.config.js # EmailJS service, template, and public key
│       │   └── routes.config.js  # Centralized routing definitions
│       ├── context/              # Context providers (AppContext)
│       ├── hooks/                # Custom React hooks (useEmailJS, useLocalStorage)
│       ├── modules/              # Feature-based modular pages & logic
│       │   ├── home/             # Home module (Hero, Features, CTA)
│       │   ├── contactus/        # Contact Us module (EmailJS Integration)
│       │   ├── registration/     # Registration module (Form validation, roles)
│       │   ├── aboutus/          # About Us module (Story, Team, Mission)
│       │   ├── blogs/             # Blogs module (Search, categories, articles)
│       │   ├── gallery/           # Gallery module (Category filters, modal preview)
│       │   └── admin/             # Admin module (KPI stats, tech stack telemetry)
│       ├── routes/               # AppRoutes configuration
│       ├── services/             # Services (api.service, email.service)
│       ├── utils/                # Helper functions, constants, validators
│       ├── App.jsx               # Application entry wrapper
│       ├── index.css             # Tailwind base & utility directives
│       └── main.jsx              # React root DOM rendering
│
└── backend/                      # Node.js + Express + MongoDB Mongoose
    ├── .env.example              # Backend environment template
    ├── package.json              # Express, Mongoose, Dotenv, Cors, Nodemon
    └── src/
        ├── config/               # DB connection & Environment configuration
        │   ├── db.js             # Mongoose connection with error handling
        │   └── env.js            # Centralized environment variables
        ├── middlewares/           # Express middlewares (notFound, errorHandler)
        ├── modules/              # Feature-based backend domain modules
        ├── routes/               # Central routing layer with healthcheck
        ├── controllers/          # Business logic controllers
        ├── models/               # Mongoose schemas & data models
        ├── services/              # Domain business services
        ├── utils/                # Shared utilities & loggers
        ├── app.js                # Express app middleware and route mounting
        └── server.js              # Application bootstrapper and port listener

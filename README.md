# Lumiere — Fashion E-Commerce Platform

A modern full-stack fashion e-commerce application built with the MERN ecosystem. Lumiere provides an online shopping experience with product browsing, user authentication, cart management, order processing, and online payment integration.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Structure](#api-structure)
- [Database](#database)
- [Payment Integration](#payment-integration)
- [Deployment](#deployment)
- [Security Notes](#security-notes)
- [Future Improvements](#future-improvements)

---

## Overview

**Lumiere** is a full-stack fashion e-commerce platform designed to deliver a smooth and responsive online shopping experience.

The application uses a React-based frontend and a Node.js/Express backend. MongoDB Atlas provides database storage, while Cloudinary handles product image storage.

The backend also integrates payment services to support online transactions.

---

## Features

### Customer Features

- Browse available fashion products.
- View individual product details.
- Explore products by category and subcategory.
- Select product sizes.
- Add products to the shopping cart.
- Update cart quantities.
- Register and log in to an account.
- Place orders.
- View order information and payment status.
- Choose available payment methods.

### Backend Features

- RESTful API architecture.
- User authentication using JSON Web Tokens (JWT).
- Password hashing with bcrypt.
- Product and cart management.
- Order creation and management.
- MongoDB database integration.
- Cloudinary image management.
- Payment integration with Stripe and Razorpay.
- CORS and JSON middleware.

---

## Technology Stack

### Frontend

| Technology   | Purpose                           |
| ------------ | --------------------------------- |
| React.js     | User interface                    |
| Vite         | Development server and build tool |
| React Router | Client-side navigation            |
| Tailwind CSS | UI styling (where configured)     |
| Axios        | HTTP requests                     |

### Backend

| Technology | Purpose                 |
| ---------- | ----------------------- |
| Node.js    | JavaScript runtime      |
| Express.js | Backend framework       |
| MongoDB    | Database                |
| Mongoose   | MongoDB object modeling |
| JWT        | Authentication          |
| bcrypt     | Password hashing        |
| Cloudinary | Image storage           |
| Multer     | File uploads            |
| Stripe     | Online payments         |
| Razorpay   | Payment integration     |
| Validator  | Input validation        |

### Infrastructure and Deployment

- Git and GitHub — Version control.
- Docker — Containerization where configured.
- Vercel — Backend deployment.
- MongoDB Atlas — Cloud database.
- Cloudinary — Cloud image storage.

---

## Project Structure

The repository contains separate frontend and backend applications.

```text
Lumiere/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   └── ...
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── api/
│   │   └── index.js
│   │
│   ├── config/
│   │   ├── mongodb.js
│   │   └── cloudinary.js
│   │
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   │
│   ├── server.js
│   ├── vercel.json
│   ├── package.json
│   └── ...
│
└── README.md
```

_Note: Adjust folder names to match your actual repository structure._

---

## Getting Started

Follow these instructions to run Lumiere locally.

### Prerequisites

Install the following:

- Node.js (Node.js 22.x is recommended for the backend).
- npm.
- Git.
- MongoDB Atlas account.
- Cloudinary account.
- Stripe and/or Razorpay account if testing online payments.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate into the project:

```bash
cd Lumiere
```

### 2. Configure the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory.

Add the environment variables required by your backend configuration (see [Environment Variables](#environment-variables)).

### 3. Configure the Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create the frontend environment file required by your Vite configuration.

Configure the backend API URL to point to your local backend.

---

## Environment Variables

Environment variables contain application configuration and sensitive credentials.

### Backend

Create `backend/.env`:

```env
PORT=4000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_api_secret

STRIPE_SECRET_KEY=your_stripe_secret_key

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

**Important:** These are illustrative variable names. Make sure they match the names used in your actual configuration and payment controller files.

### Frontend

Create the frontend environment file, typically `frontend/.env`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

Use the exact environment-variable name referenced by your frontend code.

Never expose secret API keys in frontend environment variables. Only public configuration values should use the `VITE_` prefix.

---

## Running the Application

### Start the Backend

From the backend directory:

```bash
npm run server
```

The backend will start on:

```text
http://localhost:4000
```

You can verify the API by opening:

```text
http://localhost:4000/
```

Expected response:

```text
API Working Lumere
```

### Start the Frontend

From the frontend directory:

```bash
npm run dev
```

Vite will display the local development URL in your terminal, usually:

```text
http://localhost:5173
```

Open that URL in your browser.

---

## API Structure

The backend follows a RESTful API structure.

Base URL (local):

```text
http://localhost:4000
```

| Route          | Purpose                                    |
| -------------- | ------------------------------------------ |
| `/api/user`    | User authentication and account operations |
| `/api/product` | Product-related operations                 |
| `/api/cart`    | Shopping cart operations                   |
| `/api/order`   | Order creation and payment operations      |

The exact HTTP methods and request payloads are defined in the respective route and controller files.

---

## Database

Lumiere uses **MongoDB Atlas** as its cloud database.

Mongoose is used to define schemas, interact with collections, and manage database operations.

The database connection is initialized through:

```text
backend/config/mongodb.js
```

Make sure your MongoDB Atlas connection string is configured correctly and that your server's IP access settings allow the connection.

---

## Payment Integration

Lumiere includes integrations for:

### Stripe

Used to support online payment processing through Stripe Checkout.

### Razorpay

Included for Razorpay payment processing.

For both services:

- Configure the required credentials in backend environment variables.
- Use test credentials during development.
- Perform payment verification on the backend.
- Never expose secret payment keys in frontend code.

---

## Deployment

### Backend — Vercel

The backend is configured for deployment on Vercel.

Deployment configuration:

```text
backend/vercel.json
```

The serverless entry point is:

```text
backend/api/index.js
```

Deploy from the backend directory:

```bash
vercel
```

For production:

```bash
vercel --prod
```

Configure all required backend environment variables in:

**Vercel Dashboard → Project → Settings → Environment Variables**

Make sure the selected Node.js runtime is compatible with the backend dependencies.

### Frontend

The frontend can be deployed separately using a hosting provider such as Vercel.

Configure the production backend API URL in the frontend environment variables before building and deploying.

---

## Security Notes

- Never commit `.env` files to GitHub.
- Keep database credentials private.
- Never expose JWT secrets.
- Never expose Stripe or Razorpay secret keys in frontend code.
- Validate incoming API requests.
- Protect private routes using authentication middleware.
- Verify payment transactions on the backend.
- Configure CORS to allow only trusted frontend origins in production.

---

## Future Improvements

Potential improvements for the project include:

- Admin dashboard and advanced product management.
- Product search, filtering, and sorting.
- Wishlist functionality.
- Customer order tracking.
- Product reviews and ratings.
- Improved checkout experience.
- Automated testing.
- CI/CD pipeline using GitHub Actions.
- Docker-based development and production workflows.
- Monitoring, logging, and error tracking.

---

## Author

**Lumiere — Fashion E-Commerce Platform**

Developed as a full-stack web application using the MERN ecosystem.

---

## License

This project is currently provided for learning and development purposes. Add an appropriate license before distributing or using it commercially.

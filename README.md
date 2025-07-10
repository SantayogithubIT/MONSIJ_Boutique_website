# MONSIJ Boutique Website 🌟 <img width="100" height="100" alt="Mon_logo" src="https://github.com/user-attachments/assets/752a0a01-92e0-4132-b661-b8643cea8e52" />

A modern, responsive e-commerce website for **MONSIJ Boutique**, built with a full-stack approach.

---

## 🧭 Table of Contents

- [About the Project](#about-the-project)  

- [Tech Stack](#tech-stack)  
- [Features](#features)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running the App](#running-the-app)  
- [Environment Variables](#environment-variables)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)

---

## 📖 About the Project

MONSIJ Boutique is an e-commerce platform showcasing boutique products with user-friendly navigation. It features product listings, shopping cart functionality, user authentication, and checkout integration.

---

## 🛠️ Tech Stack

- **Frontend**: React (or another framework you used)  
- **Backend**: Node.js + Express (or your actual backend framework)  
- **Database**: MongoDB / MySQL / PostgreSQL  
- **Styling**: CSS / Sass / Bootstrap / Tailwind CSS  

*(Adjust to reflect your stack.)*

---

## ⚙️ Features

- ✅ User registration & authentication  
- 🛒 Product browsing & detailed views  
- ➕ Add/remove items to cart  
- 💳 Order processing (e.g., Stripe, PayPal)  
- 🔍 Search & filter products  
- 📱 Responsive design for mobile devices

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) v14+  
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)  
- [MongoDB](https://www.mongodb.com/) / SQL database (as used)  

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/SantayogithubIT/MONSIJ_Boutique_website.git
    cd MONSIJ_Boutique_website
    ```

2. **Create `.env` file** in project root and/or backend folder

    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    STRIPE_KEY=your_stripe_public_key
    STRIPE_SECRET=your_stripe_secret
    ```

3. **Install dependencies**

    ```bash
    cd backend
    npm install

    cd ../frontend
    npm install
    ```

---

## ▶️ Running the App

### ✨ Development Mode

Start backend and frontend together using `concurrently` or separate terminals:

#### Option 1: Separately

```bash
# Terminal 1
cd backend
npm run dev

# Terminal 2
cd frontend
npm start





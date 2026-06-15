# 🚀 Incognote – Anonymous Feedback Platform

Incognote is a full-stack anonymous feedback platform where users can create accounts, receive public profile links, collect anonymous messages, and manage them through a secure dashboard.

---

## 📑 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Email Verification Flow](#email-verification-flow)
- [API Reference](#api-reference)
- [License](#license)

---

## 🛠️ Tech Stack

- Next.js 15
- TypeScript
- MongoDB
- Mongoose
- NextAuth
- Resend
- Tailwind CSS
- shadcn/ui
- Zod
- Axios
- Vercel

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React
- **Backend:** Next.js API Routes
- **Auth:** NextAuth.js
- **Database:** MongoDB
- **Email Service:** Resend
- **Styling:** Tailwind CSS
- **Validation:** Zod
- **UI Components:** shadcn/ui

---
## 🌐 Live Demo

https://incognote-theta.vercel.app/

## 📁 Project Structure

```
project-root/
│
├── app/
│   └── sign-in/             # Sign-in page
│   └── verify/              # Email verification page
│
├── components/              # Reusable UI components
│
├── lib/                     # Utility functions (auth, db, etc.)
│
├── pages/
│   └── api/
│       └── verify-code/     # API to verify code from email
│
├── public/                  # Static assets
│
├── schemas/                 # Zod validation schemas
│
├── styles/                  # Tailwind global styles
│
├── types/                   # TypeScript types
│
├── .env.example             # Sample environment file
├── next.config.js           # Next.js config
├── tailwind.config.js       # Tailwind config
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root and configure the following:

```env
# MongoDB connection
MONGODB_URI==mongodb+srv://<username>:<password>@cluster.mongodb.net/db

# Auth
NEXTAUTH_SECRET=some-random-secret
NEXTAUTH_URL=http://localhost:3000

# Resend Email API
RESEND_API_KEY=your_resend_key
EMAIL_FROM=your_verified@resend.dev
```

> ⚠️ **Never commit `.env.local` to GitHub. Add it to `.gitignore`.**

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/your-username/true-feedback.git
cd true-feedback
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Setup environment**

Copy `.env.example` to `.env.local` and update values.

```bash
cp .env.example .env.local
```

4. **Run the development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📧 Email Verification Flow

1. User signs up with an email and username.
2. System sends a 6-digit code via Resend.
3. User enters the code on the `/verify` page.
4. If valid, account is verified and user can sign in.

---

## 📡 API Reference

### `POST /api/verify-code`

**Body:**

```json
{
  "username": "john_doe",
  "code": "123456"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Account verified successfully"
}
```

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

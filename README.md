# 🚀 Incognote – Anonymous Feedback Platform

Incognote is a full-stack anonymous feedback platform built with Next.js, TypeScript, MongoDB, and NextAuth.

Users can create accounts, verify their email addresses, generate a public profile link, receive anonymous messages, and manage them through a secure dashboard.

---

## 🌐 Live Demo

https://incognote-theta.vercel.app/

---

## ✨ Features

* Secure user authentication with NextAuth
* Email verification using Resend
* Unique public profile links
* Receive anonymous messages from anyone
* Personal dashboard for message management
* Delete unwanted messages
* Username availability checking
* Responsive design for desktop and mobile
* Form validation using Zod
* MongoDB Atlas integration

---

## 🛠️ Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* shadcn/ui

### Backend

* Next.js Route Handlers
* MongoDB Atlas
* Mongoose

### Authentication

* NextAuth.js

### Validation

* Zod
* React Hook Form

### Email Service

* Resend

### Deployment

* Vercel

---

## 📂 Project Structure

```text
src/
│
├── app/
│   ├── (app)/
│   ├── (auth)/
│   ├── api/
│   └── u/
│
├── components/
├── context/
├── helpers/
├── lib/
├── models/
├── schemas/
├── types/
└── messages.json
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root.

```env
MONGODB_URI=your_mongodb_connection_string

NEXTAUTH_SECRET=your_secret_key

NEXTAUTH_URL=http://localhost:3000

RESEND_API_KEY=your_resend_api_key
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/ananyahadimani-stack/incognote.git
cd incognote
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create:

```text
.env.local
```

and add the required values.

### Run development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📧 Email Verification Flow

1. User signs up with username, email, and password.
2. A verification code is sent through Resend.
3. User enters the verification code.
4. Account becomes verified.
5. User can log in and access the dashboard.

---

## 🔗 Core Application Flow

1. User creates an account.
2. User receives a public profile link.
3. Others can anonymously send messages through the public page.
4. Messages are stored in MongoDB.
5. User manages messages from the dashboard.

---

## 📸 Screenshots

Add screenshots here later:

* Landing Page
* Sign Up Page
* Sign In Page
* Dashboard
* Public User Page

---

## 🔮 Future Improvements

* Dark mode
* Message reactions
* Message search and filtering
* User profile customization
* Analytics dashboard

---

## 👩‍💻 Author

Ananya Hadimani

GitHub:
https://github.com/ananyahadimani-stack

---

## 📄 License

This project is licensed under the MIT License.


# QueueLess — Frontend 🏥

**Smarter Queues. Happier Patients.**

QueueLess is a modern healthcare queue management SaaS frontend built to help clinics and healthcare centers manage patients, doctors, receptionists, appointments, and digital queues through a centralized interface.

This repository contains the **frontend application** of QueueLess, built with Next.js, React, JavaScript, and Tailwind CSS.

## ✨ Features

* 🏥 Modern healthcare SaaS landing page
* 🔐 Login & registration interfaces
* 👥 Role-based user flow
* 🏢 Clinic onboarding flow
* 📊 Dashboard interface
* 👨‍⚕️ Doctor management interface
* 👩‍💼 Receptionist workflow
* 🧑‍🤝‍🧑 Patient management interface
* 🎫 Queue & token management UI
* 📅 Appointment management UI
* 🌙 Light & dark mode
* 📱 Responsive design
* ⚡ Fast Next.js application

## 👥 User Roles

QueueLess supports interfaces for different types of users:

* **Owner** — Manage clinic and staff
* **Receptionist** — Manage patients, appointments, and queues
* **Doctor** — View patients and manage consultations
* **Patient** — Join queues and track queue status

## 🛠️ Tech Stack

* **Next.js**
* **React**
* **JavaScript**
* **Tailwind CSS**
* **Lucide Icons**
* **Context API**
* **Vercel**

## 📂 Project Structure

```text
QueueLess-Frontend/
├── public/
│   └── images/
├── src/
│   ├── app/
│   ├── components/
│   ├── context/
│   └── hooks/
├── .gitignore
├── package.json
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/raunak-collab/QueueLess-Frontend.git
```

### 2. Navigate to the project

```bash
cd QueueLess-Frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## 🔐 Environment Variables

Create a `.env.local` file in the project root:

```env
# Add frontend environment variables here
```

Do not commit `.env.local` or any sensitive credentials to the repository.

## 🎨 Design

QueueLess follows a clean healthcare-focused SaaS design with:

* Minimal and modern interface
* Clear navigation
* Consistent spacing and typography
* Light and dark themes
* Accessible UI patterns
* Dashboard-focused user experience

## 🔗 Backend

The QueueLess frontend is designed to communicate with a separate backend API responsible for authentication, database operations, queue management, appointments, and other server-side functionality.

**Backend Repository:**
https://github.com/raunak-collab/QueueLess-Backend

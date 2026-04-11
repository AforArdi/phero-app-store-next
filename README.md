# Phero App Store

A modern, feature-rich app store application built with **Next.js**. Browse, view details, and manage your favorite applications with an intuitive and responsive user interface.

## 🚀 Features

- **Home Page**: Display trending apps with banner, statistics, and featured applications
- **App Browsing**: Browse a comprehensive catalog of applications
- **App Details**: View detailed information about each app including:
  - App description and company information
  - User ratings and reviews
  - Download statistics
  - App size and installation options
  - Visual rating charts
- **Install/Uninstall**: Install apps to your collection and uninstall them easily
- **Installed Apps Dashboard**: Manage all your installed applications in one place
- **Responsive Design**: Fully responsive UI that works seamlessly across devices
- **Toast Notifications**: Real-time feedback for user actions using react-toastify
- **Charts & Analytics**: Visual representation of app ratings and statistics

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.4
- **Build Tool**: Next.js 16.2.3 (Server-side rendering & static generation)
- **Styling**: 
  - Tailwind CSS 4
  - DaisyUI 5.5.19 (Tailwind CSS component library)
- **Routing**: Next.js App Router
- **Charts**: Recharts 3.8.1
- **Icons**: React Icons 5.6.0
- **Notifications**: React Toastify 11.0.5
- **Loading Spinners**: React Spinners 0.17.0
- **Linting**: ESLint 9.39.4

## 🔄 State Management

- **Context API**: Global app installation state managed through `AppInstallContext`
- **Local State**: Component-level state with React hooks

## 📱 Pages & Routes

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with trending apps and statistics |
| Apps | `/apps` | Complete app catalog with browsing capabilities |
| App Details | `/apps/:id` | Detailed view of individual apps with ratings and charts |
| Installed Apps | `/installation` | Manage installed applications |


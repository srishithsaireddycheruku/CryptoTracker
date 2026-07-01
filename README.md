# 🚀 Crypto Tracker App

A modern **React-based Cryptocurrency Tracker** that allows users to browse cryptocurrencies, view detailed market information, and analyze historical price trends with interactive charts.

Built using **React, React Router, React Query, Zustand, Tailwind CSS, Chart.js, and CoinGecko API**.

---

## 📸 Features

- 🪙 Browse cryptocurrencies
- 🔍 View detailed information for each coin
- 📈 Interactive historical price charts
- 💱 Multi-currency support
- ⚡ Fast data fetching with caching using React Query
- 💤 Lazy loading for better performance
- 🛡️ Error Boundary for graceful error handling
- ⏳ Skeleton loaders during data fetching
- 📱 Fully responsive UI
- 🎨 Modern Tailwind CSS design

---

# Tech Stack

| Technology | Purpose |
|------------|---------|
| React | Frontend Framework |
| React Router DOM | Client-side Routing |
| React Query (@tanstack/react-query) | API Fetching & Caching |
| Zustand | Global State Management |
| Tailwind CSS | Styling |
| Chart.js + react-chartjs-2 | Interactive Charts |
| React Error Boundary | Error Handling |
| React Content Loader | Skeleton Loading UI |
| html-react-parser | Parse Coin Descriptions |
| CoinGecko API | Cryptocurrency Data |

---

# Folder Structure

```
src/
│
├── Components/
│   ├── Alert/
│   ├── CoinInfo/
│   ├── ErrorBoundary/
│   ├── Hooks/
│   └── ...
│
├── Pages/
│   ├── Home.jsx
│   ├── CoinDetails.jsx
│   └── Layout.jsx
│
├── Services/
│   ├── fetchCoinDetails.js
│   ├── fetchCoinHistory.js
│   └── ...
│
├── Helpers/
│
├── zustandState/
│
├── Routing/
│
└── App.jsx
```

---

# Screens

## Home Page

- List of cryptocurrencies
- Search functionality
- Currency selector
- Navigate to detailed coin page

---

## Coin Details Page

Displays:

- Coin Image
- Coin Name
- Description
- Market Rank
- Current Price
- Historical Price Graph

---

## Historical Price Chart

Users can view prices for:

- 24 Hours
- 7 Days
- 30 Days
- 90 Days
- 1 Year

The chart automatically changes between:

- **Hourly data** (for 1 Day)
- **Daily data** (for multiple days)

---

# Performance Optimizations

## Lazy Loading

Pages are loaded only when required.

```jsx
const Home = lazy(() => import("./pages/Home"));
const CoinDetails = lazy(() => import("./pages/CoinDetails"));
```

Wrapped with:

```jsx
<Suspense fallback={<Facebook />}>
```

to provide loading placeholders.

---

## React Query Caching

Historical data and coin details are cached to minimize unnecessary API requests.

Example:

```jsx
useQuery({
    queryKey: ["coinHistory", coinId, currency, days, interval],
    queryFn: fetchCoinHistory,
    staleTime: 1000 * 60 * 2,
    cacheTime: 1000 * 60 * 2,
});
```

Benefits:

- Faster navigation
- Reduced API calls
- Better user experience

---

## Error Boundary

Application crashes are gracefully handled using **react-error-boundary**.

Instead of crashing the application, users see a friendly error message with a retry option.

---

## Skeleton Loading

Loading states use **React Content Loader** to improve perceived performance.

Example:

- Coin Details Loading
- Route Loading
- Chart Loading

---

# Installation

Clone the repository

```bash
git clone https://github.com/your-username/crypto-tracker.git
```

Navigate into the project

```bash
cd crypto-tracker
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

---

# Required Packages

```bash
npm install react-router-dom
npm install @tanstack/react-query
npm install zustand
npm install axios
npm install react-chartjs-2 chart.js
npm install react-content-loader
npm install react-error-boundary
npm install html-react-parser
npm install tailwindcss
```

---

# API

This project uses the **CoinGecko API** for fetching cryptocurrency data.

Endpoints used include:

- Coin List
- Coin Details
- Historical Market Chart

---

# State Management

Global state is managed using **Zustand**.

Current implementation stores:

- Selected Currency

This allows all components to reactively update when the currency changes.

---

# Routing

Application routes:

| Route | Description |
|--------|-------------|
| `/` | Home Page |
| `/details/:coinId` | Coin Details |

Example:

```
/details/bitcoin
```

---

# Error Handling

The application handles:

- API failures
- Invalid routes
- Rendering errors
- Empty historical data
- Loading states

---

# Future Improvements

- ⭐ Watchlist
- 🌙 Dark/Light Theme
- 🔔 Price Alerts
- 📊 Candlestick Charts
- 📈 Portfolio Tracker
- 🔥 Trending Coins Section
- 📰 Crypto News Integration
- ❤️ Favorite Coins
- 🔍 Advanced Search & Filters
- 📱 Progressive Web App (PWA)

---

# Learning Highlights

This project demonstrates practical usage of:

- React Functional Components
- React Hooks
- Custom Hooks
- React Router
- React Query
- Zustand
- Lazy Loading
- Suspense
- Error Boundaries
- Chart.js
- API Integration
- Responsive Design
- Component-based Architecture

---

# Author

**Srishith Sai Reddy Cheruku**

GitHub: [https://github.com/your-username](https://github.com/srishithsaireddycheruku)

LinkedIn: https://www.linkedin.com/in/srishith-sai-reddy-cheruku-7618b8314/

---

# License

This project is licensed under the MIT License.

---

## ⭐ If you like this project, don't forget to give it a star!

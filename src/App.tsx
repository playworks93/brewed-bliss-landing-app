import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Auth from './components/Auth'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import ShoppingCart from './components/ShoppingCart'
import Footer from './components/Footer'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Brewed Bliss</h1>
          <p className="tagline">Your Gateway to Quality Coffee Beans</p>
        </div>
        {isAuthenticated && (
          <button onClick={handleLogout} className="btn-logout">
            Logout
          </button>
        )}
      </header>

      <main className="app-main">
        {isAuthenticated ? (
          <Dashboard />
        ) : (
          <Auth onLogin={handleLogin} />
        )}
      </main>

      <footer className="app-footer">
        <div className="features">
          <h3>Key Features:</h3>
          <ul>
          <li>Personalized Recommendations</li>
          <li>Subscription Service for Regular Deliveries</li>
          <li>User Reviews and Ratings</li>
          <li>Advanced Search and Filtering</li>
          <li>Shopping Cart and Checkout</li>
          <li>Order Tracking</li>
          </ul>
        </div>
        <p>&copy; 2025 Brewed Bliss. Built with React + TypeScript + Vite</p>
      </footer>
    </div>
  )
}

export default App
import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    
    <nav className='navbar'>
      <h1 className='logo'>mystore</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/categories">Categories</Link>
        <form action="">
          <input className="search-input" type="search" placeholder="Search products..." />
        </form>
        <Link to="/cart">
  <i className="bi bi-cart me-1"></i>Cart
</Link>
        <Link to="/login">
        <i class="bi bi-person-circle"></i> Login</Link>
      </div>
    </nav>
  )
}

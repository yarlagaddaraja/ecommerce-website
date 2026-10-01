import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div>
    <form className="login-form">
        <h2>Login</h2>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
        </div>
        <button type="submit" className="button">Login</button>
    </form>
    <p>
      <Link to="/register">Don't have an account? Register</Link>
    </p>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
export default function Register() {
  return (
    <div>
      <form className="register-form">
        <h2>Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit" className="button">Register</button>
      </form>
      <p>
        <Link to="/login">Already have an account? Login</Link>
      </p>
    </div>
  )
}

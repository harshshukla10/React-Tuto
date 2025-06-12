import React from 'react'
import './navbar.css'
const navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-logo">EventPlanner</div>
    <ul className="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/events">Events</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
  )
}

export default navbar

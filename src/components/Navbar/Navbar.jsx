import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'




const Navbar = () => {
  return (
    <>
     <div className="navigation-bar">
        <div className="logo-text">
          Scatch
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">
              Home
              </Link>
            </li>
            <li>
              Products
            </li>
            
            <li>
            <Link to="/product">
              Cart
              </Link>
            </li>
          
            <li>
              My Account
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
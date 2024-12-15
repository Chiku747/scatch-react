import React from 'react'
import Product from '../../components/Product/Product'
import './AdminPanel.css'

const AdminPanel = () => {
  return (
    <>
     <div className="navigation-bar">
        <div className="logo-text">
          Scatch
        </div>
        <div className="nav-links">
          <ul>
            <li>
              Home
            </li>
            <li>
              Products
            </li>
          </ul>
        </div>
      </div>


      <div id="home-main-container">
        <div id="home-side-container">
        <p id="delete-products">Delete All Products</p>
        <p id="create-new">Create New Product</p>
        </div>
        <div className="home-center-container">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
        </div>
      </div>
    </>
  )
}

export default AdminPanel
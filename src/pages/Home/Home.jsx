import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import Product from '../../components/Product/Product'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Navbar />

      <div id="home-main-container">
        <div id="home-side-container">
          <label className="picker" htmlFor="picker">Sort By</label>
          <select name="" id="picker">
            <option value="Price">Price</option>
            <option value="Category">Category</option>
          </select>
          <p id="new-collection">New Collection</p>
          <p id="all-products">All Products</p>
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

export default Home
import React from 'react'
import './Product.css'
import Image from '../../assets/pexels-tomaz-barcellos-999425-1987301.jpg'

const Product = () => {
  return (
   <>
   <div id="product-main-container">
    <img id="product-image" src={Image} alt="" />
    <div id="product-lower">
      <div id="product-lower-text">
      <p id="product-name">Product Name</p>
      <p id="product-price">2999</p>
      </div>
    <div id="product-btn">
      <button id="product-edit-btn">Edit</button>
      <button id="product-delete-btn"> Delete</button>
    </div>
    </div>
   </div>
   
   </>
  )
}

export default Product
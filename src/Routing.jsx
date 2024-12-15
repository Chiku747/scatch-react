import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import App from './App'
import AdminPanel from './pages/Admin-Panel/AdminPanel'
import ProductPage from './pages/Product-Page/ProductPage'
const router = createBrowserRouter(

  createRoutesFromElements(

    <Route path="/" element={<App />} >
      <Route path="" element={<Home />}/>
      <Route path="signup" element={<Signup />} />
      <Route path="admin" element={<AdminPanel />} />
      <Route path="product" element={<ProductPage />} />
    </Route> 
  )
)

const Routing = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routing
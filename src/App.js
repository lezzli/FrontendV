import React from 'react'
import Navbar from './components/Navbar.js'
import Form from './components/Form.js'
import ProductList from './components/ProductsList.js';

import { Routes, Route } from 'react-router-dom';

export default function () {
  return (
    <>
    <div>
      <Navbar></Navbar>
    </div>
    <Routes>
       <Route path="/home" element={<ProductList/>} />
    </Routes>
 </>
  )
}

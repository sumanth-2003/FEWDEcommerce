import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductsList from './components/ProductsList';
import Login from './components/Login';
import Mycart from './components/Mycart';
import { useState } from 'react';
import axios from 'axios';
// import { CartProvider } from './components/CartContext';
function App() {




  return (
    // <CartProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/productlist' element={<ProductsList />} />
          <Route path='/' element={<Login />} />
          <Route path='/mycart' element={<Mycart />} />
        </Routes>
      </Router>
    </div>
    // </CartProvider>
  );
}

export default App;

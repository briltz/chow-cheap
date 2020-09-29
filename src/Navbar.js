import React from 'react';
import './Navbar.css';
import logo from './logo.png'

function Navbar() {
  return (
    <div className="navbar">
        <div className="nav-title"><img src={logo} height="50px" alt="logo" /></div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Recipes</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Make a Post</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>
  );
}

export default Navbar;
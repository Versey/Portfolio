import React,{useEffect} from 'react';
import './Navbar.css';

function Navbar() {
    return (
      <nav id="navbar">
          <a href="#About">About me</a>
          <a href="#Web">Web</a>
          <a href="#Art">Art</a>
      </nav>
    );
  }

export default Navbar;
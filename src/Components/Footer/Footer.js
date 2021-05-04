import React,{useEffect} from 'react';
import './Footer.css';

function Footer() {
    return (
      <div className="footer">

        <ul className= "links">
          <li>
          <a href="https://github.com/Versey"><i className="fab fa-github"/></a>
          </li>
          
          <li>
          <a href="https://www.facebook.com/mike.leroux.18/"><i className="fab fa-facebook"></i></a>
          </li>

          <li>
          <a href="https://www.linkedin.com/in/michael-leroux-538170121/"><i className="fab fa-linkedin"></i></a>
          </li>
        </ul>

      </div>
    );
  }

export default Footer;
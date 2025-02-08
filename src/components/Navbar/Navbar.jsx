import React from 'react';
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src="/images/brand_logo.png" alt="" />
        </div>
         <div className='menu'>
          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul></div>
          
        

            <button>Login</button>

      </nav>
    </div>
  );
}

export default Navbar;

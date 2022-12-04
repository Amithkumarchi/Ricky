import React, { useState } from 'react';
 import './Navbar.css';
import { IconContext } from 'react-icons';
import pic from "./CAA.png";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
 
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>

            <h1 className='header'>
               <img src = {pic} className = 'caa'/>
              Tennis Player Bank
               
              </h1>
        </div> 
      </IconContext.Provider>
    </>
  );
}

export default Header;

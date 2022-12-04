import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import pic from "./CAA.png";
import IdleModal from '../pages/IdleModal';
import { useIdleTimer } from 'react-idle-timer';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [idle, setIdle] = useState(false);
  const handleIdle = () => {
    setIdle(true);
  };
  useIdleTimer({
    timeout: 1000 * 2,
    onIdle: handleIdle,
  });
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        <IdleModal idle={idle} setIdle={setIdle}></IdleModal>

            <h1 className='header'>
              <FaIcons.FaBars className='menu-bars' onClick={showSidebar} />{' '}
              <img src = {pic} className = 'caa'/>
              Tennis Player Bank
               
              </h1>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

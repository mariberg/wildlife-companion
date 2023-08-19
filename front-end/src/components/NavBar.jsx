// import React from 'react';
// import {HomeOutlined, GlobalOutlined, BellOutlined, UserOutlined, PoweroffOutlined} from '@ant-design/icons'
// import {Menu, } from 'antd'
// import { useNavigate, useLocation } from 'react-router-dom';
// import { useState } from 'react';
// import './NavBar.css';

// // import { Container, Row, Col, Button } from 'react-bootstrap';


// const NavBar = () => {
//   const[isOpen ,setIsOpen] = useState(false);
//   const toggle = () => setIsOpen (!isOpen);
//     const navigate = useNavigate();
//     const location = useLocation();
    
//     return (
//       <>
//         <div className="navbar-container" style={{display:'flex', flexDirection:'column', fontWeight:'30px', fontSize:'20px'}}>
//         <div className="navbar-header">
//         <span  style={{ whiteSpace: 'nowrap' }}><b>Wildlife Companion</b></span>
//       </div>
//       <Menu 
//       selectedKeys={[location.pathname]}
//       onClick={({key }) => {
//             if(key === 'signout'){}
//             else{
//                 navigate(key);
//             }
//       }}>

//       <Menu.Item key="/" icon={<HomeOutlined />} className={location.pathname === '/' ? 'active-menu-item' : ''}>
//           Home
//         </Menu.Item>
//         <Menu.Item key="/map" icon={<GlobalOutlined />} className={location.pathname === '/map' ? 'active-menu-item' : ''}>
//           Explore
//         </Menu.Item>
//         <Menu.Item key="/chatbot" icon={<BellOutlined />} className={location.pathname === '/chatbot' ? 'active-menu-item' : ''}>
//           Notifications
//         </Menu.Item>
//         <Menu.Item key="/profile" icon={<UserOutlined />} className={location.pathname === '/profile' ? 'active-menu-item' : ''}>
//           Profile
//         </Menu.Item>
//         <Menu.Item key="signout" icon={<PoweroffOutlined />} danger>
//           Logout
//         </Menu.Item>
//         </Menu>  
//     </div>
//     </>
//     )
    

// };




// export default NavBar;

import React, { useState, useEffect } from 'react';
import {
  HomeOutlined,
  GlobalOutlined,
  BellOutlined,
  UserOutlined,
  PoweroffOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`navbar-container ${!isOpen ? 'active' : ''} ${
          isSmallScreen ? 'small-screen' : ''
        }`}
      >
        <div className="navbar-header">
          <span style={{ whiteSpace: 'nowrap' }}>
            <b>Wildlife Companion</b>
          </span>
        </div>
        <Menu
          mode={!isSmallScreen ? 'vertical' : 'horizontal'}
          selectedKeys={[location.pathname]}
          onClick={({ key }) => {
            if (key === 'signout') {
              // Handle logout logic here
            } else {
              navigate(key);
            }
          }}
        >
          <Menu.Item
            key="/"
            icon={<HomeOutlined />}
            className={location.pathname === '/' ? 'active-menu-item' : ''}
          >
            Home
          </Menu.Item>
          <Menu.Item
            key="/map"
            icon={<GlobalOutlined />}
            className={location.pathname === '/map' ? 'active-menu-item' : ''}
          >
            Explore
          </Menu.Item>
          <Menu.Item
            key="/chatbot"
            icon={<BellOutlined />}
            className={location.pathname === '/chatbot' ? 'active-menu-item' : ''}
          >
            Notifications
          </Menu.Item>
          <Menu.Item
            key="/profile"
            icon={<UserOutlined />}
            className={location.pathname === '/profile' ? 'active-menu-item' : ''}
          >
            Profile
          </Menu.Item>
          <Menu.Item key="signout" icon={<PoweroffOutlined />} danger>
            Logout
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};

export default NavBar;

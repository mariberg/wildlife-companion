// import React, { useState, useEffect } from 'react';
// import {
//   HomeOutlined,
//   GlobalOutlined,
//   BellOutlined,
//   UserOutlined,
//   PoweroffOutlined,
//   MenuOutlined,
// } from '@ant-design/icons';
// import { Menu } from 'antd';
// import { useNavigate, useLocation } from 'react-router-dom';
// import './NavBar.css';

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 500); // Adjust the breakpoint as needed
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div
//         className={`navbar-container ${!isOpen ? 'active' : ''} ${
//           isSmallScreen ? 'small-screen' : ''
//         }`}
//       >
//         <div className="navbar-header">
//           <span style={{ whiteSpace: 'nowrap' }}>
//             <b>Wildlife Companion</b>
//           </span>
//         </div>
//         <Menu
//           mode={!isSmallScreen ? 'vertical' : 'horizontal'}
//           selectedKeys={[location.pathname]}
//           onClick={({ key }) => {
//             if (key === 'signout') {
//               // Handle logout logic here
//             } else {
//               navigate(key);
//             }
//           }}
//         >
//           <Menu.Item
//             key="/"
//             icon={<HomeOutlined />}
//             className={location.pathname === '/' ? 'active-menu-item' : ''}
//           >
//             Home
//           </Menu.Item>
//           <Menu.Item
//             key="/map"
//             icon={<GlobalOutlined />}
//             className={location.pathname === '/map' ? 'active-menu-item' : ''}
//           >
//             Explore
//           </Menu.Item>
//           <Menu.Item
//             key="/chatbot"
//             icon={<BellOutlined />}
//             className={location.pathname === '/chatbot' ? 'active-menu-item' : ''}
//           >
//             Notifications
//           </Menu.Item>
//           <Menu.Item
//             key="/profile"
//             icon={<UserOutlined />}
//             className={location.pathname === '/profile' ? 'active-menu-item' : ''}
//           >
//             Profile
//           </Menu.Item>
//           <Menu.Item key="signout" icon={<PoweroffOutlined />} danger>
//             Logout
//           </Menu.Item>
//         </Menu>
//       </div>
//     </>
//   );
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
      {/* Add a condition to show/hide the NavBar based on screen size */}
      {!isSmallScreen ? (
        <div
          className={`navbar-container ${!isOpen ? 'active' : ''}`}
        >
          <div className="navbar-header">
            <span style={{ whiteSpace: 'nowrap' }} id="logo">
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
      ) : (
        // Show only icons on small screens
        <div className="navbar-icons">
          <MenuOutlined className="menu-icon" onClick={toggle} />
        </div>
      )}
    </>
  );
};

export default NavBar;

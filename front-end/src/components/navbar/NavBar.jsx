
import React, { useState, useEffect } from 'react';
import {
  HomeOutlined,
  GlobalOutlined,
  WechatOutlined,
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
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = ({ key }) => {
    if (key === 'signout') {
      // Handle logout logic here
    } else {
      navigate(key);
      if (isSmallScreen) {
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {!isSmallScreen ? (
        <div className={`navbar-container ${!isOpen ? 'active' : ''}`}>
          <div className="navbar-header">
            <span style={{ whiteSpace: 'nowrap' }} id="logo">
              <b>Wildlife Companion</b>
            </span>
          </div>
          <Menu
            mode={!isSmallScreen ? 'vertical' : 'horizontal'}
            selectedKeys={[location.pathname]}
            onClick={handleMenuItemClick}
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
              icon={<WechatOutlined />}
              className={location.pathname === '/chatbot' ? 'active-menu-item' : ''}
            >
              Chatbot
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

        <div className="navbar-icons">
    
      <div className="vertical-container">
      <MenuOutlined className="menu-icon" onClick={toggle} width="5px"/>
      <span style={{ transform: 'rotate(-90deg)', whiteSpace: 'nowrap' }} id="logo">
        <b>Wildlife Companion</b>
      </span>
    </div>

          {isOpen && (
            <Menu
              mode="vertical"
              selectedKeys={[location.pathname]}
              onClick={handleMenuItemClick}
            >
              <Menu.Item key="/" icon={<HomeOutlined />}
              className={location.pathname === '/' ? 'active-menu-item' : ''}
              >     
              </Menu.Item>
              <Menu.Item key="/map" icon={<GlobalOutlined />}
                 className={location.pathname === '/map' ? 'active-menu-item' : ''}>     
              </Menu.Item>
              <Menu.Item key="/chatbot" icon={<WechatOutlined />}
               className={location.pathname === '/chatbot' ? 'active-menu-item' : ''}>
              </Menu.Item>
              <Menu.Item key="/profile" icon={<UserOutlined />}
               className={location.pathname === '/profile' ? 'active-menu-item' : ''}>
              </Menu.Item>
              <Menu.Item key="signout" icon={<PoweroffOutlined />} danger>
              </Menu.Item>
            </Menu>
          )}
        </div>
      )}
    </>
  );
};

export default NavBar;


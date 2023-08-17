import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/map" activeClassName="active">Map</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/chatbot" activeClassName="active">ChatBot</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar=()=> {
  return (
    <div>
            <nav className="navbar default fixed-top navbar-expand-lg navbar-dark bg-primary">
                <span className="navbar-brand">Navbar</span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className='nav-link' to="/">Home</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className='nav-link' to="/Teacher">Teachers</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className='nav-link' to="/Student">Students</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className='nav-link' to="/Login">Log Out</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
  )
}

export default Navbar;

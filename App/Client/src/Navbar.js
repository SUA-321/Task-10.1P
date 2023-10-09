import React from 'react';
import {Outlet, Link} from 'react-router-dom'

const Navbar = () => {
  return (
<div>
    <nav className="navbar">
      <div className="navbar-left">DevLink Marketplace</div>
      <div className="navbar-right">

        <Link className='link' to='/'>
          Find Dev
        </Link>

        <Link className='link' to='/'>
          Find Jobs
        </Link>

        <Link className='link' to='/login'>
          Login
        </Link>

        <Link className='link' to='/create-account'>
          Create Account
        </Link>
      </div>
    </nav>
    <Outlet />
</div>
);
}

export default Navbar;

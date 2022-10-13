import React from 'react';
import { Link } from 'react-router-dom';
import typo from '../../Assets/images/typo.png';

const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="/" className='navbar-logo '>TRVL <img className='w-12 inline-block' src={typo} alt="" />  </Link>

      </div>

    </nav>
    </>
  )
}

export default Navbar
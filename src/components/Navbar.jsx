import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to="/" className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font shadow-md'>
        <p className='brown-gradient_text'>MS</p>
        </NavLink>
        <nav className='flex text-lg gap-4 font-medium'>
        <NavLink to='/about' className={({ isActive}) => isActive? 'text-brown' : 'text-black'}>About</NavLink>
        <NavLink to='/projects' className={({ isActive}) => isActive? 'text-brown' : 'text-black'}>Projects</NavLink>
        <NavLink to='/contact' className={({ isActive}) => isActive? 'text-brown' : 'text-black'}>Contact</NavLink>
        </nav>
      
    </header>
  )
}

export default Navbar

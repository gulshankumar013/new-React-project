import React from 'react'
import "../css/nav.css"
import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosHeartEmpty, IoMdNotificationsOutline } from 'react-icons/io';
import { PiUser } from 'react-icons/pi';



const Nav = () => {
  return (
    <>
     <section className='nav-section'>
        <nav className='navbar-img'>
           <div className='logo'></div>
            <ul className='nav-list'>
               <Link to={"/landing"}>Home</Link>
                <Link to={"/about"}>About us</Link>
                <Link to={"/customize"}>Customize</Link>
                <Link to={"/categories"}>Categories</Link>
                <Link to={"/new_launch"}>New Launch</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/signup"}>Signup</Link>
            </ul>
                <div className='rightNav'>
                    <input type="text" name='search' id='search' placeholder='Search' />
                    <button className='btn'>Search</button>
                </div>
                <div className='nav-icon'>
                    <a href=""><IoCartOutline className='nav-icons'/></a>
                    <a href=""><IoMdNotificationsOutline className='nav-icons'/></a>
                    <a href=""><PiUser className='nav-icons'/></a>
                   <a href=""><IoIosHeartEmpty className='nav-icons'/></a>
                </div>
        </nav>
        
    </section> 
    </>
       
  )
}

export default Nav

import React from 'react'
import "../css/login.css"
import { FaAppStoreIos, FaApple, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa'
import { BsAndroid2 } from 'react-icons/bs'
import Nav from './Nav'
const Login = () => {
  return (
    <>
    <Nav/>
    <section className='login-page'>
    <div className='login-logo-slogan'>
            <div className='login-logo'></div>
            <div >
                <h1 className='appname'>GIGANEXUS</h1>
                <p className='appslogan'>The Ultimate Paradise for Technovores</p>
                <form action="#" method='post'>
                <div className='login-form'>
                    <h2>Login or Signup</h2> 
                    <input className='login-input' type="text" id="username" name="username" placeholder="Enter your username"></input>
                    <input className='login-input' type="password" id="password" name="password" placeholder="Enter your password"></input>
                    <input className='login-btn' type="submit" value="Login" />
                    <h4>or</h4>
            </div> 
            </form>
                <div className='login-socical'>
                    <a className='login-socical-icon' href=""><FaGoogle/></a>
                    <a className='login-socical-icon' href=""><FaFacebook/></a>
                    <a className='login-socical-icon' href=""><FaApple/></a>
                    <a className='login-socical-icon'href=""><FaTwitter/></a>
                </div>
            </div>
            <div className='store-icon'>
              <a href=""><button> App Store</button></a>
              <a href=""><button>Play Store</button></a>
            </div>  
        </div>
    </section>
    </>
  )
}

export default Login

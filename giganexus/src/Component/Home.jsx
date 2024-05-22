import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import "../css/home.css"
import Landing from './Landing'
const Home = () => {
  return (
    <div className='home'>
      <Nav/>
    <Outlet/>
    </div>

  )
}

export default Home

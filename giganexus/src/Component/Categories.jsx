import React from 'react'
import '../css/categories.css'
import bgvideo from '../assests/video.mp4'
import Footer from "./Footer";

const Categories = () => {
  return (
    <>
    <div className='categories'>
      <video src={bgvideo} autoPlay loop muted/>

        <div></div>
    </div>
    <Footer/>
    </>
  )
}

export default Categories

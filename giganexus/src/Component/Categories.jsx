import React from 'react'
import '../css/categories.css'
import bgvideo from '../assests/video2.mp4'
import Footer from "./Footer";

const Categories = () => {
  return (
    <>
    <div className='categories'>
      <video src={bgvideo} autoPlay loop muted playsInline className='background-clip'/>

      <div className='text1'><h1>LET'S BRING YOUR ENEMY AT YOUR HOME </h1></div>
      <div className='text2'><h1>BY SELECTING YOUR TECH ASSESTS</h1></div>
        <div className='categories-parent'>
            <div className="cat-child1">
                <div className="cat-child1-name"><h4>Gaming</h4><p>Controllers</p></div>
                <div className="cat-child1-img"></div>
          </div>

          <div className="cat-child1">
                <div className="cat-child1-name"><h4>Workstation</h4><p>Monitor</p></div>
                <div className="cat-child1-img2"></div>
          </div>

          <div className="cat-child1">
                <div className="cat-child1-name"><h4>VR</h4><p>Controller</p></div>
                <div className="cat-child1-img3"></div>
          </div>

          <div className="cat-child1">
                <div className="cat-child1-name"><h4>Gaming</h4><p>Keyboard</p></div>
                <div className="cat-child1-img4"></div>
          </div>

          <div className="cat-child1">
                <div className="cat-child1-name"><h4>Gaming</h4><p>Mouse</p></div>
                <div className="cat-child1-img5"></div>
          </div>

          <div className="cat-child1">
                <div className="cat-child1-name"><h4>Gaming</h4> <p>Console</p></div>
                <div className="cat-child1-img6"></div>
          </div>

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Categories

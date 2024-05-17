import React from "react";
import "../css/landing.css";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Footer from "./Footer";



const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '25em'
}

const slideImages = [
  {
    url:"slideimage1.jpg"
  },
  {
    url: "slideimage2.png",
    
  },
  {
    url: "slideimage3.png",
    
  },
  {
    url: "slidimage4.png",
  },
];
const Landing = () => {
  return (
    <>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
              </div>
            </div>
          ))}
        </Slide>
      </div>

        <div className="landing-page">
              <div className="parent1">

                     {/* card 1 */}
                  <div className="child1">
                          <div className="card-box1"></div>
                          <div className="card-box2">Cabinate</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                    {/* card 2 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('cardimage2.png')"}} className="card-box1"></div>
                          <div className="card-box2">Graphics card</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 3 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('monitor.png')",marginTop:'1%'}} className="card-box1"></div>
                          <div className="card-box2">Gaming Monitor</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 4 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('playstation5.png')",marginLeft:'15%'}} className="card-box1"></div>
                          <div className="card-box2">Play Station5</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 5 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('xbox.png')",marginLeft:'10%'}} className="card-box1"></div>
                          <div className="card-box2">X box</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 6 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('remoteplay.png')"}} className="card-box1"></div>
                          <div className="card-box2">PSP Remote play</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 7 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('razer.png')"}} className="card-box1 container1-card7-box1"></div>
                          <div className="card-box2">Gaming Mouse</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

              </div>

                {/* 2nd continer */}
              <div className="parent1">
                 {/* card 1 */}
                 <div className="child1">
                          <div style={{backgroundImage:"url('ssd.png')"}} className="card-box1"></div>
                          <div className="card-box2">SSD M.2</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                    {/* card 2 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('dellmonitor.png')"}}  className="card-box1 container2-card2-box1"></div>
                          <div className="card-box2">Dell Monitor</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 3 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('gammingkey.png')"}} className="card-box1 container2-card3-box1"></div>
                          <div className="card-box2">Keyboard</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 4 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('cpu1.png')"}} className="card-box1 container2-card4-box1"></div>
                          <div className="card-box2">HP CPU Z8 G5</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 5 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('cpu2.png')"}} className="card-box1 container2-card5-box1"></div>
                          <div className="card-box2">HP CPU Z4 G5</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 6 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('laptop1.png')"}} className="card-box1 container2-card6-box1"></div>
                          <div className="card-box2">Asus ZenBook Duo</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 7 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('laptop2.png')"}} className="card-box1 container2-card7-box1"></div>
                          <div className="card-box2">Cabinate</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>
              </div>
                      {/* container-3 */}
              <div className="parent1">
                   {/* card 1 */}
                 <div  className="child1">
                          <div style={{backgroundImage:"url('pr1.png')"}}  className="card-box1 container3-card1-box1"></div>
                          <div className="card-box2">Nvidia</div>
                          <div className="card-box3">Up to 30% off</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                    {/* card 2 */}
                  <div className="child1">
                  <div  style={{backgroundImage:"url('pr2.png')"}}  className="card-box1 container3-card2-box1" ></div>
                          <div className="card-box2">Razer</div>
                          <div className="card-box3">Up to 20% off</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 3 */}
                  <div className="child1">
                  <div style={{backgroundImage:"url('pr3.png')"}}  className="card-box1 container3-card3-box1"></div>
                          <div className="card-box2">Cabinate</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 4 */}
                  <div className="child1">
                  <div className="card-box1"></div>
                          <div className="card-box2">Cabinate</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 5 */}
                  <div className="child1">
                  <div className="card-box1"></div>
                          <div className="card-box2">Cabinate</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 6 */}
                  <div className="child1">
                  <div className="card-box1"></div>
                          <div className="card-box2">Cabinate</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>

                  {/* card 7 */}
                  <div className="child1">
                  <div className="card-box1"></div>
                          <div className="card-box2">Cabinate</div>
                          <div className="card-box3">Grey White Smoulder...</div>
                          <div className="card-box4">
                                <div className="child4-a"><FaIndianRupeeSign/></div>
                                <div className="child4-b">13,000</div>
                          </div>
                                <div className="card-box5"> <a style={{color:'#0075FF'}} href=""><CiHeart style={{fontSize:'30px'}}/></a></div>
                  </div>
              </div>
        </div>
        <Footer/>
    </>
  );
};

export default Landing;

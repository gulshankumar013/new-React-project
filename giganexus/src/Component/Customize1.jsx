import React from 'react'
import '../css/customize1.css'
import { FaIndianRupeeSign } from 'react-icons/fa6'
const Customize1 = () => {
  return (
    <>
      <div className='customize1'>
                        {/* card 1 */}

                <div className='customize1-child1'>
                        <div className='customize1a'>
                                <div className='customize1-child1-a'><p>Budget</p> <h4 style={{marginLeft:'3%',color:'blue'}}> Gaming</h4></div>
                                <div className='customize1-child1-b'><p>Enjoy your all favourit latest game without breaking your bank</p></div>
                                <div className='customize1-child1-c'><p>Starts From</p></div>
                                <div className='customize1-child1-d'>
                                    <div className='customize1-child1-d1'><FaIndianRupeeSign style={{color:'#0075FF'}} /></div>
                                    <div className='customize1-child1-d2'><p style={{fontFamily:'Rubik'}}>34,500</p></div>
                                </div>
                                <div className='customize1-child1-e'><button>View More</button></div>
                        </div>
                        <div className='customize1b'>
                            < div className='customize-img'></div>    
                        </div>
                </div>
          


              {/* card 2 */}
          <div className='customize1-child1'>
          <div className='customize1a'>
                                <div className='customize1-child1-a'><p>Enthusiast</p> <h4 style={{marginLeft:'3%',color:'blue'}}> Gaming</h4></div>
                                <div className='customize1-child1-b'><p>Enjoy your all favourit latest game without breaking your bank</p></div>
                                <div className='customize1-child1-c'><p>Starts From</p></div>
                                <div className='customize1-child1-d'>
                                    <div className='customize1-child1-d1'><FaIndianRupeeSign style={{color:'#0075FF'}} /></div>
                                    <div className='customize1-child1-d2'><p style={{fontFamily:'Rubik'}}>34,500</p></div>
                                </div>
                                <div className='customize1-child1-e'><button>View More</button></div>
                        </div>
                        <div className='customize1b'>
                            < div className='customize-img'></div>    
                        </div>
          </div>

            {/* card 3 */}
          <div className='customize1-child1'>
          <div className='customize1a'>
                                <div className='customize1-child1-a'><p>Extreem</p> <h4 style={{marginLeft:'3%',color:'blue'}}> Gaming</h4></div>
                                <div className='customize1-child1-b'><p>Enjoy your all favourit latest game without breaking your bank</p></div>
                                <div className='customize1-child1-c'><p>Starts From</p></div>
                                <div className='customize1-child1-d'>
                                    <div className='customize1-child1-d1'><FaIndianRupeeSign style={{color:'#0075FF'}} /></div>
                                    <div className='customize1-child1-d2'><p style={{fontFamily:'Rubik'}}>34,500</p></div>
                                </div>
                                <div className='customize1-child1-e'><button>View More</button></div>
                        </div>
                        <div className='customize1b'>
                            < div className='customize-img'></div>    
                        </div>
          </div>
      </div>
    </>
  )
}

export default Customize1

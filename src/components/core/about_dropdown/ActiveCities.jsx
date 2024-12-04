import React from 'react'

import coverImg from '../../../assets/cover.png'
import cityImg from '../../../assets/cityImage.png'
const ActiveCities = () => {
  return (
    <div>
         {/* Header Section */}
         <div
                className="d-flex justify-content-center align-items-center position-relative"
                style={{
                    backgroundImage: `url(${coverImg})`,
                    
                    backgroundPosition: 'center',
                    height: "75vh",
                    objectFit:"contain"
                }}
            >
                {/* Overlay for semi-transparent background */}
                <div
                    className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
                    
                >
                    <div className="fw-bold display-4 text-white text-center">
                    Active Cities of 41 India
                    </div>
                </div>
            </div>

        {/*  Section */}
        <div className=" pl-10 ml-10  pr-10 mr-10  bg-white text-center">
            <div className="pt-5 px-3 bg-white text-center">
                <p className="fw-bold fs-2 pb-2">Active Cities of 41 India</p>
               
                <div className='flex justify-center items-center w-11/12 m-2 object-contain h[144px]'>
                    <img src={cityImg} alt="cityImage" />
                </div>
                
            </div>
            </div>
            

      
    </div>
  )
}

export default ActiveCities

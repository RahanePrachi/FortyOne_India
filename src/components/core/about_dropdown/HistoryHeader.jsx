import { React, useState } from "react";

import Carousel from 'react-bootstrap/Carousel';
import corouelcover from "../../../assets/Testimonial.png";

const HistroyHeader = () => {
    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
       // Inline styles for height adjustment
    const imageStyle = {
      maxHeight: '75vh', // Set the desired height
      objectFit: 'cover', // Ensures the image fills the space
      width: '100%', // Full width for responsiveness
    };
  
    const carouselItemStyle = {
      height: '75vh', // Match the container height
    };
    return (
      <div>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={1000}>
          <Carousel.Item style={carouselItemStyle}>
            {/* Image */}
            <img
              style={{
                ...imageStyle,
                position: "relative",
                zIndex: 1,
                height: "75vh",
              }}
              src={corouelcover}
              alt="41 India"
            />
            {/* Overlay */}
            <div
              className="position-absolute top-0 start-0"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "#083D7866", // Semi-transparent black overlay
                zIndex: 1,
              }}
            ></div>
            <Carousel.Caption
              className="d-flex justify-content-center align-items-center text-center"
              style={{
                height: "100%",
                zIndex: 3,
              }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  {/* Title Section */}
                  <div
                    style={{
                      fontFamily: "Montserrat",
                      fontWeight: 800,
                      lineHeight: "1.5em", // Default line-height for larger screens
                      letterSpacing: "0.2px",
                      textAlign: "center",
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                    }}
                    className="col-12 col-md-8 display-4 text-white"
                  >
                    History of 41 India{" "}
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  };
export default HistroyHeader

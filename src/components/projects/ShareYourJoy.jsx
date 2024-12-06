import { React, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import corouelcover from './assets/share_joy_project/cover.png'

import bgImg from "../../assets/background.png";
import image1 from "./assets/share_joy_project/card-item.png";
import image2 from "./assets/share_joy_project/card-item (1).png";
import image3 from "./assets/share_joy_project/card-item (2).png";
import image4 from "./assets/share_joy_project/card-item (3).png";
import image5 from "./assets/share_joy_project/card-item (4).png";
import image6 from "./assets/share_joy_project/card-item (4).png";
import image7 from "./assets/share_joy_project/card-item (6).png";
import image8 from "./assets/share_joy_project/card-item (7).png";
import image9 from "./assets/share_joy_project/card-item (8).png";
import image10 from "./assets/share_joy_project/card-item (9).png";
import image11 from "./assets/share_joy_project/card-item (10).png";
import image12 from "./assets/share_joy_project/card-item (11).png";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const ShareYourJoy = () => {
  const ProjectData = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
    {
      image: image4,
    },
    {
      image: image5,
    },
    {
      image: image6,
    },
    {
      image: image7,
    },
    {
      image: image8,
    },
    {
      image: image9,
    },
    {
      image: image10,
    },
    {
      image: image11,
    },
    {
      image: image12,
    },
  ];

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
          style={{ ...imageStyle, position: 'relative', zIndex: 1, height: "75vh" }}
          src={corouelcover}
          alt="41 India"
        />
        {/* Overlay */}
        <div
          className="position-absolute top-0 start-0"
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#083D7866', // Semi-transparent black overlay
            zIndex: 1,
          }}
        >
        </div>
        <Carousel.Caption
          className="d-flex justify-content-center align-items-center text-center"
          style={{
            height: '100%',
            zIndex: 3,
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              {/* Title Section */}
              <div
                style={{
                  fontFamily: 'Montserrat',
                  fontWeight: 800,
                  lineHeight: '1.5em', // Default line-height for larger screens
                  letterSpacing: '0.2px',
                  textAlign: 'center',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                }}
                className="col-12 col-md-8 display-4 text-white"
              >
                Share Your Joy              </div>


            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel >

    <div className="m-5 p-5" >
      <Row>
        <Col xs={12} sm={6} md={6} lg={6}>
          <div>
            <div >
              <div className="mb-4">
              <div
                            className="fw-bold text-center mt-1 text-uppercase border"
                            style={{
                                fontFamily: "Lato",
                                fontSize: "12px",
                                fontWeight: "400",
                                lineHeight: "15.57px",
                                letterSpacing: "0.415em",
                                textAlign: "left",
                                textUnderlinePosition: "from-font",
                                textDecorationSkipInk: "none",
                                width: "fit-content",
                            }}
                        >
                           About</div>
                <h1 className="text-2xl font-bold mt-2">What is SHARE YOUR JOY(SYJ)?</h1>
                <p className="mt-2">SYJ is a 41 Clubs initiative to encourage 41ers to take up community service activities.</p>
              </div>
              <div className="mb-4">
                <h2 className="text-xl font-bold mt-4">What actives can be considered for SYJ?</h2>
                <p className="mt-2">Some of the suggested SYJ activities:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Visit the Prospect Premises: like Schools, Old Age Homes, Orphanages etc.</li>
                  <li>Understand Requirements : Review their Requirements (other than infrastructure)</li>
                  <li>Givables under Consideration:
                    <ul className="list-disc list-inside ml-4">
                      <li>Food, Ration kits, Child's Toys, Clothes, Books,</li>
                      <li>Medical Donations like Wheel Chairs, Artificial Limbs, Hospital Beds, Oxygen Machines etc.</li>
                      <li>Utilities like Air Coolers, Inverters, Beds, Computers etc.,</li>
                      <li>Health & Hygiene</li>
                      <li>Skill Development</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <p>For any other information and clarification, 41ers can feel free to contact.</p>
                <p className="mt-2 font-bold">41er Yogesh Sheth</p>
                <p>Convenor SYJ & Fund Raising 2023-24</p>
                <p>Association of 41 Clubs of India</p>
                <p className="mt-2 flex items-center"><i className="fas fa-phone-alt mr-2"></i> 9844113750</p>
              </div>
            </div>

          </div>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <img src={corouelcover}  alt="picture" />
          {/* Content for the second column */}
        </Col>
      </Row>


    </div>
    <div
      className="p-5  text-[#17213B] relative  min-h-screen flex items-center justify-center "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      {/* Overlay with opacity */}
      <div
        className="absolute inset-0 bg-black "
        style={{ zIndex: -1 }}
      ></div>

      <Container className="relative  w-10/12">
        <p className="fs-2 fw-bold text-center pb-3 m-5">
          SHARE YOUR JOY - PROJECTS
        </p>
        <Row>
          {ProjectData.map((event, index) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className="text-center pb-3 "
              key={index}
            >
              <Card
                className="h-100 border-0 rounded-lg "
                style={{ maxWidth: "260px", height: "100%", overflow: "hidden" }}
              >
                <Card.Img
                  variant="top"
                  src={event.image}
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                  }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </div>
  );
}

export default ShareYourJoy
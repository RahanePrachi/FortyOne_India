import React from "react";

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
const SYJProjects = () => {
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
  return (
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
                style={{ maxWidth: "260px", height:"100%", overflow:"hidden"}}
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
  );
};

export default SYJProjects;

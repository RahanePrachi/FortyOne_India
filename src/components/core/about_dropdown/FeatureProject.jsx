import React from "react";
import image1 from "../../../assets/card-item.png";
import image2 from "../../../assets/card-item (1).png";
import image3 from "../../../assets/card-item (2).png";
import bgImg from "../../../assets/background.png";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const FeatureProject = () => {
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
  ];

  return (
    <div
      className="pb-5  text-[#17213B] relative gap-20"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      {/* Overlay with opacity */}
      <div
        className="absolute inset-0 bg-black opacity-80"
        style={{ zIndex: -1 }} // Keeps the overlay behind content
      ></div>

      <Container className="d-flex flex-column align-items-center justify-content-center text-center">
        <Row className="w-100 mb-32">
          <h2 className="fw-bold display-4 font-montserrat mt-20">
            FEATURED PROJECTS
          </h2>
          <p className="font-montserrat m-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Dummy text ever since an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </Row>
      </Container>

      {/* Project Cards Section */}
      <Container className="d-flex flex-column align-items-center justify-content-center pb-8">
        <Row className="d-flex justify-content-center align-items-center">
          {ProjectData.map((event, index) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={4}
              className="text-center p-3"
              key={index}
            >
              <Card className="h-100 border-0 " style={{maxWidth:"350px", maxHeight:"700px"}}>
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

export default FeatureProject;

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

import coverImg from './assets/fellowship/cover.png';
import image1 from './assets/fellowship/image1.png';
import image2 from './assets/fellowship/image2.png';
import image3 from './assets/fellowship/image3.png';

const Fellowship = () => {
  const selfieData = [
    {
      "image": image1,
      "date": "November 2022"
    },
    {
      "image": image2,
      "date": "November 2022"
    },
    {
      "image": image3,
      "date": "November 2022"
    }
    
  ]
  return (
    <div className='pb-5 mb-5'>
      {/* Header Section */}
      <div
        className="d-flex justify-content-center align-items-center position-relative"
        style={{
          backgroundImage: `url(${coverImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: "75vh",
        }}
      >
        {/* Overlay for semi-transparent background */}
        <div
          className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: '#124F9266', // #124F92 with 60% opacity
          }}
        >
          <div className="fw-bold display-4 text-white text-center">
            Fellowship
          </div>
        </div>
      </div>

      {/* Event Cards Section */}
      <Container className='d-flex flex-column align-items-center justify-content-center'>
        <p className='fs-2 fw-bold text-center m-5 '>Fellowship</p>
        <Row className='d-flex justify-content-center'>
          {
            selfieData.map((event, index) => (
              <Col xs={12} sm={6} md={4} lg={4} className='text-center p-3' key={index}>
                <Card className="h-100 border-2" style={{maxWidth:"310px", maxHeight:"477px"}}>
                  <Card.Img variant="top" src={event.image} />
                  <Card.Body>

                    <Card.Text>
                      <a href='#fellwship' target='' className='fw-bold ' style={{ color: "#0035F1" }}><u>{event.date}</u></a>

                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}


export default Fellowship
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import coverImg from './assets/other/cover.png'
import image1 from './assets/other/image1.png';
import image2 from './assets/other/image2.png';
import image3 from './assets/other/image3.png';
import image4 from './assets/other/image4.png';
const Others = () => {
  const selfieData = [
    {
      "image_url": image1,
      "volume": "Volume I"
    },
    {
      "image_url": image2,
      "volume": "Volume II"
    },
    {
      "image_url": image3,
      "volume": "Volume III"
    },
    {
      "image_url": image4,
      "volume": "Volume IV"
    },
   
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
            Other Communication
          </div>
        </div>
      </div>

      {/* Event Cards Section */}
      <Container>
        <p className='fs-2 fw-bold text-center m-5'>COVID Warriors Archives</p>
        <Row>
          {
            selfieData.map((event, index) => (
              <Col xs={12} sm={6} md={4} lg={3} className='text-center p-3' key={index}>
                <Card className="h-100 border-2">
                  <Card.Img variant="top" src={event.image_url} />
                  <Card.Body>

                    <Card.Text>
                      <a href='#volume' target='' className='fw-bold ' style={{ color: "#0035F1" }}><u>{event.volume}</u></a>

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


export default Others
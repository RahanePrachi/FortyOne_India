import React from 'react'
import coverImg from './assets/selfies/cover.png';
import selfie1 from './assets/selfies/selfie1.png';
import selfie2 from './assets/selfies/selfie2.png';
import selfie3 from './assets/selfies/selfie3.png';
import selfie4 from './assets/selfies/selfie4.png';
import selfie5 from './assets/selfies/selfie5.png';
import selfie6 from './assets/selfies/selfie6.png';
import selfie7 from './assets/selfies/selfie7.png';
import selfie8 from './assets/selfies/selfie8.png';
import selfie9 from './assets/selfies/selfie9.png';
import selfie10 from './assets/selfies/selfie10.png';
import selfie11 from './assets/selfies/selfie11.png';
import selfie12 from './assets/selfies/selfie12.png';
import selfie13 from './assets/selfies/selfie13.png';
import selfie14 from './assets/selfies/selfie14.png';
import selfie15 from './assets/selfies/selfie15.png';
import selfie16 from './assets/selfies/selfie16.png';

import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Selfie = () => {
  const selfieData = [
    {
      "selfie": selfie1,
      "date": "November 2022"
    },
    {
      "selfie": selfie2,
      "date": "November 2022"
    },
    {
      "selfie": selfie3,
      "date": "November 2022"
    },
    {
      "selfie": selfie4,
      "date": "November 2022"
    },
    {
      "selfie": selfie5,
      "date": "November 2022"
    },
    {
      "selfie": selfie6,
      "date": "November 2022"
    },
    {
      "selfie": selfie7,
      "date": "November 2022"
    },
    {
      "selfie": selfie8,
      "date": "November 2022"
    },
    {
      "selfie": selfie9,
      "date": "November 2022"
    },
    {
      "selfie": selfie10,
      "date": "November 2022"
    },
    {
      "selfie": selfie11,
      "date": "November 2022"
    },
    {
      "selfie": selfie12,
      "date": "November 2022"
    },
    {
      "selfie": selfie13,
      "date": "November 2022"
    },
    {
      "selfie": selfie14,
      "date": "November 2022"
    },
    {
      "selfie": selfie15,
      "date": "November 2022"
    },
    {
      "selfie": selfie16,
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
            backgroundColor: '#083D7866', // #124F92 with 60% opacity
          }}
        >
          <div className="fw-bold display-4 text-white text-center">
            Selfie
          </div>
        </div>
      </div>

      {/* Event Cards Section */}
      <Container>
        <p className='fs-2 fw-bold text-center m-5'>Selfies</p>
        <Row>
          {
            selfieData.map((event, index) => (
              <Col xs={12} sm={6} md={4} lg={3} className='text-center p-3' key={index}>
                <Card className="h-100 border-2">
                  <Card.Img variant="top" src={event.selfie} />
                  <Card.Body>

                    <Card.Text>
                      <a href='#selfie' target='' className='fw-bold ' style={{ color: "#0035F1" }}><u>{event.date}</u></a>

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

export default Selfie
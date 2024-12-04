import React from 'react'
import coverImg from './assets/Happening/cover.png'
import image from './assets/Happening/image.png'
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const Hoppenings = () => {
  const happeningData = [
    {
      "image": image,
      "date": "November 2022"
    },
    {
      "image": image,
      "date": "November 2022"
    },
    {
      "image": image,
      "date": "November 2022"
    },
    {
      "image": image,
      "date": "November 2022"
    },
    {
      "image": image,
      "date": "November 2022"
    },
    {
      "image": image,
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

      </div>

      {/* Event Cards Section */}
      <Container className='d-flex flex-column align-items-center justify-content-center'>
        <p className='fs-2 fw-bold text-center m-5 '>Happenings</p>
        <Row className='d-flex justify-content-center'>
          {
            happeningData.map((event, index) => (
              <Col xs={12} sm={6} md={4} lg={4} className='text-center p-3' key={index}>
                <Card className="h-100 border-2" style={{maxWidth:"310px", maxHeight:"477px"}}>
                  <Card.Img variant="top" style={{maxWidth:"310px", maxHeight:"423px"}} src={event.image} />
                  <Card.Body>

                    <Card.Text>
                      <a href='#happenings' target='' className='fw-bold ' style={{ color: "#0035F1" }}><u>{event.date}</u></a>

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


export default Hoppenings
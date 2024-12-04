import React from 'react';
import coverImg from './assets/cover.png';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';
import image7 from './assets/image7.png';
import image8 from './assets/image8.png';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Events = () => {
    const eventData = [
        { image_url: image1, event_title: "Event Title 1", news_paper_name: "News Paper Name", event_date: "2 December 2024" },
        { image_url: image2, event_title: "Event Title 2", news_paper_name: "News Paper Name", event_date: "2 December 2024" },
        { image_url: image3, event_title: "Event Title 3", news_paper_name: "News Paper Name", event_date: "2 December 2024" },
        { image_url: image4, event_title: "Event Title 4", news_paper_name: "News Paper Name", event_date: "2 December 2024" },
        { image_url: image5, event_title: "Event Title 5", news_paper_name: "News Paper Name", event_date: "2 December 2024" },
        { image_url: image6, event_title: "Event Title 6", news_paper_name: "News Paper Name", event_date: "2 December 2024" },
        { image_url: image7, event_title: "Event Title 7", news_paper_name: "News Paper Name", event_date: "2 December 2024" },
        { image_url: image8, event_title: "Event Title 8", news_paper_name: "News Paper Name", event_date: "2 December 2024" }
    ];

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
                        backgroundColor: '#124F9299', // #124F92 with 60% opacity
                    }}
                >
                    <div className="fw-bold display-4 text-white text-center">
                        41 India Events
                    </div>
                </div>
            </div>

            {/* Event Cards Section */}
            <Container>
                <p className='fs-2 fw-bold text-center m-5'>41 India in the News</p>
                <Row>
                    {
                        eventData.map((event, index) => (
                            <Col xs={12} sm={6} md={4} lg={3} className='text-center p-3' key={index}>
                                <Card className="h-100">
                                    <Card.Img variant="top" src={event.image_url} />
                                    <Card.Body>
                                        <Card.Title className='fs-5'>{event.event_title}</Card.Title>
                                        <Card.Text>
                                            <p className='fw-bold fs-6' style={{ color: "#124F92" }}>{event.news_paper_name}</p>
                                            <span className='fw-bold fs-6' style={{ color: "#124F92" }}> Date: </span>{event.event_date}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Events;

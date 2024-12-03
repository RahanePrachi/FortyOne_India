import React, { useState } from 'react';
import coverImg from './assets/cover.png';
import { Col, Row, Form, Card, Button } from 'react-bootstrap';
import { AiTwotoneEnvironment } from "react-icons/ai";
import { FaMobileAlt, FaRegEnvelope } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            {/* Header Section */}
            <div
                className="d-flex justify-content-center align-items-center"
                style={{
                    backgroundImage: `url(${coverImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: "75vh"
                }}
            >
                <div className="fw-bold display-4 text-white text-center">
                    Contact Us
                </div>
            </div>

            {/* Contact Section */}
            <div className=" pl-10 ml-10  pr-10 mr-10  bg-white text-center">
            <div className="pt-5 px-3 bg-white text-center">
                <p className="fw-bold fs-2 pb-2">Contact Us</p>
                <p className="fw-bold fs-4 pb-5">
                    Administrative Officer: <span style={{ color: "#124F92" }}>Mrs Jyothi</span>
                </p>

                <Row className="justify-content-center">
                    {/* Form Section */}
                    <Col xs={12} md={5} className="mb-4">
                        <Card className=" shadow-lg rounded h-100">
                            <Card.Body>
                                <Card.Title className="text-center mb-5  mt-4 fs-5 fw-bold">Contact Us</Card.Title>
                                <Form className="text-start" onSubmit={handleSubmit}>
                                    <Form.Group controlId="formName" className="mb-3">
                                        <Form.Control
                                            type="text"
                                            placeholder="Your name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="rounded-pill"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail" className="mb-3">
                                        <Form.Control
                                            type="email"
                                            placeholder="Your email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="rounded-pill"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formMessage" className="mb-3">
                                        <Form.Control
                                            as="textarea"
                                            rows={10}
                                            placeholder="Your message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className='h-100'
                                            
                                        />
                                    </Form.Group>
                                    <Button type="submit" className="mt-3 contact-btn">
                                        Send
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Contact Info Section */}
                    <Col xs={12} md={7}>
                        <Row className="g-4">
                            <Col xs={12} sm={6} md={4} className="d-flex flex-column align-items-center">
                                <AiTwotoneEnvironment color="#2091F9" className="fs-3 mb-2" />
                                <div className="text-center">
                                    41 India<br/> Round Table House, 3rd Floor<br />
                                    80, Nungambakkam High Road<br />
                                    Chennai – 600 034
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} className="d-flex flex-column align-items-center">
                                <FaMobileAlt color="#2091F9" className="fs-3 mb-2" />
                                <p>(+91) 7358673241</p>
                            </Col>
                            <Col xs={12} sm={6} md={4} className="d-flex flex-column align-items-center">
                                <FaRegEnvelope color="#2091F9" className="fs-3 mb-2" />
                                <p>office41india@gmail.com</p>
                            </Col>
                        </Row>

                        {/* Map Section */}
                        <Row className="justify-content-center mt-4">
                            <Col xs={12} className="px-3 pb-10">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.559283734261!2d80.2413559755434!3d13.063701012851435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526668ade2eb13%3A0x2e4cc3a1a95fbff3!2sAssociation%20of%2041%20Clubs%20of%20India!5e0!3m2!1sen!2sin!4v1733220832057!5m2!1sen!2sin"
                                    width="100%"
                                    height="350px"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
            </div>
        </>
    );
};

export default Contact;

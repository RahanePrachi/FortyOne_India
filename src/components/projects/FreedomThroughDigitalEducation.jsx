import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import coverImg from "./assets/freedom_through_digital_education/cover1.png"
import image from './assets/freedom_through_digital_education/image.png'
import infograph from './assets/freedom_through_digital_education/infograph.png'

const FreedomThroughDigitalEducation = () => {

    return (
        <div className='pb-5 mb-5'>
            {/* Header Section */}
            <div
                className="d-flex justify-content-center align-items-center position-relative"
                style={{
                    backgroundImage: `url(${coverImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: "80vh",

                }}
            >
                {/* Overlay for semi-transparent background */}
                <div
                    className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center"
                    style={{
                        // backgroundColor: '#083D7866', // #124F92 with 60% opacity
                    }}
                >
                    <div className="fw-bold display-4 text-white text-center">
                        Freedom through Digital<br /> Education
                    </div>
                </div>
            </div>

            {/* Event Cards Section */}
            <Container >
                <div className='text-center m-5 ps-5 pe-5'>
                    <p className='fs-4 fw-bold text-center mt-5 ml-5 mr-5 text-uppercase' style={{ color: "#124F92" }}>Freedom through Digital Education</p>
                    <p className='fs-4 fw-bold text-center mb-3 mt-1' style={{ color: "#87330A" }}>Long term project of 41Clubs of India</p>
                    <div
                        style={{
                            display: "flex",        // Makes the parent a flex container
                            justifyContent: "center", // Centers horizontally
                            alignItems: "center",    // Centers vertically (optional, if needed)
                        }}
                    >
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
                            brand purpose
                        </div>
                    </div>
                    <p style={{
                        fontFamily: "Montserrat",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "19.88px",
                        textAlign: "center",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                        paddingTop: "3px"
                    }}>
                        Association of ‘Young Past Tablers’ creating a BETTER INDIA by providing DIGITAL EDUCATION tools to TRI FTE schools across India, serving underprivileged children and making them future-ready.
                    </p>

                    <Row>
                        <Col xs={12} sm={6} md={6} lg={6} className='d-flex justify-content-center align-items-center pt-5'>
                            <img src={image} alt="image" />
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} className='d-flex justify-content-center align-items-center pt-5'>
                            <p style={{
                                fontFamily: "Montserrat",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "22.72px",
                                textAlign: "left",
                                textUnderlinePosition: "from-font",
                                textDecorationSkipInk: "none",
                            }}>
                                Tying up with our Aims & Objectives and deepening relations with RTI towards better Nation Building, 41Clubs of India brings to you its long-term project ...
                                <br />
                                <br />
                                FTDE - continued but differentiated FTE 2.0
                            </p>
                        </Col>
                    </Row>
                    <Row>

                    <img src={infograph} style={{ maxHeight: "498.32px", maxWidth: "1036px", alignContent: "center" }} alt="image" />
                    </Row>

                    <ul className='pt-5'
                        style={{

                            listStyleType: "disc",  // This adds the bullet points
                            paddingLeft: "20px",    // Adds indentation for the list
                            fontFamily: "Montserrat",
                            fontSize: "16px",
                            fontWeight: "600",
                            lineHeight: "30.72px",
                            textAlign: "left",
                            textUnderlinePosition: "from-font",
                            textDecorationSkipInk: "none",
                            color: "#1C1C1C",  // Adjusting the text color
                        }}>
                        <li className='pb-2'>Provide high-quality education to students of lower economic strata studying in government schools & in vernacular medium</li>
                        <li className='pb-2'>Bridge the digital divide and erase the geographic & economic disadvantage in education</li>
                        <li className='pb-2'>Produce digital savvy 3.0 Mn children over the next 10 years</li>
                    </ul>
                    <div className='pt-3'
                    style={{
                        fontFamily: "Montserrat",
                        fontSize: "16px",
                        fontWeight: "700",
                        lineHeight: "22.72px",
                        textAlign: "left",
                        textUnderlinePosition: "from-font",
                        textDecorationSkipInk: "none",
                        color: "#1C1C1C",  // Adjusting the text color
                        width: "272.58px",
                        height: "69px",
                    }}>
                        41er Paresh Chaudhry FDTE-Brand Ambassador Club 110, Area 4
                    </div>


                </div>

            </Container>
        </div>
    )
}

export default FreedomThroughDigitalEducation
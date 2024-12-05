import React from 'react'
import coverImg from "./assets/activecity_cover.png"
import map from "./assets/activecity_map.png"

import { Container, Row, Col } from 'react-bootstrap';

const ActiveCities = () => {
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
                <div className="fw-bold display-4 text-white text-center">
                    Acive Cities of 41 India
                </div>
            </div>

            <Container>
                <p className="fs-2 fw-bold text-center m-5">Active Cities of 41 India</p>
                <div className="d-flex justify-content-center">
                    <img
                        src={map}
                        style={{ maxHeight: "1442.18px", maxWidth: "1046px" }}
                        alt="Map of India"
                    />
                </div>
            </Container>

        </div>
    )
}

export default ActiveCities;
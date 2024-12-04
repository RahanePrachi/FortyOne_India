import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../App.css'
import logo from '../../assets/logo.png'

const Header = () => {
    return (

        <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
            <Container className="d-flex justify-content-center">
                
                <Navbar.Brand href="/" ><img src={logo} style={{maxHeight:"40px "}} alt="41 India logo"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="me-auto justify-content-center w-100">
                        <NavDropdown
                            title="About us"
                            id="basic-nav-dropdown"
                            className="custom-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">History</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">National Board</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Roll of Honour</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Active Cities</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Programs"
                            id="basic-nav-dropdown"
                            className="custom-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">Young Ambassador Program</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Young Internship Program</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Projects"
                            id="basic-nav-dropdown"
                            className="custom-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">Share your Joy</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Freedom through Digital Education</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/other-project">Other Projects</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Communication"
                            id="basic-nav-dropdown"
                            className="custom-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/communication-selfie">Selfie</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/communication-fellowship">Fellowship</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/communication-hoppenings">Happenings</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/communication-others">Others</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Links"
                            id="basic-nav-dropdown"
                            className="custom-dropdown"
                        >
                            <NavDropdown.Item as={Link} to="/links-fortyOneInternational">41 International</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/links-tangetIndia">Tanget India</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/links-roundTableIndia">Round Table India</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/links-ladiesCircleIndia">Ladies Circle India</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/links-fortyOneBnB">41 BnB</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/events">Events</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Item> <Button className="mt-1 mb-1 mr-1 custom-outline text-center" variant="outline-dark">
                            Donate
                        </Button></Nav.Item>
                        <Nav.Item> <Button className=" mt-1 mb-1 mr-1  custom-filled text-center" variant="outline-dark">
                        <FaUser className='me-1' />Member
                        </Button></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

}

export default Header
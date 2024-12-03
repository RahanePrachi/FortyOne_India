import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import '../../App.css'
const Header = () => {
    return (

        <Navbar expand="lg" className="bg-body-tertiary justify-content-center">
            <Container className="d-flex justify-content-center">
                
                <Navbar.Brand href="#home" className="me-2 w-0">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
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
                            <NavDropdown.Item href="#action/3.2">Other Projects</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Communication"
                            id="basic-nav-dropdown"
                            className="custom-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">Selfie</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Fellowship</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Hoppenings</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Others</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown
                            title="Links"
                            id="basic-nav-dropdown"
                            className="custom-dropdown"
                        >
                            <NavDropdown.Item href="#action/3.1">41 International</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Tanget India</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Round Table India</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Ladies Circle India</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">41 BnB</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#events">Events</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Item> <Button className="pt-1 ms-2 custom-outline text-center" variant="outline-dark">
                            Donate
                        </Button></Nav.Item>
                        <Nav.Item> <Button className="pt-1 ms-2 custom-filled text-center" variant="outline-dark">
                        <FaUser className='me-1' />Member
                        </Button></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

}

export default Header
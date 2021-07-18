import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

interface NavHeaderProps {

}

const NavHeader: React.FC<NavHeaderProps> = ({}) => {
    return (
        <Navbar className="bg-dark px-4">
            <Navbar.Brand className="text-light" href="/">
                    Retina
            </Navbar.Brand>
            <input className="w-50 mx-4" placeholder="search"></input>
            <Container className="justify-content-end">
                <Nav>
                    <Nav.Item className="mx-4">
                        <Nav.Link className="text-light" href="/explore">Explore</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-4">
                        <Nav.Link className="text-light" href="/upload/photo">
                            Upload
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-4">
                        <Nav.Link className="text-light" href="/">
                            Profile
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default NavHeader;
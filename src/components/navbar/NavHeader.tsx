import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router';

const NavHeader: React.FC = () => {
    const [input, setInput] = useState({ 
        query: "",
        encode: ""
    });

    const history = useHistory();

    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if (!input.encode) return

        history.push("/search/"+input.encode);
    }

    const  handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target

        setInput({
            query: value,
            encode: encodeURI(value)
        });
    }

    return (
        <Navbar className="retina-bg-dark px-4 ">
            <Navbar.Brand className="text-light" href="/">
                    Retina
            </Navbar.Brand>
            <Container>
                <Form className="d-flex w-100">
                    <Form.Control value={input.query} onChange={handleChange} className="flex-grow-1" type="text"/>
                    <button onClick={handleClick}>Search</button>
                </Form>
            </Container>
            <Container className="justify-content-end">
                <Nav>
                    <Nav.Item className="mx-4">
                        <Nav.Link className="text-light" href="/explore">Explore</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="mx-4">
                        <Nav.Link className="text-light" href="/upload/image">
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
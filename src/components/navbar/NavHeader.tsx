import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Popover from '@material-ui/core/Popover';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { CurrentUserContext } from '../layout/CurrentUser';
import { Link } from 'react-router-dom';

const NavHeader: React.FC = () => {
    const [input, setInput] = useState({ 
        query: "",
        encode: ""
    });
    const [btnAnchor, setBtnAnchor] = useState<HTMLButtonElement | null>(null);
    const { currentUser } = useContext(CurrentUserContext);
    const history = useHistory();

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!input.encode) return

        history.push("/search/"+input.encode);
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target

        setInput({
            query: value,
            encode: encodeURI(value)
        });
    }

    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setBtnAnchor(e.currentTarget);
        console.log("click")
    }

    const handleClose= (e : any) => {
        setBtnAnchor(null);
    }

    return (
        <Navbar className="retina-bg-dark px-4 ">
            <Navbar.Brand className="text-light" href="/">
                    Retina
            </Navbar.Brand>
            <Container>
                <Form className="d-flex w-100" onSubmit={handleSubmit}>
                    <Form.Control value={input.query} onChange={handleChange} className="flex-grow-1" type="text" placeholder="Search for an Image"/>
                    <button type="submit" className="ms-1 retina-btn-blue">Search</button>
                </Form>
            </Container>
            <Container className="justify-content-end">
                <Nav>
                    <Nav.Item className="mx-4">
                        <Link className="retina-text-light text-decoration-none align-middle" to="/explore">Explore</Link>
                    </Nav.Item>
                    <Nav.Item className="mx-4">
                        <Link className="retina-text-light text-decoration-none align-middle" to="/upload/image">Upload</Link>
                    </Nav.Item>
                    <Nav.Item className="mx-4 d-flex align-items-center">
                        <button className="retina-btn-icon" onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#f8f9fa" className="bi bi-three-dots" viewBox="0 0 16 16">
                                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                            </svg>
                        </button>
                        <Popover 
                            open={Boolean(btnAnchor)}
                            anchorEl={btnAnchor}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            >
                            <div className="d-flex py-2 flex-column">
                                {
                                    currentUser ?

                                    <>
                                        <h6 className="retina-text-dark dropdown-title px-4 py-2">{currentUser.name}</h6>
                                        <Link className="w-100 px-4 py-2 retina-text-blue retina-dropdown-item" to={"/user/"+currentUser.id}>Profile</Link>
                                        <Link className="w-100 px-4 py-2 retina-text-blue retina-dropdown-item" to={"/edit/user"}>Edit Profile</Link>
                                    </>

                                    : 

                                    <>
                                        <h6 className="retina-text-dark dropdown-title px-4 py-2">Not signed in</h6>
                                        <Link className="w-100 px-4 py-2 retina-text-blue retina-dropdown-item" to="/login">Login</Link>
                                        <Link className="w-100 px-4 py-2 retina-text-blue retina-dropdown-item" to="/signup">Sign Up</Link>
                                    </>
                                }
                            </div>
                        </Popover>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default NavHeader;
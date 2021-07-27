import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import { AuthRequest } from '../../types/userTypes';
import { login } from '../../util/user/userService';
import { useHistory } from 'react-router';

interface LoginProps {

}

const Login: React.FC<LoginProps> = ({}) => {
    const [input, setInput] = useState<{
        [key: string]: string
    }>({
        username: "",
        password: ""
    });
    const [validate, setValidate] = useState(false);
    const [toast, setToast] = useState(false);
    const history = useHistory();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;

        setInput(prev => {
            let copy = {...prev};
            copy[name] = value;
            return copy; 
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();

        console.log(e.target);

        setValidate(true);

        if (!input.username || !input.password) return;

        const authRequest : AuthRequest = {
            username: input.username,
            password: input.password
        }

        console.log("logging in");

        login(authRequest)
        .then( res => {
            history.push("/");
        }).catch( e => setToast(true));
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center h-100 w-50 retina-text-dark">
            <h3 >Login</h3>
            <Form noValidate className="w-50" validated={validate} onSubmit={handleSubmit}>
                <Form.Group className="my-2">
                    <Form.Label>Email</Form.Label>
                    <Form.Control required value={input["username"]} onChange={handleChange} name="username" type="email" placeholder="Enter your email"/>
                    <Form.Control.Feedback type="invalid">Please Enter Your Email</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required value={input["password"]} onChange={handleChange} name="password" type="password" placeholder="Password"/>
                    <Form.Control.Feedback type="invalid">Please Enter Your Password</Form.Control.Feedback>
                </Form.Group>
                <button className="w-100 retina-btn-dark my-2" type="submit">
                    Submit
                </button>
            </Form>
            {
                toast ?
                <Toast onClose={() => setToast(false)} show={toast} className="retina-toast" delay={3000} autohide>
                    <Toast.Header closeButton={false} className="d-flex justify-content-between">
                        <strong className="retina-text-dark-blue">Retina</strong>
                        <button onClick={() => setToast(false)} className="retina-btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </Toast.Header>
                    <Toast.Body>
                        Login failed, please try again!
                    </Toast.Body>
                </Toast> : <></>
            }
        </Container>
    );
}
export default Login;
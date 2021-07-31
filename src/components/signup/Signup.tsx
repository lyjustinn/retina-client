import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import { NewUser } from '../../types/userTypes';
import { createUser } from '../../util/user/userService';
import { useHistory } from 'react-router';

interface SignupProps {

}

const Signup: React.FC<SignupProps> = ({}) => {
    const [input, setInput] = useState<{
        [key: string]: string
    }>({
        username: "",
        password: "",
        firstName: "",
        lastName: ""
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

        setValidate(true)

        console.log(e.target);

        if (!input.username || !input.firstName || !input.lastName || !input.password) return;

        const newUser : NewUser = {
            username: input.username,
            firstName: input.firstName,
            lastName: input.lastName,
            password: input.password
        }

        console.log("Creating new user");

        createUser(newUser)
        .then( res => {
            history.push("/login");
        }).catch( e => setToast(true));
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center h-100 w-50 retina-text-dark">
            <h3 >Sign Up</h3>
            <Form noValidate className="w-50" validated={validate} onSubmit={handleSubmit}>
                <Form.Group className="my-2">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control required value={input["username"]} onChange={handleChange} name="username" type="email" placeholder="Email"/>
                    <Form.Control.Feedback type="invalid">Please Enter Your Email.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required value={input["firstName"]} onChange={handleChange} name="firstName" type="text" placeholder="First Name"/>
                    <Form.Control.Feedback type="invalid">Please Enter Your First Name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required value={input["lastName"]} onChange={handleChange} name="lastName" type="text" placeholder="Last Name"/>
                    <Form.Control.Feedback type="invalid">Please Enter Your Last Name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required value={input["password"]} onChange={handleChange} name="password" type="password" placeholder="Password"/>
                    <Form.Control.Feedback type="invalid">Please Enter Your Password</Form.Control.Feedback>
                </Form.Group>
                <button className="w-100 my-2 retina-btn-dark">Sign Up</button>
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
                        Sign up failed, please try again!
                    </Toast.Body>
                </Toast> : <></>
            }
        </Container>
    );
}
export default Signup;
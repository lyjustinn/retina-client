import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { AuthRequest } from '../../types/userTypes';
import { login } from '../../util/user/userService';

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
            console.log("success")

            if (res) // redirect
            
            // otherwise give error message
             
            return;
        }).catch( e => console.error(e));
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
        </Container>
    );
}
export default Login;
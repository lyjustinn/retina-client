import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { NewUser } from '../../types/userTypes';
import { createUser } from '../../util/user/userService';

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
            name: input.firstName + " " + input.lastName,
            password: input.password
        }

        console.log("Creating new user");

        createUser(newUser)
        .then( res => {
            if (res) // redirect
            
            // otherwise give error message
             
            return;
        }).catch( e => console.error(e));
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center h-100 w-50">
            <h3>Sign Up</h3>
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
                <button className="w-100 my-2">Sign Up</button>
            </Form>
        </Container>
    );
}
export default Signup;
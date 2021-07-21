import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { NewUser } from '../../types/retinaTypes';
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;

        setInput(prev => {
            let copy = {...prev};
            copy[name] = value;
            return copy; 
        })
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

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
        <div className="w-50">
            <Form>
                <Form.Control value={input["username"]} onChange={handleChange} name="username" type="email" placeholder="Enter your email"/>
                <Form.Control value={input["firstName"]} onChange={handleChange} name="firstName" type="text" placeholder="Please enter your first name"/>
                <Form.Control value={input["lastName"]} onChange={handleChange} name="lastName" type="text" placeholder="Please enter your last name"/>
                <Form.Control value={input["password"]} onChange={handleChange} name="password" type="password" placeholder="Password"/>
                <button onClick={handleClick}>
                    Submit
                </button>
            </Form>
        </div>
    );
}
export default Signup;
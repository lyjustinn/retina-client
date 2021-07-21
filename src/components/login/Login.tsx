import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { AuthRequest } from '../../types/retinaTypes';
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
        <div className="w-50">
            <Form>
                <Form.Control value={input["username"]} onChange={handleChange} name="username" type="email" placeholder="Enter your email"/>
                <Form.Control value={input["password"]} onChange={handleChange} name="password" type="password" placeholder="Password"/>
                <button onClick={handleClick}>
                    Submit
                </button>
            </Form>
        </div>
    );
}
export default Login;
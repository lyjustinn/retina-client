import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { UpdateRequest, User } from '../../../types/userTypes';
import { updateUser } from '../../../util/user/userService';

interface UserEditFormProps {
    user : User
}

const UserEditForm: React.FC<UserEditFormProps> = ({user}) => {
    const [input, setInput] = useState<{ [key: string] : string}>({
        firstName: "",
        lastName: "",
        bio: ""
    })
    
    const handleChange = ( e : React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;

        setInput(prev => {
            let copy = {...prev};
            copy[name] = value;
            return copy; 
        })
    }

    const handleSubmit = ( e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!input.firstName || ! input.lastName) return;

        const updateRequest : UpdateRequest = {
            name : input.firstName + " " + input.lastName,
            bio : input.bio,
            password : ""
        }

        updateUser(+user.id, updateRequest)
    }

    return (
        <Form>
            <Form.Control required value={input.firstName} onChange={handleChange} name="firstName" type="text" placeholder="Please enter your first name"/>
            <Form.Control required value={input.lastName} onChange={handleChange} name="lastName" type="text" placeholder="Please enter your last name"/>
            <Form.Control value={input.bio} onChange={handleChange} name="bio" type="bio" placeholder="bio"/>
            <button onClick={handleSubmit}>Submit</button>
        </Form>
    );
}
export default UserEditForm;
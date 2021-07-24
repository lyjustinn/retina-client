import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Image } from '../../../types/imageTypes';

interface ImageEditFormProps {
    image : Image
}

const ImageEditForm: React.FC<ImageEditFormProps> = ({image}) => {
    const [input, setInput] = useState<{ [key:string] : string}>({
        name: "",
        description: ""
    });

    const handleChange = ( e : React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;

        setInput( prev => {
            let copy = {...prev}
            copy[name] = value;

            return copy;
        })
    }

    const handleDelete = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        // send delete request
    } 

    const handleSubmit = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        

        // send update request
    }

    return (
        <Form>
            <Form.Control onChange={handleChange} value={input.name} name="name" type="text"/>
            <Form.Control onChange={handleChange} value={input.description} name="description" type="text"/>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleSubmit}>Submit</button>
        </Form>

    );
}
export default ImageEditForm;
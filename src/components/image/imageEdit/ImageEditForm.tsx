import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Image, ImageUpdateRequest } from '../../../types/imageTypes';
import { deleteImage, updateImage } from '../../../util/image/imageService';

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
        
        deleteImage(image.id);
    } 

    const handleSubmit = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        if (!input.name) return

        const updateRequest : ImageUpdateRequest = {
            name : input.name,
            description : input.description
        }

        updateImage(updateRequest, image.id);
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
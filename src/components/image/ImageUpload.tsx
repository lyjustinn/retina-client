import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

interface PhotoUploadProps {

}

const PhotoUpload: React.FC<PhotoUploadProps> = ({}) => {
    const [input, setInput] = useState<{
        [key: string]: any
    }>({
        name: "",
        description: "",
        image: ""
    })

    const [file, setFile] = useState<File | null>(null);

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        
        if (e.target.files != null) {
            const file = e.target.files[0];
            setFile(file);
        }

        setInput( prev => {
            let copy = {...prev}
            copy[name] = value

            return copy;
        })

    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        if (!input.name || !input.image || !file) return 
        // call API
    }

    return (
        <Form>
            <Form.Control onChange={handleChange} value={input.name} name="name" type="text" placeholder="name"/>
            <Form.Control onChange={handleChange} value={input.description} name="description" type="text-area" placeholder="Description"/>
            <Form.Control onChange={handleChange} value={input.image} name="image" type="file" placeholder="upload file"/>
            <button onClick={handleSubmit}>
                Submit
            </button>
        </Form>

    );
}
export default PhotoUpload;
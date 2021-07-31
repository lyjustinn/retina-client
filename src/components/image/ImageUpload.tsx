import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import { NewImageText } from '../../types/imageTypes';
import { createImage } from '../../util/image/imageService';
import { useHistory } from 'react-router';

const ImageUpload: React.FC = () => {
    const [input, setInput] = useState<{
        [key: string]: any
    }>({
        name: "",
        description: "",
        image: ""
    });
    const [validate, setValidate] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [toast, setToast] = useState({
        msg: "",
        show: false
    });
    const history = useHistory();

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setValidate(true)
        
        if (!input.name || !input.image || !file) return 

        const imageDesc : NewImageText = {
            name: input.name,
            description: input.description
        }
        
        createImage(imageDesc, file)
        .then( res => {
            setInput({
                name: "",
                description: "",
                image: ""
            });
            setFile(null);
            setToast({show : true, msg : "Image Created!"});
        })
        .catch( e => setToast({show : true, msg : "Upload failed, please try again!"}))
    }

    const hideToast = () => {
        setToast({ msg : "", show: false})
        history.push("/explore");
    }

    return (
        <Container className="d-flex flex-column justify-content-center align-items-center h-100 w-75 retina-text-dark">
            <h3 >Upload a Photo</h3>
            <Form noValidate onSubmit={handleSubmit} validated={validate} className="w-50">
                <Form.Group className="my-2">
                    <Form.Label>Pick a Name for your Image</Form.Label>
                    <Form.Control required onChange={handleChange} value={input.name} name="name" type="text" placeholder="Name"/>
                    <Form.Control.Feedback type="invalid">Please Pick a Name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="my-2">
                    <Form.Label>Enter a Nice Description for your Image</Form.Label>
                    <Form.Control onChange={handleChange} value={input.description} name="description" as="textarea" type="text" placeholder="Description" style={{height: "10em"}}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Upload your Image</Form.Label>
                    {/* <Form.Control required onChange={handleChange} value={input.image} name="image" type="file"/> */}
                    <input className="form-control" 
                        type="file" name="image" required onChange={handleChange} value={input.image} accept=".png, .jpg"/>
                    <Form.Control.Feedback type="invalid">Please Upload a .png or .jpg File</Form.Control.Feedback>
                </Form.Group>
                <button type="submit" className="w-100 retina-btn-dark my-2">
                    Submit
                </button>
            </Form>
            {
                toast.show ?
                <Toast onClose={hideToast} show={toast.show} className="retina-toast" delay={6000} autohide>
                    <Toast.Header closeButton={false} className="d-flex justify-content-between">
                        <strong className="retina-text-dark-blue">Retina</strong>
                        <button onClick={hideToast} className="retina-btn-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </Toast.Header>
                    <Toast.Body>
                        {toast.msg}
                    </Toast.Body>
                </Toast> : <></>
            }
        </Container>

    );
}
export default ImageUpload;
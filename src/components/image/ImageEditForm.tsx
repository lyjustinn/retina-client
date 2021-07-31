import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Image, ImageUpdateRequest } from '../../types/imageTypes';
import { deleteImage, updateImage } from '../../util/image/imageService';
import Container from 'react-bootstrap/Container';
import Toast from 'react-bootstrap/Toast';
import { useHistory } from 'react-router';
import Modal from 'react-bootstrap/Modal';

interface ImageEditFormProps {
    image : Image
}

const ImageEditForm: React.FC<ImageEditFormProps> = ({image}) => {
    const [input, setInput] = useState<{ [key:string] : string}>({
        name: image.name,
        description: image.description ?? ""
    });
    const [toast, setToast] = useState({
        msg: "",
        show: false,
        redirect : false
    });
    const [validate, setValidate] = useState(false);
    const history = useHistory();
    const [modal, setModal] = useState(false);

    const hideToast = () => {
        setToast({ msg : "", show: false, redirect:false})
        if (toast.redirect && !toast.msg.includes("delete")) {
            history.push("/image/"+image.id);
        } else if (toast.redirect) {
            history.push("/edit/user");
        }
    }

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
        
        deleteImage(image.id)
        .then( res => setToast({show : true, msg : "Image Deleted!", redirect:true}))
        .catch( e => setToast({show : true, msg : "Could not delete image", redirect:false}))
    } 

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setValidate(true)
        
        if (!input.name) return

        const updateRequest : ImageUpdateRequest = {
            name : input.name,
            description : input.description
        }

        updateImage(updateRequest, image.id)
        .then( res => {
            setToast({show : true, msg : "Image Edited!", redirect:true});
        }).catch( res => setToast({show : true, msg : "Image Edit Failed, Please Try Again!", redirect:false}));
    }

    return (
        <Container className="d-flex flex-column my-4">
            <Form noValidate validated={validate} onSubmit={handleSubmit} className="w-75 align-self-center">
                <h3 className="retina-text-title my-2">Editing: {image.name}</h3>
                <Form.Group className="my-2">
                    <Form.Label>Enter a name for your image</Form.Label>
                    <Form.Control required onChange={handleChange} value={input.name} name="name" type="text" placeholder={image.name}/>
                    <Form.Control.Feedback type="invalid">Please Pick a Name</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="my-2">
                <Form.Label>Enter a description for your image</Form.Label>
                    <Form.Control onChange={handleChange} value={input.description} name="description" 
                    type="text" as="textarea" placeholder="Image Description" style={{height: "5em"}}/>
                </Form.Group>
                <button type="submit" className="retina-btn-dark w-100 my-2">Submit</button>
                <button type="button" onClick={(e : React.MouseEvent<HTMLButtonElement>) => setModal(true)} className="btn-danger btn w-100 my-2">Delete</button>
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
            <Modal show={modal} onHide={() => setModal(false)} className="retina-text-dark">
                <Modal.Header>
                    <Modal.Title className="d-flex justify-content-between align-items-center w-100">
                        <h5 className="m-0 retina-text-dark">Delete {image.name}</h5>
                        <button className="retina-btn-icon" onClick={(e : any) => setModal(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#7C90A0" className="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="m-0 text-center">Are you sure you want to delete <strong>{image.name}</strong>?</p>
                    <p className="m-0 text-center">This action cannot be undone</p>
                    <div className="d-flex justify-content-between align-items-center pt-4">
                        <button type="button" onClick={handleDelete} className="btn-danger btn flex-grow-1 me-1">Delete</button>
                        <button type="button" onClick={(e : any) => setModal(false)} className="retina-btn-dark flex-grow-1 ms-1">No, Go Back</button>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    );
}
export default ImageEditForm;
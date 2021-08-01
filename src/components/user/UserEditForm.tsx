import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { UpdateRequest, User } from '../../types/userTypes';
import { updateUser } from '../../util/user/userService';
import Toast from 'react-bootstrap/Toast';
import { useHistory } from 'react-router';

interface UserEditFormProps {
    user : User
}

const UserEditForm: React.FC<UserEditFormProps> = ({user}) => {
    const [input, setInput] = useState<{ [key: string] : string}>({
        firstName: user.firstName,
        lastName: user.lastName,
        bio: user.bio ?? ""
    });
    const [validate, setValidate] = useState(false);
    const [toast, setToast] = useState({show : false, msg : "", redirect: false});
    const history = useHistory();
    
    const handleChange = ( e : React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;

        setInput(prev => {
            let copy = {...prev};
            copy[name] = value;
            return copy; 
        })
    }

    const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setValidate(true)

        const updateRequest : UpdateRequest = {
            firstName : input.firstName,
            lastName : input.lastName,
            bio : input.bio,
            password : ""
        }

        updateUser(+user.id, updateRequest)
        .then(res => setToast({show : true, msg : "Profile details updated! Redirecting to your profile!", redirect: true}))
        .catch(e => setToast({show : true, msg : "Edit failed, please try again!", redirect: false}))
    }

    const hideToast = () => {
        setToast({ msg : "", show: false, redirect: false});
        if (toast.redirect) history.push("/user/"+user.id);
    }

    return (
        <div className="retina-text-dark w-100">
            <h3 className="my-2 retina-text-title">Edit user profile: {user.name}</h3>
            <Form noValidate onSubmit={handleSubmit} validated={validate} className="w-100 d-flex flex-wrap">
                <div className="w-50 me-2">
                    <Form.Group className="mt-2 w-100">
                        <Form.Label className="retina-text-title">Enter a new first name</Form.Label>
                        <Form.Control required value={input.firstName} onChange={handleChange} name="firstName" type="text" placeholder={user.firstName}/>
                    </Form.Group>
                    <Form.Group className="mt-2 w-100">
                        <Form.Label className="retina-text-title">Enter a new last name</Form.Label>
                        <Form.Control required value={input.lastName} onChange={handleChange} name="lastName" type="text" placeholder={user.lastName}/>
                    </Form.Group>
                    <button className="retina-btn-dark w-100 mt-2">Save</button>
                </div>
                <Form.Group className="my-2 flex-grow-1 pb-4">
                    <Form.Label className="retina-text-title">Tell us about yourself</Form.Label>
                    <Form.Control as="textarea" style={{height: "100%"}} value={input.bio} onChange={handleChange} name="bio" type="bio" placeholder={user.bio ? user.bio : "Write a bio!"}/>
                </Form.Group>
                
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
        </div>
    );
}
export default UserEditForm;
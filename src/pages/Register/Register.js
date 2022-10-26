import React, { useState } from 'react';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState(false)
    const { createUser, updateUserProfile } = useContext(AuthContext);
    // when click checkButton then it will be visible
    const checkButtonHandler = e => {
        setAccepted(e.target.checked)
    }
    // createUser
    const createUserHandler = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset('')
                updateUserProfileHandler(name, photoURL);

            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const updateUserProfileHandler = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <Card className='container text-center mb-4 p-3 box shadow' style={{ width: '18rem' }}>
            <Form onSubmit={createUserHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="photoURL" name='photoURL' placeholder="Enter Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={checkButtonHandler} type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>

                <p className='py-3'>Already have an account? <Link to={'/login'}>Sing in</Link></p>
                <p className='text-danger'>{error}</p>
            </Form>
        </Card>
    );
};

export default Register;
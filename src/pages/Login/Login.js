import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const Login = () => {
    const { singInGoogle, singInGithub } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    // when click checkButton then it will be visible
    const checkButtonHandler = e => {
        setAccepted(e.target.checked)
    }
    // login by google
    const singInGoogleHandler = () => {
        singInGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error));
    }
    // login by github
    const singInGithubHandler = () => {
        singInGithub()
            .then(result => {
                const user = result.user;
            })
            .catch(error => console.error(error));
    }
    return (
        <Card className='container text-center mt-2 mb-4 p-3 box shadow' style={{ width: '18rem' }}>
            <Form >
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
                <p>Don't have an account? <Link to={'/register'}>Sign up</Link></p>
                <Button variant="warning" type="submit" disabled={!accepted}>
                    Login
                </Button>
            </Form>
            <Button onClick={singInGoogleHandler} className='my-3' variant="success"><FaGoogle className='me-2'></FaGoogle> Google</Button>
            <Button onClick={singInGithubHandler} variant="dark"><FaGithub className='me-2'></FaGithub> Github</Button>
        </Card>
    );
};

export default Login;
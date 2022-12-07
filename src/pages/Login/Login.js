import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
const Login = () => {
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState(false)
    const [userEmail, setUserEmail] = useState('');
    const { singInGoogle, singInGithub, userSingIn, setLoading, resetPassword } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

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
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error));
    }
    // login by github
    const singInGithubHandler = () => {
        singInGithub()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error));
    }

    // login by email and password
    const loginByEmailPasswordHandler = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        userSingIn(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                setError('')
                form.reset('');
                console.log(user);

            })
            .catch(error => {
                console.error(error)
                setError(error.message)

            })
            .finally(setLoading(true))
    }
    const handleEmailBlur = e => {
        const email = e.target.value;
        setUserEmail(email);
    }

    const resetPasswordHandler = () => {
        if (!userEmail) {
            toast('Please enter your email address.');
        }
        resetPassword(userEmail)
            .then(() => {
                toast('password reset and email sent. Please check your email ')
            })
            .catch(error => console.error(error));
    }
    return (
        <Card className='container text-center mt-2 mb-4 p-3 box shadow' style={{ width: '18rem' }}>
            <Form onSubmit={loginByEmailPasswordHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={checkButtonHandler} type="checkbox" label="Check me out" />
                </Form.Group>
                <p>Forget password? <Link onClick={resetPasswordHandler}><small>Reset Password</small></Link></p>
                <p>Don't have an account? <Link to={'/register'}>Sign up</Link></p>
                <p className='text-danger'></p>{error}
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
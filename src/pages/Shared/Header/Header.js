import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import AnimatedText from 'react-animated-text-content';
import { AuthContext } from '../../../Context/AuthProvider';
const Header = () => {
    const [mode, setMode] = useState('dark');
    const { user, signUp } = useContext(AuthContext);

    const toggleMode = () => {
        if (mode === 'dark') {
            setMode('secondary');
        }
        else {
            setMode('dark');
        }
    }


    const signUpHandler = () => {
        signUp()
            .then(() => { })
            .catch(error => console.error())


    }

    return (
        <Navbar className={`shadow-lg  p-3 mb-5 expand-lg navbar-${mode} bg-${mode}`}>
            <Container>
                <Navbar>
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsKn2GVCHU9EkFJz2xjNhgG98XjlnAZf-GQ&usqp=CAU"
                        style={{ height: '50px' }}
                        roundedCircle
                    >
                    </Image>
                </Navbar>
                <Navbar className='text-info fs-3 ms-4 pe-3'>
                    <AnimatedText
                        type="words" // animate words or chars
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={0.8}
                        tag="p"
                        className="animated-paragraph"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        Keystone Cse Courses
                    </AnimatedText>
                </Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link
                            className='text-decoration-none text-light px-4 fs-4 navbar-link-active' to={'/'}>Courses</Link>
                        <Link className='text-decoration-none text-light px-3 fs-4' to={'/faq'}>FAQ</Link>
                    </Nav>
                    <Nav className='text-light'>
                        <Nav>Dark</Nav>
                        <Form className='ms-3' onClick={toggleMode}>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                            />
                        </Form>
                        <Nav className='text-info'>Light</Nav>
                    </Nav>
                    <Nav>
                        <Link className='text-decoration-none text-light px-3 fs-4' to={'/blog'}>Blog</Link>
                    </Nav>

                    <Nav>
                        {
                            user?.uid ?
                                <>
                                    <Link className='text-decoration-none text-light px-3 fs-4' to={'/login'} eventKey={2}>
                                        <Button onClick={signUpHandler} variant="warning">Sign Up </Button>
                                    </Link>
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip id="button-tooltip-2">{user?.displayName}</Tooltip>}
                                    >
                                        {({ ref, ...triggerHandler }) => (

                                            <Image
                                                variant="light"
                                                {...triggerHandler}
                                                className="d-inline-flex align-items-center"
                                                ref={ref}

                                                src={user?.photoURL}
                                                style={{ height: '50px' }}
                                                roundedCircle
                                            ></Image>
                                        )}
                                    </OverlayTrigger>

                                </>
                                : <Link className='text-decoration-none text-light px-3 fs-4' to={'/login'} eventKey={2}>
                                    <Button variant="warning">Login </Button>
                                </Link>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Navbar className='shadow p-3 mb-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar>
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsKn2GVCHU9EkFJz2xjNhgG98XjlnAZf-GQ&usqp=CAU"
                        style={{ height: '60px' }}
                        roundedCircle
                    >

                    </Image>
                </Navbar>
                <Navbar className='text-info fs-3 ms-4 pe-3'>Keystone Cse Courses</Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='text-decoration-none text-light px-4 fs-4' to={'/courses'}>Courses</Link>
                        <Link className='text-decoration-none text-light px-3 fs-4' to={'/faq'}>FAQ</Link>
                    </Nav>
                    <Nav>
                        <Link className='text-decoration-none text-light px-3 fs-4' to={'/blog'}>Blog</Link>
                        <Link className='text-decoration-none text-light px-3 fs-4' to={'/login'} eventKey={2}>
                            <Button variant="warning">Login </Button>
                        </Link>
                    </Nav>
                    {
                        user.name
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
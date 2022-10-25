import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Courses = () => {
    return (
        <Container className='my-4'>
            <Row>
                <Col xs={8}>
                    <h1>this is courses components</h1>
                </Col>
                <Col xs={4}>
                    <h1>category</h1>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;
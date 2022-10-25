import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import NameLink from './NameLink';
const Courses = () => {
    const courses = useLoaderData();
    console.log(courses)
    return (
        <Container className='my-4'>
            <Row>
                <Col xs={8}>
                    <Row xs={1} md={2} className="g-4">
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <>
                                {
                                    courses.map(course => <Course key={course.id} course={course}></Course>)
                                }
                            </>
                        ))}
                    </Row>
                </Col>
                <Col xs={4}>
                    <Row xs={1} md={1} className="g-4">
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <>
                                {
                                    courses.map(name => <NameLink key={name.id} name={name}></NameLink>)
                                }
                            </>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;
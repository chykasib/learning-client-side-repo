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
                <Col lg={8} sm={12}>
                    <Row md={2} className="g-4">
                        {Array.from({ length: 1 }).map((_, idx) => (
                            <>
                                {
                                    courses.map(course => <Course key={course.id} course={course}></Course>)
                                }
                            </>
                        ))}
                    </Row>
                </Col>
                <Col lg={4} sm={12}>
                    <Row md={1} className="g-4">
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
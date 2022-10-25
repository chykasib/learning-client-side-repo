import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = ({ course }) => {
    const { id, author, img, price, rating, tittle } = course;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{tittle}</Card.Title>
                        <Card.Text>
                            <p>Created by : {author}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;
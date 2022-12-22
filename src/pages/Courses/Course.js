import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
const Course = ({ course }) => {
    const { author, img, price, rating, tittle } = course;
    return (
        <div>
            <Col >
                <Card>
                    <Card.Img variant="top" src={img} style={{ height: '200px' }} />
                    <Card.Body>
                        <Card.Title>{tittle}</Card.Title>
                        <Card.Text>
                            <p><b>Created by :</b> {author}</p>
                        </Card.Text>
                        <Card.Text className='d-flex justify-content-around align-items-center'>
                            <p className='fs-5'><b>{rating}</b> <FaStar className='text-warning ms-2'></FaStar><FaStar className='text-warning'></FaStar><FaStar className='text-warning'></FaStar><FaStar className='text-warning'></FaStar><FaStarHalfAlt className='text-warning'></FaStarHalfAlt>
                            </p>
                            <p className='fs-5'><b>$ {price}</b></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;
import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaStar, FaStarHalfAlt, FaVideo } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
const CoursesDetails = () => {
    const details = useLoaderData();
    const { Course_overview, description, hour, rating, img, tittle } = details;
    return (
        <Container className='my-5'>
            <Card className="text-center">
                <Card.Header className='bg-dark py-3 text-light'><h1>{tittle}</h1></Card.Header>
                <Card.Body>
                    <Card.Img src={img} style={{ height: 'auto' }} />
                    <Card.Text>
                        <h2 className='my-3'><b><u>Course overview</u></b> </h2>
                        <>

                            {
                                Course_overview.map(co =>


                                    <li>{co}</li>



                                )
                            }

                        </>
                    </Card.Text>
                    <Card.Text>
                        <h2 className='my-3'><b><u>Description</u></b> </h2>
                        <p>{description}</p>

                    </Card.Text>
                    <Card.Text className='d-flex justify-content-around align-items-center'>
                        <p className='fs-5'><b>{rating}</b> <FaStar className='text-warning ms-2'></FaStar><FaStar className='text-warning'></FaStar><FaStar className='text-warning'></FaStar><FaStar className='text-warning'></FaStar><FaStarHalfAlt className='text-warning'></FaStarHalfAlt>
                        </p>
                        <p className='fs-5'><b>{hour} Hours</b> <FaVideo></FaVideo></p>
                    </Card.Text>
                    <Button variant="primary">Get Premium Access</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CoursesDetails;
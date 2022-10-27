import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NameLink = ({ name }) => {
    const { id, tittle } = name;
    return (
        <div>
            <Col>
                <Card className='bg-dark'>
                    <Card.Body>
                        <Link className='text-light' to={`/courses/${id}`}><Card.Title><p className=' text-center py-2 px-4'>{tittle}</p></Card.Title></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default NameLink;
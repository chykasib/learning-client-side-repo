import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NameLink = ({ name }) => {
    const { id, tittle } = name;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Link to={`/courses/${id}`}><Card.Title>{tittle}</Card.Title></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default NameLink;
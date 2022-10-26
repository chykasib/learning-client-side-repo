import React from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
const CheckOut = () => {
    const specialData = useLoaderData();
    const { tittle, price } = specialData;
    const surprise = () => toast("Thank you for your Purchase!");
    console.log(specialData);
    return (

        <Card className='container text-center mt-2 mb-4 p-3 box shadow' style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Title className='text-primary'>{tittle}</Card.Title>
                <Card.Subtitle className="my-3"><p><b>Price: ${price}</b></p></Card.Subtitle>
                <Card.Text>
                    <Button onClick={surprise} variant="warning">Confirm Purchase</Button>
                    <ToastContainer />
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default CheckOut;
import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
const Blog = () => {
    return (
        <Container className='mb-5'>
            <h1 className='mb-5'><u>Some Questions And Answers</u></h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4><b className='pe-3'>Question 1:</b>  What is cors?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTPheaders to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin.A web application makes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, and port) than its own origin.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4><b className='pe-3'>Question 2:</b>Why are using firebase?</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4><b className='pe-3'>Question 3:</b> What others options do you have to implement authentication?</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h4><b className='pe-3'>Question 4:</b>  How does the private route work?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>
                            The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.

                            If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h4><b className='pe-3'>Question 5:</b>  What is node?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>
                            A node is a point of intersection/connection within a data communication network. In an environment where all devices are accessible through the network, these devices are all considered nodes. The individual definition of each node depends on the type of network it refers to.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><h4><b className='pe-3'>Question 6:</b>  How does node work?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blog;
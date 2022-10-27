import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
const Faq = () => {
    return (
        <Container className='mb-5'>
            <h1 className='mb-5'><u>Online Courses FAQ</u></h1>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>Q. What is online learning like?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>For those who have never encountered online learning, the biggest question is often what it is actually like. The caveat, as you know, is that online learning comes in several forms. Therefore, this is your chance to explain that to people. Point out that there are different types of online courses and programs, and that they’ll have to decide which is best for them. Then, explain the types of courses you offer and how your online programs work to give them all the information they need. This not only gives them information, but it increases their trust because you’re being transparent and giving them straightforward answers. </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>Q. Can I learn at my own pace?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>This is another common question that people have about online courses. There are usually self-paced programs and traditional classroom or meeting-style programs available. Today’s world is full of busy people that want to better themselves, so the self-paced programs are popular. Whether or not you provide this option, be sure to answer this question for people and explain the pros and cons of each type of learning. As a bonus, you can even invite them to contact you for more information or to discuss what their options are. </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h4>Q. Are you accredited or licensed by educational organizations?</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>There isn’t always a need for licensing or accreditation for online courses. However, some programs do require it. Either way, people will usually ask what type of training or background you have, as well as any licensing that’s available if that’s relevant. Make sure that you answer this question by telling them if you do hold any licenses or accreditation, as well as by explaining whether or not those are needed, and why. It gives them the confidence that you have the right experience and boosts your credibility because you’re offering additional information for the sake of education alone. </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header><h4>Q. Does online learning really work?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>
                            There’s always a skeptic, and when it comes to online learning, there are often several of them. Everyone wants to know if online courses “really work”—and that’s a hard question to answer because there are several factors to consider. On a general basis, yes, online learning can be effective. However, that depends on whether the courses are set up properly, the provider is educated and experienced, and if the person taking the courses does well in a virtual learning environment. You should be able to explain these things to people so that they know what they’re getting into. Then, you can invite them to contact you to discuss whether it would be right for them.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header><h4>Q. What types of assignments do you give?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>
                            Like knowing the format of online learning, people often want to know the type of work they’ll be doing when they take online courses. Be sure to provide a glimpse of what you offer here and link to previous projects or assignments if you can. You can also link to course or program pages. As long as you explain to people how the courses are taught and what they can expect in terms of coursework, you’ll be helping them make a better decision about their educational needs.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header><h4>Q.  What are the requirements to take the courses or sign up with your website?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>
                            People will want to know how to get started. You can link them to the pages on your website that help them through that process, but you’ll also want to take the time to explain it to them here. If you have certain enrollment windows, for example, list those. If payment or deposits are required, explain that, as well. Make sure that people know exactly what they need to do to take online courses from you, no matter what those courses might be.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header><h4>Q.  How long does each course take?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className='p-3 text-start'>
                            Some online courses are just a few hours long, while others last a few months. Depending on the type of online learning that you offer, your courses may have their own variable lengths. Explain to people the types of courses that you have available and what the time frame is for each one. If you offer self-paced learning, this is another place to reiterate that and reassure people that you can help them learn on their own time.

                            It could also be helpful to link to your course catalog or course pages here so that people can see the exact specifications of the course(s) they are considering taking from your website.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Faq;
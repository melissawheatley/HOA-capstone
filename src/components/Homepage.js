import React, { Component } from 'react';
import './Homepage.css';
import Footer from './Footer';
import { Jumbotron, Container, Row, Col } from 'reactstrap';


export default class Homepage extends Component{


    render(){
        return(
            <div>
            <Jumbotron fluid>
                <Container fluid className="heroText">
                    <h1>Lenox Village Homeowners Association</h1>
                    <p className="lead">We love our vibrant community in south Nashville!</p>
                </Container>
            </Jumbotron>
            <img src="./../img/Lenox-by-Rob-Harris.jpg" alt="Lenox Village entrance" className="heroBG"/>
                <Container fluid>
                    <Row>
                        <Col sm="12" md={{ size: 7}} className="busSpotlight p-4"><h2>Business Spotlight</h2><p>(ad opportunity)</p></Col>
                        <Col sm="12" md={{ size: 4}} className="p-4"><h2>Upcoming Events</h2><p>Join us for our next movie on the lawn! Bring a blanket and dinner, or visit the XYZ food truck!</p></Col>
                    </Row>
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }} className="registerBanner"><h4>Homeowners Hub benefits:</h4><p>Putting Content here to show all the great benefits of signing up online for this community. There may be an opportunity for me to put a login here, but I want to start with it on the button in the nav.</p></Col>
                    </Row>
                    <Row>
                        <Col xs="6" md={{ size: 4 }} className="mt-4"><h3>Col 1</h3><p>Pony social pigeon, puppy pony surprise puppy delight puppy unicorn. Social pegasus kittens puppy surprise delight kittens social app. Puppy surprise pony surprise pegasus pigeon rainbows pegasus pop, unicorn pop pegasus pony. Unicorn rainbows pop pegasus wereunicorn kittens app app.</p></Col>
                        <Col xs="6" md={{ size: 4 }} className="mt-4"><h3>Col 2</h3><p>Pigeon rainbows pegasus pop pony pigeon wereunicorn app puppy, app social pony kittens.</p><p>Puppy puppy pony social social unicorn puppy kittens unicorn.</p></Col>
                        <Col sm="12" md={{ size: 4 }} className="mt-4"><h3>Col 3</h3><p>Pop were unicorn pegasus pony pegasus pegasus pony pigeon surprise. App pony puppy pony pony pegasus social. Rainbows social app delight rainbows pegasus puppy, unicorn kittens kittens wereunicorn social.</p></Col>
                    </Row>
                </Container>
                <Row>
                    <Col sm="12" className="residentQuote"><em>Homeowner quote about how great it is to live in Lenox Village and be a part of such a great community. </em>-Zack L.</Col>
                </Row>
                <Footer />
            </div>
        );
    };
}
    
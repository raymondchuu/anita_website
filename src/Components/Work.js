import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {  BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../Css/Work.css';
import Header from './Header.js';

import PastelBank from '../Media/Work/PastelBank.png';
import CaseStudy from '../Media/Work/CaseStudy.png';
import PizzaNova from '../Media/Work/PizzaNova.png';
import hoverPastelBank from '../Media/Work/hoverPastel.png';
import hoverCaseStudy from '../Media/Work/hoverCaseStudy.png';

class Work extends React.Component {
    state = {
        img1: PastelBank,
        img2: CaseStudy,
    }

    render() {
        return (
            <div id="top">
            <Header />
            <div class="container">
                <Container className="workcontainer">
                    <Row>
                    <Col>
                            <Link to="/pastelbank" target="_blank">
                                <img src={this.state.img1} width="100%" height="100%"
                                    onMouseEnter = {() => {
                                        this.setState({
                                            img1: hoverPastelBank
                                        })
                                    }}
                                    onMouseOut={() => {
                                        this.setState({
                                            img1: PastelBank
                                        })
                                    }}
                                
                                />
                            </Link>
                            <br />
                            <br/>
                        </Col>
                        <Col>
                            <a href="https://medium.com/@anitango/making-saving-a-social-activity-f4c990ebb1c8" class="float-center" target="_blank">
                                <img src={this.state.img2} width="100%" height="100%"
                                    onMouseEnter = {() => {
                                        this.setState({
                                            img2: hoverCaseStudy
                                        })
                                    }}
                                    onMouseOut={() => {
                                        this.setState({
                                            img2: CaseStudy
                                        })
                                    }}
                                />
                            </a>
                            <br />
                            <br/>
                        </Col>
                    </Row>
                    <br/>
                </Container>
            </div>
            </div>
        )
    }
}

export default Work;


{/* <Row class="justify-content-md-center">
<Col id="column1">
    <Link to="/pastelbank" target="_blank">
        <img src={PastelBank} width="100%"/>
    </Link>
    <br />
    <br/>
</Col>

<Col>
    <Link to="pizzanova" target="_blank">
        <img src={PizzaNova} width="100%"/>
    </Link>
    <br />
    <br/>
</Col>
</Row> */}

{/* <Row class="justify-content-md-center">
<Col id="column1">
    <Link to="/pastelbank" target="_blank">
        <img src={PastelBank} width="100%"/>
    </Link>
    <br />
    <br/>
</Col>

<Col>
    <Link to="pizzanova" target="_blank">
        <img src={PizzaNova} width="100%"/>
    </Link>
    <br />
    <br/>
</Col>
</Row> */}
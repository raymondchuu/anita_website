import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {  BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../Css/Work.css';

import PastelBank from '../Media/Work/PastelBank.png';
import CaseStudy from '../Media/Work/CaseStudy.png';
import PizzaNova from '../Media/Work/PizzaNova.png';

class Work extends React.Component {
    render() {
        return (
            <div class="container">
                <Container className="workcontainer">
                    <Row class="justify-content-md-center">
                        <Col>
                            <Link to="/pastelbank" target="_blank">
                                <img src={PastelBank} width="510px"/>
                            </Link>
                            <br />
                            <br/>
                            <h6>PastelBank Design Sprint</h6>
                        </Col>

                        <Col>
                            <Link to="pizzanova" target="_blank">
                                <img src={PizzaNova} width="510px"/>
                            </Link>
                            <br />
                            <br/>
                            <h6>Pizza Nova</h6>
                        </Col>
                    </Row>

                    <br />
                    <br />


                    <Row>
                        <Col>
                            <a class="float-center">
                                <img src={CaseStudy} width="1020px" fluid/>
                            </a>
                            <br />
                            <br/>
                            <h6>Goalie: UX Case Study</h6>
                        </Col>
                    </Row>
                    
                </Container>
            </div>


        )
    }
}

export default Work;

{/* <div class="row">
<div class="col-sm">
    <img src={image1} />
    <br />
    <h6>PastelBank Design Sprint</h6>
</div>

<div class="col-sm">
    <img src={image1} />
    <br />
    <h6>Pizza Nova</h6>
</div>
</div>

<br />
<br />
<br />

<div class="row">
<div class="col-sm">
    <img src={image1} />
    <br />
    <h6>Fincity</h6>                    
</div>

<div class="col-sm">
    <img src={image1} />
    <br />
    <h6>UI Designs</h6>                   
</div>
</div> */}
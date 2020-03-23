import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image1 from '../Media/PastelBank/pastelbank_frontpage.png';
import image2 from '../Media/PastelBank/research_image.png';
import image3 from '../Media/PastelBank/research_percentage.png';
import image4 from '../Media/PastelBank/research_findings_image.png';
import image5 from '../Media/PastelBank/image5.png';
import image7 from '../Media/PastelBank/image7.png';
import image8 from '../Media/PastelBank/image8.png';
import combined from '../Media/PastelBank/combinedPicture.png';
import onboarding from '../Media/PastelBank/onboarding.png';
import goals from '../Media/PastelBank/goals.png';
import smartSaving from '../Media/PastelBank/smartSaving.png';
import blueBlock from '../Media/PastelBank/blueBlock.png';
import caseStudy from '../Media/Work/CaseStudy.png';
import hoverCaseStudy from '../Media/Work/hoverCaseStudy.png';
import ScrollTop from './ScrollTop.js';
import '../Css/PastelBank.css';

class PastelBank extends React.Component {
    state = {
        img: caseStudy,
    }

    render() {
        return (

            <div className="pastelcontainer">
            <hr/>
            <Container>
                <Row>
                    <Col>
                        <p id="title">PastelBank Design Sprint</p>

                    </Col>
                    <Col>
                    <br/>
                        <p id="comment">Partnered with Scotiabank</p>

                    </Col>
                </Row>
                <Row>
                    <img src={image1}/>
                </Row>
                <br />
                <Row>
                    <Col xs={12} md={8}>
                        <p id="subHeader1">PROBLEM SPACE</p>
                        
                        <p>Pastel Bank‘s business model is to demystify the complexity of saving, spending and investing money. Customers have wanted a native mobile app that adheres to their target customer types.</p>
                        <p id="subHeader2">Design Sprint</p>
                        <p>This was a BrainStation design sprint partnered with ScotiaBank and was completed within a week.</p>
                    
                    </Col>
                    <Col xs={6} md={4} id="verticleLine">
                        <h4><b>My Role</b></h4>
                        <ul>
                            <li>UX/UI Designer</li>
                        </ul>
                        <br />
                        <h4><b>Methodology</b></h4>
                        <ul>
                            <li>Research</li>
                            <li>User Interviews</li>
                            <li>Sketching</li>
                            <li>Prototyping</li>
                            <li>Moderated User Testing</li>
                        </ul>
                        <Button variant="outline-primary" target="_blank" href="https://www.figma.com/proto/Bgx5srdBjXVDjJhBDw4c02/Sprint-2?node-id=20%3A51&viewport=391%2C527%2C0.14990286529064178&scaling=scale-down&fbclid=IwAR3XRMHhiowuhJUVgMQ-jTI3ujU-CHP-_WNqAoXkRqa7qLiLVi-kfGMWo1c">Prototype</Button>
                    </Col>
                </Row>

                <p id="subHeader2">The Sprint Team</p>
                <p>The team was a randomized group of students who got to know each other and collaborated to complete the sprint. The team included:</p>
                <ul>
                    <li>Joseph Baroud, Writer (Decider)</li>
                    <li>Jiayu Duan, Stitcher & Asset Collector</li>
                    <li>Ruby Mesa, Maker (Low to High-fi Wireframes)</li>
                    <li>Anita Ngo, Maker (Low to Hi-fi Wireframes)</li>
                    <li>Tazmia Shefa, Maker (Hi-fi Wireframes, UI design)</li>
                </ul>
            
                <p>While we had different responsibilities with creating the prototype of the app, we worked collectively with the larger Sprint process, including researching the problem, conducting user interviews, ideating on the solution, conducting user tests and providing feedback at every discussion point.</p>
                <p id="subHeader1">RESEARCH</p>
                <hr />

                <Row>
                    <Col>
                        <p>We decided to focus on young adults as our target customer type and began discussing about the goals and needs of young adults. We concluded that young adults are finally beginning their career and will have loans to pay yet want to invest in long term goals such as condominiums or houses. All in all, they have a lot on their plate and we can provide an easy solution!</p>
                        <br/>
                        <br/>
                    </Col>
                    <Col>
                        <img src={image2} />
                    </Col>
                </Row>
                <p id="subHeader2">Research Findings</p>
                <p>With these ideas in mind, we did research independently about the struggles young adults face upon graduation. These were some of our findings:</p>
                <br/>
                <img src={blueBlock} />
                <img src={image3} id="findings"/>
                <br />
                <br />
                <p>Through synthesizing our research findings we created an experience map.</p>

                <img src={image4} className="research" />
                
              
                <div className="goal-header">
                <br />
                    <p id="subHeader2">Ultimate Goal</p>
                </div>
            
                <Row>
                    <Col xs={1}>
                        <img src={blueBlock} />
                        <br/>
                        <br/>
                    </Col>
                    <Col>
                        <p>Create a platform that simultaneously assists young adults with their debt while promoting savings and investments, so that young adults can enjoy their new income without feeling restrained.</p>
                    </Col>
                </Row>

                <p id="subHeader2">User Interviews</p>
                <p>With the goal in mind, we created a set of questions to ask our users to get a better understanding of their frustrations. We each conducted interviews, wrote our insights on sticky notes and found that young adults:</p>
                <ul className="list">
                    <li>did not start investing because they want to pay off their debt first.</li>
                    <li>prioritize paying off student debt and put all extra expenses towards that.</li>
                    <li>still like to splurge on other purchases.</li>
                    <li>feel that financial advisors are not helpful and prefer to be autonomous with their finances.</li>
                </ul>
                <Row>
                    <Col>
                        <img src={image5} />
                    </Col>
                
                    <Col>
                        <img src={image7} />
                    </Col>
                </Row>
                <br />
                <p id="subHeader2">How Might We</p>
                <p>We each created various ‘how might we’ statements with these user findings and did dot voting to see which statement resonates with us the most. We decided on:</p>
                <Row>
                    <Col xs={1}>
                        <img src={blueBlock} />
                    </Col>
                    <Col>
                        <p>How might we assist young professionals to balance saving and spending with debt repayment so that they can enjoy their income?</p>
                    </Col>
                </Row>
                <br/>
                <p id="subHeader1">IDEATION</p>
                <hr />

                <p id="subHeader2">Sketches</p>
                <Row>
                    <Col>
                        <p>We individually did sketches and dot voted on designs we liked.</p>
                    </Col>
                    <Col>
                        <img src={image8} />
                    </Col>
                </Row>
                <p id="subHeader2">Marketing Desktop Site</p>
                <p>We created a marketing ad on the Pastel Bank website to outline the key features of their new app.</p>
                <div>
                    <img src={combined} />
                </div>
                <br/>

                <p id="subHeader2">Prototype</p>
                <p>While adhereing to project constraints, including a specific colour palette, we created this design.</p>
                <br/>
                <p>Onboarding</p>
                <img src={onboarding} />
                <br/>
                <br/>
                <br/>
                <p>Goals</p>
                <img src={goals} />
                <br/>
                <br/>
                <br/>
                <p>SmartSavings</p>
                <img src={smartSaving} />
                <br/>
                <br/>
                <br/>

                <p id="subHeader1">NEXT STEPS</p>
                <hr/>
                <p id="subHeader2">Pastel Bank</p>
                <p>To further develop this app, we would create the functionality of transferring funds from one savings goal to another and also suggest and manage investment opportunities.</p>
                
                
                <p id="subHeader1">CONCLUSION & LEARNING</p>
                <p>It was a great opportunity to collaborate with Scotiabank for our second sprint at BrainStation. We were able to apply everything we learned the past 6 weeks in a real-life example. This brings our learning to life as it is reflective of what we will be doing when we enter the UX field. I faced a couple challenges during this sprint and I’m sure it is the beginning of the many challenges I’ll face. The major problem was having so many ideas but not knowing where to begin. I have a greater appreciation for sticky notes and dot voting as it was helpful in deciphering the ambiguity.</p>
                <br/>
                <ScrollTop scrollStepInPx="50" delayInMs="5" />
                <br/>
                <hr/>
                <div id="otherWork">
                <p>View Other Work</p>
                <a href="https://medium.com/@anitango/making-saving-a-social-activity-f4c990ebb1c8"><img src={this.state.img} 
                    onMouseEnter = {() => {
                        this.setState({
                            img: hoverCaseStudy
                        })
                    }}

                    onMouseOut = {() => {
                        this.setState({
                            img: caseStudy
                        })
                    }}
                /></a>
                </div>

            </Container>
            </div>
            
        );
    }
}

export default PastelBank;
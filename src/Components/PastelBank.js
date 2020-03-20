import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import image1 from '../Media/PastelBank/pastelbank_frontpage.png';
import image2 from '../Media/PastelBank/research_image.png';
import image3 from '../Media/PastelBank/research_percentage.png';
import image4 from '../Media/PastelBank/research_findings_image.png';
import image5 from '../Media/PastelBank/image5.png';
import image6 from '../Media/PastelBank/image6.png';
import image7 from '../Media/PastelBank/image7.png';
import image8 from '../Media/PastelBank/image8.png';
import image9 from '../Media/PastelBank/image9.png';
import image10 from '../Media/PastelBank/image10.png';
import image11 from '../Media/PastelBank/image11.png';
import image12 from '../Media/PastelBank/image12.png';
import image13 from '../Media/PastelBank/image13.png';
import image14 from '../Media/PastelBank/image14.png';
import image15 from '../Media/PastelBank/image15.png';
import image16 from '../Media/PastelBank/image16.png';
import image17 from '../Media/PastelBank/image17.png';
import image18 from '../Media/PastelBank/image18.png';
import image19 from '../Media/PastelBank/image19.png';
import image20 from '../Media/PastelBank/image20.png';
import image21 from '../Media/PastelBank/image21.png';
import combined from '../Media/PastelBank/combinedPicture.png';
import onboarding from '../Media/PastelBank/onboarding.png';
import goals from '../Media/PastelBank/goals.png';
import smartSaving from '../Media/PastelBank/smartSaving.png';
import '../Css/PastelBank.css';

class PastelBank extends React.Component {
    render() {
        return (
            <div className="pastelcontainer">
            <Container>
                <Row>
                    <Col>
                        <h2>PastelBank Design Sprint</h2>
                        <br/>
                    </Col>
                    <Col>
                        <p class="float-right">Partnered with Scotiabank</p>

                    </Col>
                </Row>
                <Row>
                    <img src={image1}/>
                </Row>
                <br />
                <Row>
                    <Col xs={12} md={8}>
                        <h3>Problem Space</h3>
                        <p>Pastel Bank‘s business model is to demystify the complexity of saving, spending and investing money. Customers have wanted a native mobile app that adheres to their target customer types.</p>
                        <h3>Design Sprint</h3>
                        <p>This was a BrainStation design sprint partnered with ScotiaBank and was completed within a week.</p>
                        
                        <h3>The Sprint Team</h3>
                        <p>The team was a randomized group of students who got to know each other and collaborated to complete the sprint. The team included:</p>
                        <ul>
                            <li>Joseph Baroud, Writer (Decider)</li>
                            <li>Jiayu Duan, Stitcher & Asset Collector</li>
                            <li>Ruby Mesa, Maker (Low to High-fi Wireframes)</li>
                            <li>Anita Ngo, Maker (Low to Hi-fi Wireframes)</li>
                            <li>Tazmia Shefa, Maker (Hi-fi Wireframes, UI design)</li>
                        </ul>
                    </Col>
                    <Col xs={6} md={4}>
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
                        <Button variant="outline-primary">Prototype</Button>
                    </Col>
                </Row>
            
                <p>While we had different responsibilities with creating the prototype of the app, we worked collectively with the larger Sprint process, including researching the problem, conducting user interviews, ideating on the solution, conducting user tests and providing feedback at every discussion point.</p>
                <h2>RESEARCH</h2>
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
                <h4>Research Findings</h4>
                <p>With these ideas in mind, we did research independently about the struggles young adults face upon graduation. These were some of our findings:</p>
                <br/>
                <img src={image3} />
                <br />
                <br />
                <p>Through synthesizing our research findings we created an experience map.</p>

                <img src={image4} className="research" />
                
              
                <div className="goal-header">
                <br />
                    <h3>Ultimate Goal</h3>
                </div>
            
                <Row>
                    <Col xs={1} >

                    </Col>
                    <Col>
                        <p>Create a platform that simultaneously assists young adults with their debt while promoting savings and investments, so that young adults can enjoy their new income without feeling restrained.</p>
                    </Col>
                </Row>
                <h3>User Interviews</h3>
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
                <h3><b>How Might We</b></h3>
                <p>We each created various ‘how might we’ statements with these user findings and did dot voting to see which statement resonates with us the most. We decided on:</p>
                <Row>
                    <Col xs={1}></Col>
                    <Col>
                        <p>How might we assist young professionals to balance saving and spending with debt repayment so that they can enjoy their income?</p>
                    </Col>
                </Row>
                <h3>IDEATION</h3>
                <hr />

                <h3>Sketches</h3>
                <Row>
                    <Col>
                        <p>We individually did sketches and dot voted on designs we liked.</p>
                    </Col>
                    <Col>
                        <img src={image8} />
                    </Col>
                </Row>
                <h3>Marketing Desktop Site</h3>
                <p>We created a marketing ad on the Pastel Bank website to outline the key features of their new app.</p>
                <div>
                    <img src={combined} />
                </div>
                <br/>
                <h3>Prototype</h3>
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

                <h3>Next Steps</h3>
                <br/>
                <h5>Pastel Bank</h5>
                <p>To further develop this app, we would create the functionality of transferring funds from one savings goal to another and also suggest and manage investment opportunities.</p>
                
                
                <h3>Conclusion & Learning</h3>
                <p>It was a great opportunity to collaborate with Scotiabank for our second sprint at BrainStation. We were able to apply everything we learned the past 6 weeks in a real-life example. This brings our learning to life as it is reflective of what we will be doing when we enter the UX field. I faced a couple challenges during this sprint and I’m sure it is the beginning of the many challenges I’ll face. The major problem was having so many ideas but not knowing where to begin. I have a greater appreciation for sticky notes and dot voting as it was helpful in deciphering the ambiguity.</p>
                <br/>
                <hr/>
                <p>View Other Work</p>

            </Container>
            </div>
            
        );
    }
}

export default PastelBank;
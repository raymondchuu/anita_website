import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import image1 from '../Media/PizzaNova/Image1.png';
import image2 from '../Media/PizzaNova/Image2.png';
import image3 from '../Media/PizzaNova/Image3.png';
import image4 from '../Media/PizzaNova/Image4.png';


class PizzaNova extends React.Component {
    render() {
        return(
            <div className="pizzaNovacontainer">
            <Container>
      
                    <h1>Pizza Nova Heuristic Evaluation</h1>

                    <img src={image1}/>
                    <br/>
                    <br/>

                <Row>
                    <Col xs={12} md={8}>
                        <h3>Problem</h3>
                        <p>This design project allowed us to practice conducting heuristic evaluations on existing apps and propose design rework ideas. We decided to choose an app that received poor reviews in the Google Play store, Pizza Nova.</p>
                        <h3><b>Approach</b></h3>
                        <p>To start the project, we looked at the app to see what it has to offer. We established a simple task flow to follow; placing an order, and evaluated how easy it was to complete the task.</p>
                    </Col>
                    <Col xs={6} md={4}>
                        <h4><b>My Role</b></h4>
                        <ul>
                            <li>UX/UI Designer</li>
                        </ul>

                        <h4><b>Methodology</b></h4>
                        <ul>
                            <li>Heuristic Evaluation</li>
                        </ul>
                        <button class="btn btn-outline-success" type="button">Prototype</button>
                    </Col>
                </Row>
                <h3>Evaluation</h3>
                <p>Each task was given a severity rating out of 4, based on Jakob Nielsen's usability testing guidelines. These ratings took into consideration 3 main factors:</p>
                <Row>
                    <Col>
                        <ul>
                        <br/>

                            <li>Frequency</li>
                            <br/>
                            <li>Impact</li>
                            <br/>
                            <li>Persistence</li>
                        </ul>
                    </Col>
                    <Col>
                        <img src={image2} />
                    </Col>
                </Row>

                <h3>Findings</h3>
                <p>We presented our findings to the stakeholders (our instructors) and provided our suggestions on how these violations can be fixed.</p>
                <img src={image3} />
                
                <br/>
                <br/>
                <h3>Changes</h3>
                <p>We implemeted our proposed changes while staying with Pizza Nova’s current app design. </p>
                <img src={image4} />

                <br/>
                <br/>

                <h3>Next Steps</h3>
                <ul>
                    <li>Conduct another heuristic evaluation on our changes to identify more violations and propose more changes. </li>
                    <li>Update the UI to one that is influenced by UI trends today which will attract more consumers to order via the mobile app.  </li>
                </ul>

                <h3>Conclusion & Learning</h3>
                <p>By doing heuristic evaluations, we were able to identify key issues with current applications and make changes that will improve the usability of the product. This is essential to developing an app that serves its purpose in an efficient manner. Throughout this project, we wanted to change the UI of the app many times, but we had to keep in mind what the business requested and to not undermine their request. This is something that we always need to keep in mind as we develop for our partners; as much as we want to change something to our own preference, we need to adhere to what is requested and stay within those constraints. </p>

            </Container>
        </div>
        );
    }
}

export default PizzaNova;
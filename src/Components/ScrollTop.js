import React from 'react';
import { Button } from 'react-bootstrap';
import '../Css/ScrollTop.css';

class ScrollTop extends React.Component {
    constructor() {
        super();
    
        this.state = {
            intervalId: 0
        };
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollTop() {
        var intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    render() {
        return (
            <Button id="Top"variant="light" title='Back to top' onClick = {() => { this.scrollTop();}}>
                ↑ Back to top
            </Button>
        );
    }
    
}

export default ScrollTop
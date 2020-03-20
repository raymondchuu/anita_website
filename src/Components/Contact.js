import React from 'react';
import Image1 from '../Media/Contact/Image1.png';
import '../Css/Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <img src={Image1} className="image" />
                <br/>
                <center>
                    <p>Interested in knowing more about me?</p>
                    <p>Send a message to <a href="mailto:anitango25@gmail.com" target="_top">anitango25@gmail.com</a></p>
                    <br/>
                    <br/>
            
                </center>
            </div>
        )
    }
}

export default Contact;
import React from 'react';
import '../Css/Footer.css';
import emailHover from '../Media/Footer/Email.png';
import beHover from '../Media/Footer/Be.png';
import igHover from '../Media/Footer/Instagram.png';
import linkedinHover from '../Media/Footer/Linkedin.png';
import email from '../Media/Footer/blackEmail.png'
import be from '../Media/Footer/blackBe.png'
import ig from '../Media/Footer/blackInstagram.png'
import linkedin from '../Media/Footer/blackLinkedin.png'



class Footer extends React.Component {
    handleMouseOver = () => {

    }

    handleMouseLeave = () => {
    }

    render() {
        return (
            <>
            <hr />
            <div className="foot">     
                <a href="mailto:anitango25@gmail.com"><img src={email}/></a> &nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/anitango" target="_blank"><img src={linkedin} /></a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.behance.net/anitango" target="_blank"><img src={be} /></a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.instagram.com/uxanita" target="_blank" 
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseLeave}>
                    <img src={ig} />
                </a>
            </div>
            </>
        );
    }
}

export default Footer;
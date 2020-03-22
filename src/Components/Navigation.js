import React from 'react';
import Logo from '../Media/Navigation/Logo.png';
import '../Css/Navigation.css';
import emailHover from '../Media/Footer/Email.png';
import beHover from '../Media/Footer/Be.png';
import linkedinHover from '../Media/Footer/Linkedin.png';
import email from '../Media/Footer/blackEmail.png'
import be from '../Media/Footer/blackBe.png'
import linkedin from '../Media/Footer/blackLinkedin.png'

const NavItem = (props) => {
    const pageURI = window.location.pathname+window.location.search;
    const liclassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
//    const aclassName = props.disabled ? "nav-link disabled" : "nav-link";

    return (
        <li class={liclassName}>
            <a href={props.path} class="nav-link">
                {props.name}
                {(props.path === pageURI) ? (<span class="sr-only"></span>) : ''}
            </a>
        </li>
    );
}

 class Navigation extends React.Component {
    state = ({
        img1: email,
        img2: linkedin,
        img3: be,
    }) 

    render() {
        return (
            <div className="navBar">

            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="navbar-brand">
                    <img src={Logo}  alt="" class="float-left" />
                    <a class="navbar-brand" href="/" id="name">
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;<span id="name">ANITA NGO</span></p>
                    </a>
                </div>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav ml-auto">
                        <NavItem path="/" name="Work" />
                        <NavItem path="/about" name="About" />
                        <NavItem path="/contact" name="Contact" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <li><a href="mailto:anita@anitango.com"><img src={this.state.img1}  display="inline"
                                onMouseEnter = {() => {
                                    this.setState({
                                        img1: emailHover
                                    })
                                }}

                                onMouseOut = {() => {
                                    this.setState({
                                        img1: email
                                    })
                                }}
                            /></a></li>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <li><a href="https://www.linkedin.com/in/anitango" target="_blank"><img src={this.state.img2}  display="inline"
                                onMouseEnter = {() => {
                                    this.setState({
                                        img2: linkedinHover
                                    })
                                }}

                                onMouseOut = {() => {
                                    this.setState({
                                        img2: linkedin
                                    })
                                }}
                            /></a></li>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <li><a href="https://www.behance.net/anitango" target="_blank"><img src={this.state.img3} display="inline"
                                onMouseEnter = {() => {
                                    this.setState({
                                        img3: beHover
                                    })
                                }}

                                onMouseOut = {() => {
                                    this.setState({
                                        img3: be
                                    })
                                }}
                            /></a></li>

                    </ul>

                </div>

            </nav>
            </div>
            
        )
    }
}

export default Navigation;

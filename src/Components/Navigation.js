import React from 'react';
import Logo from '../Media/Navigation/Logo.png';
import '../Css/Navigation.css';

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

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="navbar-brand">
                    <img src={Logo} width="100" height="100" alt="" class="float-left" />
                    <a class="navbar-brand" href="/">
                        <h2>&nbsp;&nbsp;Anita Ngo</h2>
                        <h6>UX DESIGNER</h6>
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
                    </ul>

                </div>

            </nav>
            
        )
    }
}

export default Navigation;

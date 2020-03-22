import React from 'react';
import headerImage from '../Media/Work/CaseStudy.png';
import '../Css/Header.css';
import Logo from '../Media/Navigation/headerLogo.png';

class Header extends React.Component {
    render() {
        return (
            <div className="holder">
                <div className="head">
                <br/><br/><br/><br/><br/><br/><br/><br/>
                    <img src={Logo} />
                    <br/>
                    <br/>
                    <p id="headerName">Anita Ngo</p>
                    <p id="headerBody">UX/UI Designer <br/>Product Designer</p>

                    <br/><br/><br/><br/><br/><br/>
                </div>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Header;
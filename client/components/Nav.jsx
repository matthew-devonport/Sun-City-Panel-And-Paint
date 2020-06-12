import React from 'react';
import { HashRouter as NavLink, Link } from 'react-router-dom';


class Nav extends React.Component {

    render() {
        return (
            <div id="navBackground">
                <div className="leftNav fixed">
                    <img src="./img/logo.jpg" alt="Main Logo" className="leftLogos"></img>
                </div>
                <div className="flexBox">
                    <div className="fixed">
                     <div className="navLinks">Home</div>
                     <div className="navLinks">Services</div>
                     <div className="navLinks">About Us</div>
                    </div>
                </div>
            </div>
        )
    }
    


}
export default Nav

import React from 'react'
import { HashRouter as NavLink, Link } from 'react-router-dom';

class Footer extends React.Component {



    render() {
        return (
            <React.Fragment>
                <div id='footer'>
                    <footer>
                        <div id="footerFlex">
                        <div className="contactInfo">CONTACT INFO</div>
                        <div>OPENING HOURS</div>
                       <ul>
                       <div className="socialmedia">SOCIAL MEDIA</div>
                            <li></li>
                            <li></li>
                        </ul>
                        </div>
                        <p className="copyrightText">
                            Copyright &copy; Sun City Panel &amp; Paint. All rights reserved.<br />
                            <a href="https://github.com/matthew-devonport" target="_blank" className="matty">Website Design &amp; Build by Matthew Devonport</a>
                        </p>
                    </footer>
                </div>

            </React.Fragment>
        )
    }
}


export default Footer
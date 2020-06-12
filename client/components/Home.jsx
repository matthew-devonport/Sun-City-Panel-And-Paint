import React from 'react'

import Title from './Title'
import Nav from './Nav'
// import Footer from './Footer'

class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Nav />
                <div>
                    <Title />
                    <div id="homeBody">
                        <h1>GREETINGS FROM SUN CITY PANEL &amp; PAINT</h1>
                        <div className="bodyFlex">
                            <p className="bodyText bodyItems">
                                Here is some introduction information you can put in here<br /><br />
This is also an image you can put in this part as well on the right.<br /><br />
This will be longer in height (depending on how much information you really want here).
Although as you can see the text wraps down from the image so it all depends on what you want.
</p>
                            <img src="./img/shop.jpg" alt="Shop Pic" className="bodyItems"></img>
                        </div>
                    </div>
                    {/* <Footer /> */}
                </div>
            </React.Fragment>
        )
    }
}

export default Home
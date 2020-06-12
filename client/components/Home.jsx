import React from 'react'

// import Title from './Title'
import Nav from './Nav'
// import Footer from './Footer'

class Home extends React.Component {

    render() {
        return (
            <React.Fragment> 
                    <Nav/>
                <div>
                    {/* <Title /> */}
                    {/* <Footer /> */}
                </div>  
            </React.Fragment>
        )
    }
}

export default Home
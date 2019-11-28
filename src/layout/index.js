import React from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer' 

export default (props) => {
    return (
        <div className="site-wrap">
            <Menu/>
                {props.children}
            <Footer />
        </div>      
    );
}
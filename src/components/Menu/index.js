import React from 'react'
import ModalLogin from '../Modal/Login'

export default () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="site-logo mt-2" style={{ color: '#000' }}>Stamina<span style={{ color: '#f23a2e' }}>.</span></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav ml-auto site-menu main-menu js-clone-nav">
                            <li><a href="#home-section" className="nav-link">Home</a></li>
                            <li><a href="#trainer-section" className="nav-link">Trainners</a></li>
                            <li><a href="#contact-section" className="nav-link">Contato</a></li>
                            <li><ModalLogin /></li>                            
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
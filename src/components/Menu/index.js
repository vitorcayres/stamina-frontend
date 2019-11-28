import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <React.Fragment>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle" />
                    </div>
                </div>
                <div className="site-mobile-menu-body" />
            </div>
            <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <div className="site-logo"><Link to="/">Stamina<span>.</span> </Link></div>
                        <div className="ml-auto">
                            <nav className="site-navigation position-relative text-right" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                    <li><a href="#home-section" className="nav-link">Home</a></li>
                                    {/* <li><a href="#classes-section" class="nav-link">Classes</a></li>
                                    <li><a href="#schedule-section" class="nav-link">Schedule</a></li> */}
                                    <li><a href="#trainer-section" className="nav-link">Trainners</a></li>
                                    {/* <li><a href="#services-section" class="nav-link">Services</a></li> */}
                                    <li><a href="#contact-section" className="nav-link">Contato</a></li>
                                    <li><Link to="/dashboard" className="nav-link">Minha Conta</Link></li>
                                </ul>
                            </nav>
                            <a href="/#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3" /></a>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}
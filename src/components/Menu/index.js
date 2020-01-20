import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Link } from 'react-router-dom'

export default class Menu extends React.Component {

    signOut = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="site-logo" style={{ color: '#000' }}>Stamina<span style={{ color: '#f23a2e' }}>.</span></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample07">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/dashboard">Dashboard <span className="sr-only">(atual)</span></Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.signOut} href="/#">Sair</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
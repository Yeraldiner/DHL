import React, { Fragment } from 'react';
import logo from '../../img/logo.svg';
import './Layout.css';
import { Link } from 'react-router-dom';

export function Layout() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top barranav" id="mainNav">
                <div className="container px-4">
                    <a href="/">
                        <img src={logo} className="App-logo link-light" alt="logo" />
                    </a>
                    <a className="navbar-brand" href="/">DHL</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li><Link to="/servicios" className="nav-link">Nuestro servicio</Link></li>
                            <li><Link to="/contactanos" className="nav-link">Contáctanos</Link></li>
                        </ul>

                    </div>
                </div>
            </nav>

        </Fragment>
    )
}
import React, { Fragment } from "react";
import './Contactanos.css'
import logo from '../../img/logo.svg';
import face from '../../img/facebook-brands.svg'
import ins from '../../img/instagram-brands.svg'
import what from '../../img/whatsapp-brands.svg'

export function Contactanos() {
    return (
        <Fragment>
            <div className="card cardcontactanos">
                <img src={logo} className="card-img-top logo" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center titulocard">DHL</h5>
                    <p className="card-text textcard">Contáctanos</p>
                    <p className="card-text textcard">dhlcolombia@hotmail.com</p>
                    <p className="card-text textcard">Barranquilla 3668888</p>
                    <p className="card-text textcard">Linea Nacional 018000970970</p>
                    <div className="logosredes">
                        <a href="https://es-la.facebook.com/">
                            <img src={face} className="App-logo" alt="logo" />
                        </a>
                        <a href="https://www.instagram.com/?hl=es">
                            <img src={ins} className="App-logo" alt="logo" />
                        </a>
                        <a href="https://web.whatsapp.com/">
                            <img src={what} className="App-logo" alt="logo" />
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
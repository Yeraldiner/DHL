import React from "react";
import './Servicios.css'
import pensando  from '../../img/pensando.png'
import calendario  from '../../img/calendario.png'
import medicion  from '../../img/medicion.png'
import envio from '../../img/envio.png'

export function Servicios() {
    return (
        <div className="container-sm contenedor">
            <div id="carouselExampleCaptions" className="carousel slide carruselservicios" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={pensando} className="d-block w-100 img1" alt="logo" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="textcarusel">¿Pensando en realizar un envío?</h5>
                            <p>Podemos ayudarte</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={calendario} className="d-block w-100 img1" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="textcarusel">Agenda el día y el horario en el que podemos recoger tu paquete</h5>
                            <p>Vamos a tu casa y hacemos el trabajo por ti, recuerda progamar los envíos con 24 horas de anticipación</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={medicion} className="d-block w-100 img1" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Especifica los datos del envío</h5>
                            <p>Dinos donde recoger y donde llevar el paquete, sus dimesiones y características</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={envio} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className="textcarusel">Sigue el envío desde tu celular</h5>
                            <p>Puedes visualizar la trazabilidad de los envíos en curso</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
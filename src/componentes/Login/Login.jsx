import React from 'react';
import envio from '../../img/envio.png';
import { Link } from 'react-router-dom';
import './Login.css'

export function Login() {
  return (
    <main className="text-white main">
      <div className="container px-4 text-center">
        <h1 className="fw-bolder">Bienvenido a DHL-Colombia</h1>
        <p className="lead">Entregamos tus paquetes con el mayor cuidado y rapidez</p>
        <p className="lead">Llegamos a tu casa y hacemos el trabajo por ti</p>
        <Link to="/registro" className="btn btn-lg btn-light">Registrate y programa tus envíos</Link>
      </div>
      <div className="container px-5">
        <div className="row gx-5 align-items-center justify-content-center">
          <div className="col-lg-8 col-xl-7 col-xxl-6 cajalogin">
            <form>
              <h3 className="text-center">INGRESA</h3>
              <div className="form-group ">
                <label htmlFor="exampleInputEmail1">Usuario:</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Contraseña:</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
                <a className="form-text text-white enlacerecuperar" data-bs-toggle="modal" data-bs-target="#exampleModal">¿Olvidaste la contraseña?</a>
              </div>
              <div>
                <button type="submit" className="btn btn-primary">Entrar</button>
              </div>
            </form>
          </div>
          <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={envio} alt="..." /></div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content modalrecuperar">
            <div className="modal-header headerrecuperar">
              <h5 className="modal-title" id="exampleModalLabel">Recuperar contraseña</h5>
              <button type="button" className="btn-close closerecuperar" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bodyrecuperar">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Correo electrónico:</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
              </form>
            </div>
            <div className="modal-footer footerrecuperar">
              <button type="button" className="btn btn-primary">Recuperar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

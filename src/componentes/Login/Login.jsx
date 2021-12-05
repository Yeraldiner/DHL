import React,{useRef} from 'react';
import envio from '../../img/envio.png';
import { Link } from 'react-router-dom';
import './Login.css'
import {login, recuperar} from './LoginService.js'

export function Login() {
  const usuarioRef = useRef();
  const contraseñaRef = useRef();
  const correoRef = useRef();
  const logearse= ()=>{
    const usuario = usuarioRef.current.value;
    const contraseña = contraseñaRef.current.value;
    login(usuario,contraseña);
    usuarioRef.current.value = "";
    contraseñaRef.current.value = "";
  };

  const recuperarContraseña= ()=>{
    const correo = correoRef.current.value;
    recuperar(correo);
    correoRef.current.value ="";
  }
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
                <label>Usuario:</label>
                <input ref={usuarioRef} type="text" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Contraseña:</label>
                <input ref={contraseñaRef} type="password" className="form-control"/>
                <a className="form-text text-white enlacerecuperar" data-bs-toggle="modal" data-bs-target="#exampleModal">¿Olvidaste la contraseña?</a>
              </div>
              <div>
                <button type="button" className="btn btn-primary" onClick={logearse}>Entrar</button>
              </div>
            </form>
          </div>
          <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={envio} alt="..." /></div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content modalrecuperar">
            <div className="modal-header headerrecuperar">
              <h5 className="modal-title" id="exampleModalLabel">Recuperar contraseña</h5>
              <button type="button" className="btn-close closerecuperar" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bodyrecuperar">
              <form>
                <div className="mb-3">
                  <label className="col-form-label">Correo electrónico:</label>
                  <input ref={correoRef} type="email" className="form-control" />
                </div>
              </form>
            </div>
            <div className="modal-footer footerrecuperar">
              <button type="button" className="btn btn-primary" onClick={recuperarContraseña}>Recuperar</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

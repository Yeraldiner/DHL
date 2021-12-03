import React from 'react';
import './Registro.css'

export function Registro() {
    return (
        <div className="container registro">
            <form>
                <h2>REGISTRO</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombres</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Apellidos</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Documento de identidad</label>
                    <select className="form-select  selector mb-3" name="selector" id="selector">
                        <option selected>Choose...</option>
                        <option>Cédula de ciudadanía</option>
                        <option>Tarjeta de identidad</option>
                        <option>Pasaporte de extrangería</option>
                    </select>
                    <input type="number" name="doc" className="form-control" placeholder="Número de documento" id="doc" required minlength="6"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre de usuario</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirmar contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="button" className="btn btn-primary">Registrarse</button>
            </form>
        </div>
    )
}
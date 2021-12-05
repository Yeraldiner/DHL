import React, { useRef } from 'react';
import './Registro.css'
import {validar, registrar} from './RegistroService.js'

export function Registro() {
    const nombresRef = useRef();
    const apellidosRef = useRef();
    const documentoRef = useRef();
    const numerodocumentoRef = useRef();
    const correoRef = useRef();
    const usuarioRef = useRef();
    const contraseñaRef = useRef();
    const confirmarcontraseñaRef = useRef();
    const chequeadoRef = useRef();

    const registrarse = () => {
        const nombres = nombresRef.current.value;
        const apellidos = apellidosRef.current.value;contraseñaRef.current.value = "";
        const documento = documentoRef.current.value;
        const numerodocumento = numerodocumentoRef.current.value;
        const correo = correoRef.current.value;
        const usuario = usuarioRef.current.value;
        const contraseña = contraseñaRef.current.value;
        const confirmarcontraseña = confirmarcontraseñaRef.current.value;
        const chequeado = chequeadoRef.current.checked;

        if (validar(nombres, apellidos, numerodocumento, correo, usuario, contraseña, confirmarcontraseña,chequeado)) {
            registrar(nombres, apellidos, documento, numerodocumento, correo, usuario, contraseña);
            nombresRef.current.value = "";
            apellidosRef.current.value ="";
            documentoRef.current.value="Choose...";
            numerodocumentoRef.current.value="";
            correoRef.current.value="";
            usuarioRef.current.value = "";
            contraseñaRef.current.value = "";
            confirmarcontraseñaRef.current.value = "";
        }
    }
    return (
        <div className="container registro">
            <form>
                <h2>REGISTRO</h2>
                <div className="mb-3">
                    <label className="form-label">Nombres</label>
                    <input ref={nombresRef} type="text" className="form-control" placeholder="Nombres" required/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellidos</label>
                    <input ref={apellidosRef} type="text" className="form-control" placeholder="Apellidos"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Documento de identidad</label>
                    <select ref={documentoRef} className="form-select  selector mb-3" name="selector">
                        <option value="CC">Cédula de ciudadanía</option>
                        <option value="TI">Tarjeta de identidad</option>
                        <option value="PE">Pasaporte de extrangería</option>
                    </select>
                    <input ref={numerodocumentoRef} type="number" name="doc" className="form-control" placeholder="Número de documento" id="doc" required minLength="6" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input ref={correoRef} type="email" className="form-control" placeholder="Correo"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre de usuario</label>
                    <input ref={usuarioRef} type="text" className="form-control" placeholder="Usuario"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input ref={contraseñaRef}type="password" className="form-control" placeholder="Contraseña"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirmar contraseña</label>
                    <input ref={confirmarcontraseñaRef} type="password" className="form-control" placeholder="Confirmar contraseña"/>
                </div>
                <div className="mb-3 form-check">
                    <input ref={chequeadoRef} type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Acepto los términos y condiciones del uso del portal, para mayor información haga click aquí*</label>
                </div>
                <button type="button" className="btn btn-primary" onClick={registrarse}>Registrarse</button>
            </form>
        </div>
    )
}
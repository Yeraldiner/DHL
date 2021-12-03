import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from './componentes/Login/Login';
import { Registro } from './componentes/Registro/Registro';
import { Contactanos } from './componentes/Contactanos/Contactanos';
import { Servicios } from './componentes/Servicios/Servicios';

export function Rutas() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/contactanos" element={<Contactanos />} />
            <Route path="/servicios" element={<Servicios />} />
        </Routes>
    )
}
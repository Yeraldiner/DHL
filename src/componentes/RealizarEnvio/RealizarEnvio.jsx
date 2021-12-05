import React, { Fragment } from "react";
import FormGroup from "./FormGroup";
import FormSelectDepto from "./FormSelectDepto"

const RealizarEnvio = () => {
  return (
    <Fragment>
      <div className="container bg-dark w-50 rounded d-flex justify-content-center text-center">
        <h3 className="fw-bolder mt-2">Envío de Paquetes</h3>
      </div>
      <br/>
      <div className="container px-5">
        <h3>Datos del solicitante</h3>
        <div className="row gx-5 align-items-center">
          <form>
          <div className="row gx-5 align-items-center">
              <FormGroup label={'Día a recoger paquete'} type={'date'} id={'date'}/>
              <FormGroup label={'Zona horaria'} type={'text'} id={'zonaHora'}/>
         </div>
            <div className="row gx-5 align-items-center">
              <FormGroup label={'Alto'} type={'number'} id={'inputAlto'}/>
              <FormGroup label={'Largo'} type={'number'} id={'inputLargo'}/>
            </div>
            <div className="row gx-5 align-items-center">
              <FormGroup label={'Ancho'} type={'number'} id={'inputAncho'}/>
              <FormGroup label={'Dirección'} type={'text'} id={'inputDir'}/>
            </div>
            <div className="row gx-5 align-items-center">
               
             <FormSelectDepto label={"Departamento"} label2={"Ciudad"} id={"depto"} id2={"city"}/>
             
            </div>
            <div className="row gx-5 align-items-center">
              <FormGroup label={'N° de identificación'} type={'text'} id={'idSolicitante'}/>
              <FormGroup label={'Nombre completo'} type={'text'} id={'NameSolicitante'}/>
            </div>            
            <br/>
            <div className="row gx-5 align-items-center">
               <h3>Datos del receptor</h3>
            </div>
            <div className="row gx-5 align-items-center">        
             <FormSelectDepto label={"Departamento"} label2={"Ciudad"} id={"depto"} id2={"city"}/>
            </div>   
            <div className="row gx-5 align-items-center">
              <FormGroup label={'Dirección'} type={'text'} id={'direccion'}/>
              <FormGroup label={'N° de identificación'} type={'text'} id={'idReceptor'}/>
            </div> 
            <div className="row gx-5 align-items-center">
              <FormGroup label={'Nombre Completo'} type={'text'} id={'NombreReceptor'}/>
              <div className="col-sm form-group">{" "}</div>
            </div>
            <br/>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-lg btn-light">Enviar</button>      
            </div>   
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default RealizarEnvio;

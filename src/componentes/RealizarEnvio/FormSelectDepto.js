import React, { Fragment, useState } from 'react';
import * as data from './Colombia.json'

const FormSelectDepto = (props) => {

  const { label, label2, id, id2 } = props;
  const [deptoSelected, setDeptoSelected] = useState(0); //hook

  var departamentos = [{}]
  var ListCities = [];

  for (let i in data) {
    departamentos.push(data[i])
  }

  for (let i in data[deptoSelected].ciudades) {
    ListCities.push(data[deptoSelected].ciudades[i])
  }

  const ShowSelected = (e) => {

    e.preventDefault()
    setDeptoSelected(e.target.value)
  }

  const optionsDepto = departamentos.map((value, i) =>
    <option value={value.id} key={i}>{value.departamento}</option> // value: id del departamento
  );

  const optionsCity = ListCities.map((value, i) =>
    <option value={value} key={i}>{value}</option>  // value: nombre de la ciudad (string)
  );

  return (
    <Fragment>
      <div className="col-sm form-group">
        <label htmlFor={id}>{label}</label>
        <select
          className="form-select rounded-pill"
          aria-label="Seleccionar"
          onChange={ShowSelected}
        >
          <option id={"default"} value="select">Seleccione {label}...</option>
          {optionsDepto}
        </select>
      </div>
      <div className="col-sm form-group">
        <label htmlFor={id2}>{label2}</label>
        <select
          className="form-select rounded-pill"
          aria-label="Seleccionar"
        >
          <option value="select">Seleccione {label2}...</option>
          {optionsCity}
        </select>
      </div>
    </Fragment>
  )
}

export default FormSelectDepto;
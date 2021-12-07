import React from 'react';

const FormGroup = (props) =>{
  
  const { label, type, id } = props;

    return(
        <div className="col-sm form-group">
          <label htmlFor={label} className="labelenvio">{label}</label>
          <input
            type={type}
            className="form-control rounded-pill"
            id={id}
            aria-describedby="emailHelp"
          />
        </div>
    )
}

export default FormGroup;
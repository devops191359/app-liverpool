import React, { useState } from 'react';

import LiverpoolService from './data.service';

function Formulario() {
  const [responseData, setResponseData] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Input value:', inputValue);
    //setInputValue('');
    try {
      const data = await LiverpoolService.postLiverpoolTest(inputValue);
      setResponseData(data);
    } catch (error) {
      console.error('Error:', error);
    }
};

  return (<div>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input required="true"
          type="text"
          className="form-control"
          value={inputValue}
          onChange={handleChange}
          placeholder="folio"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
    {responseData && (
        <div style={{ color: 'black' }}>
          <h2>Respuesta del servicio:</h2>
          <pre>{JSON.stringify(responseData)}</pre>
        </div>
      )}
    </div>
  );
}

export default Formulario;

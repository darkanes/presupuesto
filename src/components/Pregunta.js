import React, { Fragment, useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
  //use state con la cantidad de presupuesto y un set del error
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handlePresupuesto = (e) => {
    setCantidad(parseInt(e.target.value), 10);
  };
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    //pasar validacion
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={handlePresupuesto}
          value={cantidad}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
};
Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setMostrarPregunta: PropTypes.func.isRequired,
};
export default Pregunta;

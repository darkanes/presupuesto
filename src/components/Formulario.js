import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Formulario = ({ setGasto, setCrearGasto }) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    setGasto(gasto);
    setCrearGasto(true);
    setNombre("");
    setCantidad(0);
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
      {error ? (
        <Error mensaje="Presupuesto incorrecto o ambos campos son obligatorios" />
      ) : null}
      <div className="campo">
        <label>Nombre gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej: Comida "
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Precio</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej: 200 "
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value), 10)}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired,
};
export default Formulario;

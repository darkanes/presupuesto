import React from "react";
import Pregunta from "./components/Pregunta";
import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarpregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  //use efect para actualizar el restante
  useEffect(() => {
    if (crearGasto) {
      setGastos([...gastos, gasto]);
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      setCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;

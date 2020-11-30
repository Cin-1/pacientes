import React, { Fragment, useState, useEffect } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";
import PropTypes from "prop-types";

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  const [citas, guardarCitas] = useState(citasIniciales);
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas]);

  const handleClick = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            {citas.length === 0 ? (
              <h2>No hay citas</h2>
            ) : (
              <h2>Administa tu citas</h2>
            )}

            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} handleClick={handleClick} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

import React, { Fragment, useState } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

function App() {
  const [citas, guardarCitas] = useState([]);
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };
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

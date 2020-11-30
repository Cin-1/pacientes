import React from "react";

const Cita = ({ cita, handleClick }) => {
  return (
    <div className="cita">
      <p>
        Mascota:<span>{cita.mascota}</span>
      </p>{" "}
      <p>
        Propietario:<span>{cita.propietarios}</span>
      </p>{" "}
      <p>
        Fecha:<span>{cita.fecha}</span>
      </p>{" "}
      <p>
        Hora:<span>{cita.hora}</span>
      </p>{" "}
      <p>
        Mascota:<span>{cita.sintomas}</span>
      </p>{" "}
      <button
        className="button eliminar u-full-width"
        onClick={() => handleClick(cita.id)}
      >
        Eliminar &times;
      </button>
    </div>
  );
};

export default Cita;

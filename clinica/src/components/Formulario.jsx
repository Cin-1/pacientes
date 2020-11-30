import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const { v4: uuidv4 } = require("uuid");

const Formulario = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietarios: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, actualizarError] = useState(false);
  const { mascota, propietarios, fecha, hora, sintomas } = cita;

  const handleChange = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      mascota.trim() === "" ||
      propietarios.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    actualizarError(false);
    cita.id = uuidv4();
    crearCita(cita);
    actualizarCita({
      mascota: "",
      propietarios: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };
  return (
    <Fragment>
      <h2>Crear cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="nombre mascota"
          onChange={handleChange}
          value={mascota}
        />
        <label>Nombre Propietario</label>

        <input
          type="text"
          name="propietarios"
          className="u-full-width"
          placeholder="nombre del propietario"
          onChange={handleChange}
          value={propietarios}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label>Sintomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};
Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired,
};
export default Formulario;

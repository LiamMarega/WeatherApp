import React from "react";
import estilos from "./card.module.css";
import { Link } from "react-router-dom";

export default function Card({ max, min, name, img, onClose, id }) {
  // acá va tu código
  return (
    <div className={estilos.contenedor}>
      <button onClick={onClose} className={estilos.boton}>
        X
      </button>

      <Link className={estilos.letras} to={`/ciudad/${id}`}>
        <h4 className="card-title">{name}</h4>
      </Link>

      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={"img"} />
      <div className={estilos.informacion}>
        <p className="nombre"> Minima </p>
        <p>{min} °C </p>
        <p className="nombre"> Maxima </p>
        <p>{max} °C </p>
      </div>
    </div>
  );
}

// <Link to={`/ciudad/${id}`}>
//   <h4 className="card-title">{name}</h4>
// </Link>

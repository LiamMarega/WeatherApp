import React from "react";
import { Link } from "react-router-dom";
import styled from "./Ciudad.module.css"

export default function Ciudad({ city }) {
  return (
    <div className={styled.ciudad}>
      {city ? (
        <div className={styled.containerCiudad}>
          <div className={styled.texto}>
            <h2 className={styled.city}>{city.name}</h2>
            <div className="info">
              <div>Temperatura: {city.temp} ºC</div>
              <div>Clima: {city.weather}</div>
              <div>Viento: {city.wind} km/h</div>
              <div>Cantidad de nubes: {city.clouds}</div>
              <div>Latitud: {city.latitud}º</div>
              <div>Longitud: {city.longitud}º</div>
            </div>
          </div>
          <Link to={"/"}>
            <button className={styled.boton}>BACK</button>
          </Link>
        </div>
      ) : (
        <Link to={"/"}>
          <button className={styled.boton}>BACK</button>
        </Link>
          
      )}
    </div>
  );
}

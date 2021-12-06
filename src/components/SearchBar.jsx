import React, { useState } from "react";
import styled from "./search.module.css";
import { BiSearchAlt } from "react-icons/bi";


export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form className={styled.search}
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input className={styled.inputText} type="text" onChange={(e) => setCity(e.target.value)} placeholder="Buscar" />
      <input className={styled.boton}  type="submit" value="Buscar" />
    </form>
  );
}

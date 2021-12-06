import React from "react";
import Card from "./Card";

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  return (
  //Si existe prop.cities, mapearlo.
    <div>
      { cities && cities.map((city) => (

        // Pasamos las propiedades de Card.
          <Card
            id = {city.id}
            name={city.name}
            max={city.max}
            min={city.min}
            img={city.img}
            onClose={() => onClose(city.id)}
          />
        ))}
    </div>
  );
}

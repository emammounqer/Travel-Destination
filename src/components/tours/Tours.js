import React from "react";
import data from "../../data/db.json";
import "./Tours.css";

function Tours() {
  return (
    <div>
      {data.map((location) => (
        <div className="tours_location" key={location.id}>
          <h2>{location.name}</h2>
          <img src={location.image} alt={location.name} />
        </div>
      ))}
    </div>
  );
}

export default Tours;

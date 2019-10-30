import React from "react";
import './Character.css';

export default function Character({ heroes }) {
  return (
    <div className="Characters">
      <div className="characters-card">
        <img src={heroes.image} alt={heroes.image} />
        <div className="character-contain">
          <h3>
            <b>{heroes.name}</b>
          </h3>
          <p>PV: {heroes.HP}</p>
          <p>Vitesse: {heroes.agility}</p>
          <p>Attaque: {heroes.atk}</p>
          <p>Defense: {heroes.def}</p>
          <p>Description: {heroes.description}</p>
          <p>Origine: {heroes.origin}</p>
        </div>
      </div>
    </div>
  );
}

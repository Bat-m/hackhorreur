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
          <p className="characters-card-id">PV : {heroes.HP}</p>
          <p className="characters-card-id">Vitesse : {heroes.agility}</p>
          <p className="characters-card-id">Attaque : {heroes.atk}</p>
          <p className="characters-card-id">Defense : {heroes.def}</p>
          <p className="characters-card-id">Description : {heroes.description}</p>
          <p className="characters-card-id">Origine : {heroes.origin}</p>
        </div>
      </div>
    </div>
  );
}

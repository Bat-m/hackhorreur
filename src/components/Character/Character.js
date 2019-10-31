import React from "react";
import "./Character.css";
import Axios from "axios";
import { Link } from "react-router-dom";


export default class Character extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroesAll: [],
      temp: []
    };
  }

  onChange = () => {
    Axios.put(
      `${process.env.REACT_APP_RICHARD_IP}/characters/selectHero/${this.props.heroes.id}`,
      { isHero: 1 }
    );
  };

  render() {
    return (
      <div className="Characters"> 
        <div className="characters-card">
          <img src={this.props.heroes.image} alt={this.props.heroes.image} />
          <div className="character-contain">
            <h3>
              <b>{this.props.heroes.name}</b>
            </h3>
            <p className="characters-card-id">PV : {this.props.heroes.HP}</p>
            <p className="characters-card-id">
              Vitesse : {this.props.heroes.agility}
            </p>
            <p className="characters-card-id">
              Attaque : {this.props.heroes.atk}
            </p>
            <p className="characters-card-id">
              Defense : {this.props.heroes.def}
            </p>
            <p className="characters-card-id">
              Description : {this.props.heroes.description}
            </p>
            <p className="characters-card-id">
              Origine : {this.props.heroes.origin}
            </p>
          </div>

          <br></br>
          <Link className="glow-on-hover"
            to="/stories"
            onClick={this.onChange}
            // className="character-btn-play"
          >
            Jouer avec {this.props.heroes.name}
          </Link>
        </div>
      </div>
    );
  }
}

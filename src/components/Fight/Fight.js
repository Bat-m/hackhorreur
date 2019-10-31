import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./../Fight/Fight.css";
import poing from "./../../assets/poing2.png";
import bouclier from "./../../assets/bouclier.jpg";
import empreinte from "./../../assets/fuir.png";

export default class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      hero: [],
      monster: []
    };
  }

  componentDidMount() {
    Axios.get(process.env.REACT_APP_RICHARD_IP + "/characters/hero")
      .then(response => response.data)
      .then(data =>
        this.setState({
          hero: data
        })
      );

    Axios.get(process.env.REACT_APP_RICHARD_IP + "/monster/everyone")
      .then(response => response.data)
      .then(data =>
        this.setState({
          monster: data
        })
      );
  }

  render() {
    return (
      <div>
        <h1 className="fightZone">FIGTH ZONE</h1>

     

        <div className="fightZone-container">
        <div className="fightZone-hero-card">
         
          <div className="fightZone-character-card">
          <img src={this.state.hero.image} alt={this.state.hero.name} />
            <h3>
              <b>{this.state.hero.name}</b>
            </h3>

            <p className="characters-card-id">PV : {this.state.hero.HP}</p>
            <p className="characters-card-id">
              Vitesse : {this.state.hero.agility}
            </p>
            <p className="characters-card-id">
              Attaque : {this.state.hero.atk}
            </p>
            <p className="characters-card-id">
              Defense : {this.state.hero.def}
            </p>
            <p className="characters-card-id">
              Description : {this.state.hero.description}
            </p>
            <p className="characters-card-id">
              Origine : {this.state.hero.origin}
            </p>

        </div>
        </div>

        <div className="fightZone-button-card">
        <div className="fightZone-defense-container">
          <div className="fightZone-defense">
            <div className="fightZone-btn">Attaquer</div>
            <img className="fightZone-poing" src={poing} alt="poing"></img>
          </div>
        </div>
        </div>
        <div className="fightZone-defense">
            <div className="fightZone-btn">Défendre</div>
            <img
              className="fightZone-poing"
              src={bouclier}
              alt="bouclier"
            ></img>
          </div>
          <div className="fightZone-defense">
            <div className="fightZone-btn">Fuir</div>
            <img
              className="fightZone-poing"
              src={empreinte}
              alt="empreinte"
            ></img>
            </div>





        <div className="fightZone-monster-card">
        <div className="characters-card">
              <img
                src={this.state.monster.image}
                alt={this.state.monster.name}
              />
            </div>
            <div className="character-contain">
              <h3>
                <b>{this.state.monster.name}</b>
              </h3>
              <p className="characters-card-id">PV : {this.state.monster.HP}</p>
              <p className="characters-card-id">
                Vitesse : {this.state.monster.agility}
              </p>
              <p className="characters-card-id">
                Attaque : {this.state.monster.atk}
              </p>
              <p className="characters-card-id">
                Defense : {this.state.monster.def}
              </p>
              <p className="characters-card-id">
                Description : {this.state.monster.description}
              </p>
              <p className="characters-card-id">
                Origine : {this.state.monster.origin}
              </p>
            </div>
        </div>

        </div>

      </div>

    );
  }
}

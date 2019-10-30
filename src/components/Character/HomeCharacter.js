import React from "react";
import Character from "./Character";
import Axios from "axios";
import'./HomeCharacter.css'

export default class HomeCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroesAll: []
    };
  }

  componentDidMount() {
    Axios.get("http://192.168.1.145:8000/characters/everyone")
      .then(response => response.data)
      .then(data =>
        this.setState({
          heroesAll: data
        })
      );
  }

  render() {
    console.log(this.state.heroesAll[0]);
    return (
      <div className="HomeCharacters">
        <h1>Choix perso</h1>
        <div className="HomeCharacters-card">
          {this.state.heroesAll.map((item, index) => (
            <Character key={index} heroes={item} image="" />
          ))}
        </div>
      </div>
    );
  }
}

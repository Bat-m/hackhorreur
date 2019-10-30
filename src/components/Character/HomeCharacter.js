import React from "react";
import Character from "./Character";
import Axios from "axios";

import'./HomeCharacter.css'


export default class HomeCharacter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      heroesAll: [],
      
    };
    
  }
  
  componentDidMount() {
    Axios.get(process.env.REACT_APP_RICHARD_IP + "/characters/everyone")
      .then(response => response.data)
      .then(data =>
        this.setState({
          heroesAll: data
        })
      );
  }

  render() {
 
    return (
      <div className="HomeCharacters">
        <h1>Quel horror héros seras-tu ?</h1>
       

        <p>Ta planète a été percutée par un astéroïde et tu t'es <i>légèrement</i> transformé(e). 
          Tu as réussi à monter dans une capsule partant vers un autre monde ... Tu attéris sur une nouvelle planète mais tu ne sais pas si elle est habitée!</p>

        <div className="HomeCharacters-card">
          {this.state.heroesAll.map((item, index) => (
            <Character key={index} heroes={item} image="" ></Character>
            
          ))}
        </div>
        
      </div>
    );
  }
}

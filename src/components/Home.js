import React from 'react';
import spaceBackground from './../../src/assets/spaceBackground.jpg';

export default class Home extends React.Component{
    render() {
        return (
          <div className="home">
            <img className="home-background" src={spaceBackground} alt="space environment"></img>
            <h1>SAINT GROOL STORIE</h1>
            <button> PLAY </button>
          </div>
        )
      }
    
}
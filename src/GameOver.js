import React,{Component} from 'react';
import './components/GameOver.css';
import {Link} from 'react-router-dom';
import dead from './assets/dead.jpg'

export default class GameOver extends React{
    constructor(props) {
        super(props);
        this.state = {
          hero: []
        };
      }

      render(){
          return(

            <div>
                <img src={dead} alt="dead"></img>
            </div>
          )
      }

}
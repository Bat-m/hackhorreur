import React from 'react';
import Character from './Character'
import Axios from 'axios';

export default class HomeCharacter extends React.Component{
    constructor(){
        this.state={
            heroesAll:[]
        }
    }

    componentDidMount(){
        Axios.get("https://swapi.co/api/people/")
        .then(response => response.data)
        .then(data => {
          this.setState({
            heroesAll:data.results
          });
        } );
      }

    render(){
        return(
            <div className="Home">
                
            <h1>Choix perso</h1>
            {this.state.peopleAll.map((item,index)=>
                <Character  key={index} people={item} image={this.state.image[index]} />
                 )}
            </div>
        )

    }
}
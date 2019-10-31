import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import './Stories.css';

export default class Stories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hero: []
        };
      }

    
      componentDidMount() {
        Axios.get(`${process.env.REACT_APP_RICHARD_IP}/characters/hero`)
          .then(response => response.data)
          .then(data =>  this.setState({
            hero: data})
          );
      }

      onChange = event => {
        // const [value, setValue] = React.useState('');
        // localStorage.getItem('myValueInLocalStorage')
        // console.log(localStorage.getItem('myValueInLocalStorage'))
      };

    render(){
    //    let myJson=localStorage.getItem('myValueInLocalStorage')
       
    //   let heroes = JSON.parse(myJson);
    //    console.log(heroes.name)
        return(
            <div className="Home">

                <h1>Hello {this.state.hero.name}  </h1>
                <button onClick={this.onChange}>test localStorage</button>
                <Link to='/fight'  className="">Choix 1</Link>   
                <Link to='/stories'  className="">Choix 2</Link> 
            </div>
        )

    }
}
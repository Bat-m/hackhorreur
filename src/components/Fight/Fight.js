import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import './../Fight/Fight.css';
import poing from './../../assets/poing2.png';
import bouclier from './../../assets/bouclier.jpg';
import empreinte from'./../../assets/fuir.png'

export default class Fight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hero: []
        };
      }

    
    //   componentDidMount() {
    //     Axios.get(process.env.REACT_APP_RICHARD_IP + "/characters/hero")
    //       .then(response => response.data)
    //       .then(data =>  this.setState({
    //         hero: data})
    //       );
    //   }

    //   onChange = event => {
    //     // const [value, setValue] = React.useState('');
    //     // localStorage.getItem('myValueInLocalStorage')
    //     // console.log(localStorage.getItem('myValueInLocalStorage'))
    //   };

    render(){
        return(
            <div >
                <h1 className="fightZone">FIGTH ZONE</h1>
                
                {/* <img src={this.props.heroes.image} alt={this.props.heroes.image} /> */}
                
                <div className="fightZone-defense">
                <div className="fightZone-btn">Attaquer</div>
                <img className="fightZone-poing" src={poing} alt ="poing"></img>
                </div>

                <div className="fightZone-defense">
                <div className="fightZone-btn">Défendre</div>
                <img className="fightZone-poing" src={bouclier} alt ="bouclier"></img>
                </div>
                <div className="fightZone-defense">
                <div className="fightZone-btn">Fuir</div>
                <img className="fightZone-poing" src={empreinte} alt ="empreinte"></img>
                 {/* <img src={this.props.allHeroes.image} alt={this.props.allHeroes.image} /> */}
                 </div>
            </div>
        )

    }
}
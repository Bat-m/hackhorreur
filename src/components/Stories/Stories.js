import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import './Stories.css';
import Particles from "react-particles-js";
import grotte from './../../assets/grotte.jpg';
import paysage from './../../assets/paysage.jpg'

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

          <div className="HomeCharacters">
          <Particles
        params={{
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                value_area: 789.1476416322727
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ffffff"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 0.48927153781200905,
              random: false,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false
              }
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false
              }
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
        style={{
          width: "100%",
          height: "100vh"
        }}
      />
            <div className="test">

                <h1 className="stories-title">Hello {this.state.hero.name}</h1>
                <h1 className="stories-title">Explore cette nouvelle planète</h1>
                {/* <button onClick={this.onChange}>test localStorage</button> */}
                <div className="stories-card">
                <div className="stories-cave">
                <img className="stories-image-one" src={grotte} alt="grotte"></img>
                <Link  to='/fight'  className="glow-on-hover stories-discover">Découvre les environs</Link>  
                </div> 

                <div className="stories-cave">
                <img className="stories-image-two" src={paysage} alt="paysage"></img>
                <Link  to='/stories'  className="glow-on-hover stories-discover">Rencontre la faune locale</Link> 
                </div>
                </div>
            </div>
            </div>
            
        )

    }
}
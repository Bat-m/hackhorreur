import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import "./../Fight/Fight.css";
import poing from "./../../assets/poing2.png";
import bouclier from "./../../assets/bouclier.jpg";
import empreinte from "./../../assets/fuir.png";
import Particles from "react-particles-js";


export default class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: [],
      monster: []
    };
  }

  onUpdate=()=>{
    Axios.get(`${process.env.REACT_APP_RICHARD_IP}/characters/hero`)
      .then(response => response.data)
      .then(data =>
        this.setState({
          hero: data
        })
      );

    Axios.get(`${process.env.REACT_APP_RICHARD_IP}/monster/everyone/1`)
      .then(response => response.data)
      .then(data =>
        this.setState({
          monster: data
        })
      );
  }

  componentDidMount() {
    this.onUpdate()
  }


  onFight=()=>{

    let lifeMonster=this.state.monster.HP-this.state.hero.HP
    let lifeHero=this.state.hero.HP-this.state.monster.HP
    console.log(lifeMonster)
    Axios.put(`${process.env.REACT_APP_RICHARD_IP}/monster/editMonster/1`,{"HP" : {lifeMonster}, "is_in_fight":1})
    Axios.put(`${process.env.REACT_APP_RICHARD_IP}/characters/editCharacter/1`,{"HP" : {lifeHero}, "isHero" : 1})

    setTimeout(this.onUpdate, 500)
      
  }

  render() {
 
    return (
      <div>
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
          <h1 className="fightZone">FIGTH ZONE</h1>

          <div className="fightZone-container">
            <div className="fightZone-hero-card">
              <div className="characters-card">
                <img src={this.state.hero.image} alt={this.state.hero.name} />
                <div className="character-contain">
                  <h3>
                    <b>{this.state.hero.name}</b>
                  </h3>
                  <p className="characters-card-id">
                    PV : {this.state.hero.HP}
                  </p>
                  <p className="characters-card-id">
                    Vitesse : {this.state.hero.agility}
                  </p>
                  <p className="characters-card-id">
                    Attaque : {this.state.hero.atk}
                  </p>
                  <p className="characters-card-id">
                    Defense : {this.state.hero.def}
                  </p>
                </div>
              </div>
            </div>

            <div className="fightZone-button-card">
              <div className="fightZone-defense-container">
                <div className="fightZone-defense item1">
                  <div className="stories-choice1" onClick={this.onFight}>Attaquer</div>
                  <img
                    className="fightZone-poing"
                    src={poing}
                    alt="poing"
                  ></img>
                </div>
              </div>

              <div className="fightZone-defense item2">
                <div className="stories-choice1" >Défendre</div>
                <img
                  className="fightZone-poing"
                  src={bouclier}
                  alt="bouclier"
                ></img>
              </div>
              <div className="fightZone-defense item3">
                <div className="stories-choice1">Fuir</div>
                <img
                  className="fightZone-poing"
                  src={empreinte}
                  alt="empreinte"
                ></img>
              </div>
              <div className="fightZone-defense item4">
                <div className="fightZone-text1">text avec score qui bouge</div>
                
              </div>
            </div>

            <div className="fightZone-monster-card">
              <div className="characters-card">
                <img
                  src={this.state.monster.image}
                  alt={this.state.monster.name}
                />
                <div className="character-contain">
                  <h3>
                    <b>{this.state.monster.name}</b>
                  </h3>
                  <p className="characters-card-id">
                    PV : {this.state.monster.HP}
                  </p>
                  <p className="characters-card-id">
                    Vitesse : {this.state.monster.agility}
                  </p>
                  <p className="characters-card-id">
                    Attaque : {this.state.monster.atk}
                  </p>
                  <p className="characters-card-id">
                    Defense : {this.state.monster.def}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

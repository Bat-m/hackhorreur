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
      monster: [],
      lifeMonster:0,
      lifeHero:0,
      valueAtkMonster:0,
      valueAtkHero:0,
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


  onFightMonster=()=>{
   
    this.valueAtkMonster= Math.floor(Math.random() * Math.floor(this.state.hero.atk+2));
    this.lifeMonster= this.state.monster.HP- this.valueAtkMonster;
    console.log("vie restante du montre" +this.state.valueAtkMonster)
    Axios.put(`${process.env.REACT_APP_RICHARD_IP}/monster/editMonster/1`,{"HP" : this.lifeMonster, "is_in_fight":1})

    setTimeout(this.onUpdate, 500)
    setTimeout(this.onFightHero, 1000)  
  }

  onFightHero=()=>{
    this.valueAtkHero= Math.floor(Math.random() * Math.floor(this.state.monster.atk+2));
    this.lifeHero= this.state.hero.HP- this.valueAtkHero ;
    Axios.put(`${process.env.REACT_APP_RICHARD_IP}/characters/editCharacter/1`,{"HP" : this.lifeHero, "isHero" : 1})
    setTimeout(this.onUpdate, 500)
  }


  render() {
 console.log(this.valueAtkMonster)
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
          <h1 className="fightZone">FIGHT ZONE</h1>

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

                  <div className="stories-choice1 glow-on-hover" onClick={this.onFightMonster}>Attaquer</div>
                  {/* <img
                    className="fightZone-poing"
                    src={poing}
                    alt="poing"
                  ></img> */}
                </div>
              </div>

              <div className="fightZone-defense item2">
                <div className="stories-choice1 glow-on-hover" >Défendre</div>
                {/* <img
                  className="fightZone-poing"
                  src={bouclier}
                  alt="bouclier"
                ></img> */}
              </div>
              <div className="fightZone-defense item3">
                <div className="stories-choice1 glow-on-hover">Fuir</div>
                {/* <img
                  className="fightZone-poing"
                  src={empreinte}
                  alt="empreinte"
                ></img> */}
              </div>
              <div className="fightZone-defense item4">

                <p className="fightZone-text">Vous infligez {this.valueAtkMonster===undefined?'0':this.valueAtkMonster} dégats à {this.state.monster.name} ! </p>
                <p className="fightZone-text"> {this.state.monster.name} vous inflige {this.valueAtkHero===undefined?'0':this.valueAtkHero} dégats ! </p>

                
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
          {this.state.hero.HP<=0&&alert('You are dead')}
          {this.state.monster.HP<=0&&alert('Monster is dead')}
        </div>
      </div>
    );
  }
}

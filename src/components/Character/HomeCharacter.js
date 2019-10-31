import React from "react";
import Character from "./Character";
import Axios from "axios";
import Particles from "react-particles-js";
import "./HomeCharacter.css";

export default class HomeCharacter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heroesAll: [],
      index: [1, 2, 3, 4]
    };
  }

  componentDidMount() {
    Axios.get(`${process.env.REACT_APP_RICHARD_IP}/characters/everyone`)
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
        <h1 className="HomeCharacters-title">Quel horror héros seras-tu ?</h1>

        <p className="HomeCharacters-storie">
          Ta planète a été percutée par un astéroïde et tu t'es{" "}
          <i>légèrement</i> transformé(e). Tu as réussi à monter dans une
          capsule partant vers un autre monde ... Tu attéris sur une nouvelle
          planète mais tu ne sais pas si elle est habitée!
        </p>

        <div className="HomeCharacters-card">
          {this.state.heroesAll.map((item, i) => (
            <Character
              heroes={item}
              key={i}
              index={this.state.index[i]}
            ></Character>
          ))}
        </div>
        </div>
      </div>
    );
  }
}

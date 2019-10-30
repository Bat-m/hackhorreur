import React from 'react';
import spaceBackground from './../../src/assets/spaceBackground.jpg';
import {Link} from 'react-router-dom';
import './home.css'

export default class Home extends React.Component{
    render() {
        return (
            
          <div className="home">
              <div >
                  <div className="home-title-and-button">
                      <div > 
                        <h1>SAINT GROOL STORIE</h1>
                    </div>
                    <div>
                        <Link to='/charac' className="home-play-button">PLAY</Link>
                    </div>
                  </div>
            </div>
            
          </div>
        )
      }
    
}
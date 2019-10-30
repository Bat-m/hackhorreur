import React from 'react';
import './App.css';
import GetPost from './components/GetPost';
import Home from './components/Home';
import {Switch,Route} from 'react-router-dom';
// import Home from './components/Home';
import Charac from './components/Character/HomeCharacter';
import Stories from './components/Stories/Stories';
import Fight from './components/Fight/Fight';

function App() {
  return (
    <div className="App">
   
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/charac" component={Charac}/>
        <Route path="/stories" component={Stories}/>
        <Route path="/fight" component={Fight}/>
          
      </Switch>
    </div>
  );
}

export default App;

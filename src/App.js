import React from 'react';
import './App.css';
import GetPost from './components/GetPost';

import Charac from './components/Character/HomeCharacter';
import Stories from './components/Stories/Stories';


function App() {
  return (
    <div className="App">
      {/* <GetPost/> */}
      <Switch>
        <Route exact path="/" component={Charac}/>
        <Route path="/stories" component={Stories}/>
          
      </Switch>
    </div>
  );
}

export default App;

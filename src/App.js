import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import MainView from './views/main';
import SuccessView from './views/success';
import ErrorView from './views/404';
import './App.css';


function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route path="/success/:identifier">
          <SuccessView/>
        </Route>

        <Route path="/404">
          <ErrorView/>
        </Route>

        <Route path="/">
          <MainView/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;

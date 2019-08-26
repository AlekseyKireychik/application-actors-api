import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './layout/home/home.jsx';
import Actors from './layout/actors/actors.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/actors" component={Actors} />
        </Switch>
      </App>
    </BrowserRouter>
  ), document.getElementById('root'));

serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './page/home' 
import Homme from './page/Homme'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
   <Router>
     <Switch>
     <Route component = {Homme} path="/" exact />
     <Route component = {HomePage} path="/list" />
     
     </Switch>
   </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

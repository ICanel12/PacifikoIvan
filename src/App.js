import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Employees from './components/Employees.js';
import Employee from './components/Employee.js';
import CreateEmploye from './components/CreateEmploye';

function App() {

  return (
    <Router>

        <div className="container">
        <Switch>
          <Route path="/employees">
            <Employees/>
          </Route>

          <Route path="/employee/:id">|
            <Employee/>
          </Route>

          <Route path="/create">
            <CreateEmploye/>
          </Route>
        </Switch>

        </div>
    </Router>
  );
}


export default App;

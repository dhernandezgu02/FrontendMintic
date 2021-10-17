import React from "react";
import "./App.css"
import Login from "./views/login/Login"
import Update from "./views/update_employee/Update.js";
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path="/" component="" />
        <Route path="/Login" component={Login} />
        <Route path="/Update" component={Update} />
      </div>
    </Router>
  );
}

export default App;

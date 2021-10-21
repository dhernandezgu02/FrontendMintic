import React from "react";
import "./App.css"
import Login from "./views/login/Login"
import Update from "./views/update_employee/Update.js";
import Menu from "./views/menu/Menu.js";
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path="/" component="" />
        <Route path="/Login" component={Login} />
        <Route path="/Update" component={Update} />
        <Route path="/Menu" component={Menu} />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css"
import Login from "./views/login/Login";
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
// import Logged from "./views/Logged";

function App() {
  return (
    <div className='App'>
      <Login/>
    </div>
    // <Router>
    //   <div className='App'>
        
    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //       <Route path="/home">
    //         <Logged/> 
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;

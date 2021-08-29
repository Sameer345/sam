import React from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './component/Home ';
import About from './component/About';
import Contact from './component/Contact';
import Navbar from "./component/Layout";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import Error404 from "./component/Error404";
import Sinup from "./component/Sinup";
import login from "./component/Login";

import Auth from "./component/Auth";

// import { Vila } from "./component/home ";

function App() {
  
  return (
    <Router>
      <Navbar/>
    <Switch>
      <Route exact path = '/' component={Home}/>
      <Route exact path = '/about' component={About}/>
      <Route exact path = '/contact/:sam' component={Contact}/>
      <Route exact path = '/sinup' component={Sinup}/>
      <Route exact path = '/login' component={login}/>
      <Route exact path = '/auth' component={()=> <Auth authorized = {false}/>}/>

      {/* <Route component={Error404}/> */}
      </Switch>
    
    </Router>
  );
}

export default App;

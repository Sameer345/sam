import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import Logo from './images/download.png';


const Navbar = () =>{
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">Navbar</a>
    <img src={Logo} width ="2%" height = "2%" ></img>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link"  exact to="/">Home</NavLink>
        <NavLink className="nav-link" exact to="/about">About</NavLink>
        <NavLink className="nav-link"  exact to="/contact">Contact</NavLink>
        <NavLink className="nav-link"  exact to="/sinup">Sinup</NavLink>
        <NavLink className="nav-link"  exact to="/login">Login</NavLink>


      </div>
    </div>
  </div>
</nav>  
        </div>
    );
};
export default Navbar;
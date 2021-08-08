import React, { Component } from 'react';

const NavBar = ({totalCounters}=this.props) => {
  return (  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" >Navbar<span className="badge rounded-pill bg-secondary">{totalCounters}</span></a>
    
  </div>
</nav> );
};
 
export default NavBar;
 

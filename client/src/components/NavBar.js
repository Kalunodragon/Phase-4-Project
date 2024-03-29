import React from "react";
import { NavLink } from "react-router-dom"

function NavBar(){

  return(
    <div className="nav-container">
            <div className="main">
              <NavLink
                to="/"
                exact
              >Main Page</NavLink>
            </div>
            <div className="all-games">
              <NavLink
                to='/All-Games'
                exact
                >Games</NavLink>
            </div>
            <div className="sign-in">
              <NavLink
                to="/Sign-in"
                exact
                >Sign-in</NavLink>
            </div>
        </div>
  )
}

export default NavBar
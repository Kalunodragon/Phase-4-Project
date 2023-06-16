import React from "react";
import { NavLink } from "react-router-dom"

function NavBar(){

  return(
    <div className="nav-container">
            <div className="navigation">
                <NavLink
                    to="/"
                    exact
                    // style={}
                    // activeStyle={}
                >Main Page</NavLink>
            </div>
        </div>
  )
}

export default NavBar
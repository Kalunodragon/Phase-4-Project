import React from "react";
import { NavLink } from "react-router-dom"

function NavBar(){

  return(
    <div className="nav-container">
            {/* {signUpLink} */}
            <div className="main">
                <NavLink
                    to="/"
                    exact
                    // style={}
                    // activeStyle={}
                >Main Page</NavLink>
            </div>
            <div className="all-games">
              <NavLink
                to='/All-Games'
                exact
                >Games</NavLink>
            </div>
        </div>
  )
}

export default NavBar
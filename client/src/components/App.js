import React from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App(){

  return(
    <div>
      <h1>Title place holder</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <h1>Route Testing</h1>
        </Route>
      </Switch>
    </div>
  )
}

export default App
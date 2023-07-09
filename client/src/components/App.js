import React from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AllGameCards from "./AllGameCards";
import MainPage from "./MainPage";

function App(){

  return(
    <div>
      <h1>Title place holder</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route exact path="/All-Games">
          <AllGameCards/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
import React, { createContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AllGameCards from "./AllGameCards";
import MainPage from "./MainPage";
import SignInForm from "./SignInForm";

export const userContext = createContext(null)

function App(){
  const [user, setUser] = useState(null)

  useEffect(() =>{
    fetch("/user")
    .then((res) => {
      if(res.ok){
        res.json()
        .then((d) => setUser(d))
        console.log(res.json())
      } else {
        setUser(null)
        console.log("there is no user signed in")
      }
    })
  }, [])

  return(
    <div>
      <h1>Title place holder</h1>
      {user ? <h1>{user}</h1> : <h1>Please log in</h1>}
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MainPage/>
        </Route>
        <Route exact path="/All-Games">
          <AllGameCards/>
        </Route>
        <Route exact path="/Sign-in">
          <SignInForm/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
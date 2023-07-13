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
      } else {
        setUser(null)
        console.log("there is no user signed in")
      }
    })
  }, [])

  function signOut(){
    fetch("/log_out",{
      method: 'DELETE'
    })
    .then(setUser(null))
  }

  // if(user === null){
  //   return(
  //     <h1>Loading...</h1>
  //   )
  // }

  return(
    <div>
      <h1>Title place holder</h1>
      {user ? <h1>{user.first_name}</h1> : <h1>Please log in</h1>}
      {user ? <button onClick={signOut}>LOG-OUT</button> : null}
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
import React, { createContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import AllGameCards from "./AllGameCards";
import MainPage from "./MainPage";
import Profile from "./Profile";
import SignInSignUp from "./SignInSignUp";

export const userContext = createContext(null)

function App(){
  const [user, setUser] = useState(null)
  const [logCheck, setLogCheck] = useState(false)
  const [showProfileState, setShowProfileState] = useState(false)

  useEffect(() =>{
    fetch("/user")
    .then((res) => {
      if(res.ok){
        res.json()
        .then((d) => {
          setUser(d)
          setLogCheck(true)
        })
      } else {
        setUser(null)
        setLogCheck(true)
        // console.log("there is no user signed in")
      }
    })
    .catch(err => window.alert(err))
  }, [])

  function signOut(){
    fetch("/log_out",{
      method: 'DELETE'
    })
    .then(setShowProfileState(false))
    .then(setUser(null))
  }

  function setUserLogIn(value){
    setUser(value)
    setLogCheck(true)
  }

  function showProfile(){
    setShowProfileState(p => !p)
  }

  if(logCheck === false){
    return(
      <h1>Loading...</h1>
    )
  }

  return(
    <div>
      <h1>Game library</h1>
      <userContext.Provider value={user}>
        {user ? <h1>Current User: {user.first_name}</h1> : <h1>Please log in</h1>}
        {user ? <button onClick={signOut}>LOG-OUT</button> : null}
        {user ? 
          (showProfileState ? 
          <button onClick={showProfile}>Hide Profile</button> :
          <button onClick={showProfile}>Manage Profile</button>) :
           null}
        {showProfileState ? <Profile setUser={setUser}/> :
      <>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route exact path="/All-Games">
            <AllGameCards/>
          </Route>
          <Route exact path="/Sign-in">
            <SignInSignUp setUserLogIn={setUserLogIn}/>
          </Route>
        </Switch>
      </>}
      </userContext.Provider>
    </div>
  )
}

export default App
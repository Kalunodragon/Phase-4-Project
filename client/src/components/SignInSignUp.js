import React, { useContext, useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { userContext } from "./App";

function SignInSignUp({setUserLogIn}){
  const user = useContext(userContext)
  const [change, setChange] = useState(true)

  function handleButtonClick(){
    setChange(v => !v)
  }

  return(
    <>
      <h1>Sign-{change ? "in" : "up"}</h1>
      {user ? null : <button onClick={handleButtonClick}>Switch to Sign-{change ? "up" : "in"}</button>}
      {change ? <SignInForm setUserLogIn={setUserLogIn}/> : <SignUpForm setUserLogIn={setUserLogIn}/>}
    </>
  )
}

export default SignInSignUp
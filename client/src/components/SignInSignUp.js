import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function SignInSignUp({setUserLogIn}){
  const [change, setChange] = useState(true)

  function handleButtonClick(){
    setChange(v => !v)
  }

  return(
    <>
      <h1>Sign-{change ? "in" : "up"}</h1>
      <button onClick={handleButtonClick}>Switch to Sign-{change ? "up" : "in"}</button>
      {change ? <SignInForm setUserLogIn={setUserLogIn}/> : <SignUpForm setUserLogIn={setUserLogIn}/>}
    </>
  )
}

export default SignInSignUp
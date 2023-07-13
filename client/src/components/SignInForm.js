import React, { useState } from "react";

function SignInForm({ setUserLogIn }){
  const empty = {
    "user_name": "",
    "password": ""
  }
  const [formData, setFormData] = useState(empty)
  
  function handleChange(e){
    const location = e.target.name
    const info = e.target.value

    setFormData({
        ...formData,
        [location]: info
    })
}

  function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
    sendLogIn(formData)
    setFormData(empty)
  }

  function sendLogIn(info){
    fetch("/log_in", {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(info)
    })
    .then((res) => {
      if(res.ok){
        res.json()
        .then((d) => {
          console.log(d)
          console.log("success")
          setUserLogIn(d)
        })
      } else {
        console.log("Check Username and password and try again")
      }
    })
  }

  return(
    <>
      <h1>Sign In Form component</h1>
      <form>
        <strong>Username:</strong>
          <input
            type='text'
            name='user_name'
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Username">
          </input>
        <br/>
        <strong>Password:</strong>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Password'>
          </input>
          <br/>
          <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default SignInForm
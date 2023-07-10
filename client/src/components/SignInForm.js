import React, { useState } from "react";

function SignInForm(){
  const empty = {
    "username": "",
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
    console.log("I've been clicked")
    console.log("clearing form")
    setFormData(empty)
  }

  return(
    <>
      <h1>Sign In Form component</h1>
      <form>
        <strong>User Name:</strong>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}
            placeholder="User Name">
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
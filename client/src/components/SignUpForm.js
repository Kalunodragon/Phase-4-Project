import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignUpForm({ setUserLogIn }){
  const history = useHistory()
  const emptyFormData = {
    "first_name":"",
    "last_name":"",
    "user_name":"",
    "email":"",
    "bio":"",
    "password":"",
    "password_confirmation":"",
    "image_url":""
  }
  const [formData, setFormData] = useState(emptyFormData)

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
    fetch("/user",{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((res =>{
      if(res.ok){
        res.json()
        .then((d) => {
          console.log(d)
          setUserLogIn(d)
        })
        .then(history.push('/'))
      } else {
        console.log("there was an issue with a sign up")
      }
    }))
    .catch(err => console.log(err))
  }

  return(
    <>
      <h1>Sign up form section</h1>
      <form onSubmit={handleSubmit}>
            <strong>First Name: </strong>
              <input
                type='text'
                name='first_name'
                value={formData.first_name}
                onChange={handleChange}>
              </input>
            <br/>
            <strong>Last Name: </strong>
              <input
                type='text'
                name='last_name'
                value={formData.last_name}
                onChange={handleChange}>
              </input>
            <br/>
            <strong>Username: </strong>
              <input
                type='text'
                name='user_name'
                value={formData.user_name}
                onChange={handleChange}>
              </input>
            <br/>
            <strong>Email: </strong>
              <input
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}>
              </input>
            <br/>
            <strong>Bio: </strong>
            <br/>
              <textarea
                type='textarea'
                rows={5}
                name='bio'
                value={formData.bio}
                onChange={handleChange}>
              </textarea>
            <br/>
            <strong>Password: </strong>
              <input
                type='password'
                name='password'
                required={true}
                value={formData.password}
                onChange={handleChange}>
              </input>
            <br/>
            <strong>Confirm Password: </strong>
              <input
                type='password'
                name='password_confirmation'
                required={true}
                value={formData.password_confirmation}
                onChange={handleChange}>
              </input>
            <br/>
            <strong>Profile Image: </strong>
              <input
                type='text'
                name='image_url'
                value={formData.image_url}
                onChange={handleChange}>
              </input>
              <br/>
            <img className="profile-photo" src={formData.image_url} alt="Profile"/>
            <br/>
            <button>Submit</button>
          </form>
    </>
  )
}

export default SignUpForm
import React, { useContext, useState } from "react";
import { userContext } from "./App";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Profile({ setUser }){
  const history = useHistory()
  const user = useContext(userContext)
  const [showEditForm, setShowEditForm] = useState(false)
  
  const prefilledFormInfo = {
    "user_name": user.user_name,
    "first_name": user.first_name,
    "last_name": user.last_name,
    "email": user.email,
    "image_url": user.image_url,
    "bio": user.bio,
    "password": '',
    "password_confirmation": ''
  }
  const [formData, setFormData] = useState(prefilledFormInfo)

  function handleEditButton(){
    setShowEditForm(v => !v)
  }

  function handleFormChange(e){
    const location = e.target.name
    const info = e.target.value

    setFormData({
        ...formData,
        [location]: info
    })
  }

  function handleDelete(){
    let choice = window.confirm(`${user.first_name}, your account will be deleted if you continue!`)
    if(choice === true){
      fetch('/user',{
        method: "DELETE"
      })
      .then(window.alert(`${user.first_name}, your account has been succesfully deleted.`))
      .then(history.push('/'))
    }
  }

  function handleSubmit(e){
    e.preventDefault()
    // console.log(formData)
    fetch("/user",{
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => {
      if(res.ok){
        res.json()
        .then(d => {
          setUser(d)
          setShowEditForm(false)
          setFormData(prefilledFormInfo)
        })
      } else {
        window.alert("Error with updating users information on server, please try again!")
      }
    }).catch(err => window.alert(err))
  }

  return(
    <div>
      {showEditForm ?  
        <button onClick={handleEditButton}>Exit Edit</button> :
        <button onClick={handleEditButton}>Edit Profile</button>
      }
      {showEditForm ? <button onClick={handleDelete}>Delete Profile</button> : null}
      {showEditForm ?
        <>
          <h3>EDITING USER PROFILE</h3>
          <form onSubmit={handleSubmit}>
            <strong>First Name: </strong>
              <input
                type='text'
                name='first_name'
                value={formData.first_name}
                onChange={handleFormChange}>
              </input>
            <br/>
            <strong>Last Name: </strong>
              <input
                type='text'
                name='last_name'
                value={formData.last_name}
                onChange={handleFormChange}>
              </input>
            <br/>
            <strong>Username: </strong>
              <input
                type='text'
                name='user_name'
                value={formData.user_name}
                onChange={handleFormChange}>
              </input>
            <br/>
            <strong>Bio: </strong>
              <textarea
                type='textarea'
                rows={5}
                name='bio'
                value={formData.bio}
                onChange={handleFormChange}>
              </textarea>
            <p>Please either re-enter previous password to confirm changes or create a new password.</p>
            <strong>Password: </strong>
              <input
                type='password'
                name='password'
                required={true}
                value={formData.password}
                onChange={handleFormChange}>
              </input>
            <br/>
            <strong>Confirm Password: </strong>
              <input
                type='password'
                name='password_confirmation'
                required={true}
                value={formData.password_confirmation}
                onChange={handleFormChange}>
              </input>
            <br/>
            <strong>Profile Image: </strong>
              <input
                type='text'
                name='image_url'
                value={formData.image_url}
                onChange={handleFormChange}>
              </input>
              <br/>
            <img className="profile-photo" src={formData.image_url} alt="Profile"/>
            <br/>
            <button>Submit</button>
          </form>
        </>:
        <>
          <h3>User Profile</h3>
          <h1>{user.first_name}'s Profile</h1>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.user_name}</p>
          <p>Bio: {user.bio}</p>
          <img className="profile-photo" src={user.image_url} alt="Profile"/>
        </>
      }
    </div>
  )
}

export default Profile
import React, { useContext, useState } from "react";
import { userContext } from "./App";

function Profile(){
  const user = useContext(userContext)
  const [showEditForm, setShowEditForm] = useState(false)

  function handleEditButton(){
    setShowEditForm(v => !v)
  } 

  return(
    <div>
      {showEditForm ?  
        <button onClick={handleEditButton}>Exit Edit</button> :
        <button onClick={handleEditButton}>Edit Profile</button>
      }
      {showEditForm ?
        <>
          <h3>EDITING USER PROFILE</h3>
          <form>
            <strong>Username:</strong>
              <input
                type='text'
                name='user_name'
                // value={formData.user_name}
                // onChange={handleChange}
                placeholder="Username">
              </input>
          </form>
        </>:
        <>
          <h3>User Profile</h3>
          <h1>{user.first_name}'s Profile</h1>
          <p>Name: {user.first_name} {user.last_name}</p>
          <p>Email: {user.email}</p>
          <p>Username: {user.user_name}</p>
          <img className="profile-photo" src={user.image_url} alt="Profile"/>
        </>
      }
    </div>
  )
}

export default Profile
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
        </>
      }
    </div>
  )
}

export default Profile
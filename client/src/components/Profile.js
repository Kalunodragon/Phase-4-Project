import React, { useContext } from "react";
import { userContext } from "./App";

function Profile(){
  const user = useContext(userContext)

  return(
    <>
      <h1>{user.first_name}'s Profile</h1>
    </>
  )
}

export default Profile
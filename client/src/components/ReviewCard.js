import React, { useContext } from "react";
import { userContext } from "./App";

function ReviewCard({ rev }){
  const user = useContext(userContext)

  return(
    <div className="review-div">
      <p>Thought created at: {rev.created_at} -- {rev.thoughts}</p>
      {user ? user.id === rev.user_id ? <button>Delete</button> : null : null}
      {user ? user.id === rev.user_id ? <button>Edit</button> : null : null}
    </div>
  )
}

export default ReviewCard
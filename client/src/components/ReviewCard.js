import React, { useContext, useState } from "react";
import { userContext } from "./App";
import ReviewEditForm from "./ReviewEditForm";

function ReviewCard({ rev, setFilteredReviews, setReviews }){
  const user = useContext(userContext)
  const [editState, setEditState] = useState(false)
  const tagName = ((user ? user.id : null) === rev.user_id ? "logged-in-div" : "review-div")
  const date = new Date(rev.created_at).toDateString()

  function handleDelete(){
    // console.log(rev.id)
    const deleteInfo = {"thought_id" : rev.id}
    const answer = window.confirm(`The following review will be deleted is that ok? : ${rev.thoughts}`)
    if(answer === true){
      fetch('/review',{
        method: "DELETE",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(deleteInfo)
      })
      .then((res)=>{
        if(res.ok){
          res.json()
          .then((d)=>{
            // console.log(d)
            setFilteredReviews(d)
          })
        }
      })
      .catch(err => window.alert(err))
    }
  }

  function showEdit(){
    setEditState(v => !v)
  }

  return(
    <div className={tagName}>
      {editState ?
        <ReviewEditForm rev={rev} setReviews={setReviews} setEditState={setEditState}/> :
        <p>Thought created: {date} -- {rev.thoughts}</p>}
      {user ? user.id === rev.user_id ? <button onClick={handleDelete}>Delete</button> : null : null}
      {user ? user.id === rev.user_id ? <button onClick={showEdit}>{editState ? "Hide Edit" : "Edit"}</button> : null : null}
    </div>
  )
}

export default ReviewCard
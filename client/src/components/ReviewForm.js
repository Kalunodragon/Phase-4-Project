import React, { useState } from "react";

function ReviewForm({ game, setReviews, handleState }){
  const emptyForm = {
    "game_id": game.id,
    "thoughts":""
  }

  const [formData, setFormData] = useState(emptyForm)

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
    fetch('/review',{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(formData)
    })
    .then((res) =>{
      if(res.ok){
        res.json()
        .then((d)=>{
          // console.log(d)
          setReviews(d)
          setFormData(emptyForm)
          handleState()
        })
      } else {
        window.alert("There was an issue with the review creation on the server, please try again!")
      }
    })
    .catch(err => window.alert(err))
  }

  return(
    <div className="review-form">
      <form onSubmit={handleSubmit}>
        <strong>Review: </strong>
        <textarea
          type='textarea'
          name='thoughts'
          rows={5}
          value={formData.thoughts}
          onChange={handleChange}
          >
        </textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ReviewForm
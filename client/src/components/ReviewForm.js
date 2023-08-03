import React, { useState } from "react";

function ReviewForm({ game, setReviews }){
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
          console.log(d)
          setReviews(d)
          setFormData(emptyForm)
        })
      } else {
        console.log("There was an issue with the Review creation")
      }
    })
    .catch(err => console.log(err))
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
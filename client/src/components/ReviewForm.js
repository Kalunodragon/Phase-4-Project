import React, { useState } from "react";

function ReviewForm({ game, setReviews, handleState }){
  const emptyForm = {
    "game_id": game.id,
    "thoughts":""
  }
  const [errors, setErrors] = useState(null)
  const errorsToDisplay = errors ? errors.map(err => <p key={err} className="error">{err}</p>) : null

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
    fetch('/reviews',{
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
          setReviews(d)
          setFormData(emptyForm)
          handleState()
        })
      } else {
        res.json()
        .then(d => {
          setErrors(d.errors)
        })
      }
    })
    .catch(err => window.alert(err))
  }

  return(
    <div className="review-form">
      {errorsToDisplay}
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
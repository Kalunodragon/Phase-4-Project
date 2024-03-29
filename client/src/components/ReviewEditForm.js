import React, { useState } from "react";

function ReviewEditForm({ rev, setReviews, setEditState }){
  const prefilledInfo = {
    "game_id": rev.game_id,
    "thoughts": rev.thoughts,
    "review_id": rev.id
  }
  const [formData, setFormData] = useState(prefilledInfo)

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
    const answer = window.confirm(`Change review from: ${rev.thoughts} \n\nTo: ${formData.thoughts}`)
    if(answer === true){
      fetch(`/reviews/${rev.id}`,{
        method: "PATCH",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(formData)
      })
      .then((res)=>{
        if(res.ok){
          res.json()
          .then((d)=>{
            setReviews(d)
            setEditState()
          })
        }
      })
      .catch((err) => window.alert(err))
    }
  }

  return(
    <div className="review-edit-div">
      <form onSubmit={handleSubmit}>
        <textarea
        className="textarea"
        type='text'
        name="thoughts"
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

export default ReviewEditForm
import React, { useState } from "react";

function ReviewForm({ game }){
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

  return(
    <div className="review-form">
      <form>
        <strong>Review: </strong>
        <input
          type='text'
          name='review'
          value={formData.thoughts}
          onChange={handleChange}
          >
        </input>
      </form>
    </div>
  )
}

export default ReviewForm
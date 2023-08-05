import React, { useState } from "react";

function ReviewEditForm({ rev }){
  const prefilledInfo = {
    "thoughts": rev.thoughts
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

  return(
    <div className="review-edit-div">
      <form>
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
    // Set up a form that is prefilled with review info that already exsists, then edit that form and resubmit it
  )
}

export default ReviewEditForm
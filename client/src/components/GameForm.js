import React, { useState } from "react";

function GameForm(){
  const emptyForm = {
    'game_title' : '',
    'platform' : '',
    'exclusive' : false,
    'release_year' : 2000
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

  function handleCheckbox(e){
    const newCheckbox = !formData.exclusive
    setFormData({
      ...formData,
      'exclusive' : newCheckbox
    })
  }

  return(
    <div>
      <form>
        <strong>Title: </strong>
          <input
            type='text'
            name='game_title'
            value={formData.game_title}
            onChange={handleChange}>
          </input>
        <br/>
        <strong>Platform: </strong>
          <input
            type="text"
            name='platform'
            value={formData.platform}
            onChange={handleChange}>
          </input>
        <br/>
        <strong>Exclusive: </strong>
          <input
            type='checkbox'
            name="exclusive"
            value={formData.exclusive}
            onChange={handleCheckbox}>
          </input>
        <br/>
        <strong>Release Year: </strong>
          <input
            type='number'
            
            name='release_year'
            value={formData.release_year}
            onChange={handleChange}>
          </input>
      </form>
    </div>
  )
}

export default GameForm
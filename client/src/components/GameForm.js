import React, { useState } from "react";

function GameForm({ handleAddGame, setGames }){
  const [errors, setErrors] = useState(null)
  const emptyForm = {
    'game_title' : '',
    'platform' : '',
    'exclusive' : false,
    'release_year' : 2000
  }
  const [formData, setFormData] = useState(emptyForm)

  const errorsToDisplay = errors ? errors.map(err => <p key={err} className="error">{err}</p>) : null

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

  function handleSubmit(e){
    e.preventDefault()
    
    // const formDataToSubmit = {
    //   'game_title' : formData.game_title,
    //   'platform' : formData.platform,
    //   'exclusive' : (formData.exclusive === false ? 0 : 1),
    //   'release_year' : formData.
    // }

    fetch('/game',{
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((res) => {
      if(res.ok){
        res.json()
        .then((d) => {
          setGames(d)
          setFormData(emptyForm)
          handleAddGame()
        })
      } else {
        res.json()
        .then(d => {
          setErrors(d.errors)
        })
      }
    })
    .catch((err) => window.alert(err))
  }

  return(
    <div>
      {errorsToDisplay}
      <form onSubmit={handleSubmit}>
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
        <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default GameForm
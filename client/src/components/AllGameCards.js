import React, { useEffect, useState } from "react";

function AllGameCards(){
  const [games, setGames] = useState(null)
  const [gameCheck, setGameCheck] = useState(false)

  useEffect(()=>{
    fetch('/game')
    .then((res) =>{
      if(res.ok){
        res.json()
        .then((d)=>{
          console.log(d)
          setGames(d)
          setGameCheck(true)
        })
      } else {
        setGameCheck(true)
        console.log("there was an error checking the games")
      }
    })
    .catch(err => console.log(err))
  },[])

  if(!gameCheck){
    return(
      <h1>Loading...</h1>
    )
  }

  return(
    <h1>List of game card components</h1>
  )
}

export default AllGameCards
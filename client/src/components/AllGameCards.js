import React, { useEffect, useState } from "react";
import GameCard from './GameCard'

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

  const gamesToDisplay = games.map(game => {
    return(
      <GameCard game={game} key={game.id}/>
    )
  })

  return(
    <>
      <h1>List of all games</h1>
      {gamesToDisplay}
    </>
  )
}

export default AllGameCards
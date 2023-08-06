import React, { useContext, useEffect, useState } from "react";
import GameCard from './GameCard'
import GameForm from "./GameForm";
import { userContext } from "./App";

function AllGameCards(){
  const user = useContext(userContext)
  const [games, setGames] = useState(null)
  const [gameCheck, setGameCheck] = useState(false)
  const [addGame, setAddGame] = useState(false)

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

  function handleAddGame(){
    setAddGame(v => !v)
  }

  function addGameToList(gameToAdd){
    setGames([...games, gameToAdd])
  }

  return(
    <>
      {addGame ? <h1>Game to add</h1> : <h1>List of all games</h1>}
      {user ?
        addGame ?
        <button onClick={handleAddGame}>Back To All Games</button> :
        <button onClick={handleAddGame}>Add Game</button>
      : null}
      {addGame ? <GameForm handleAddGame={handleAddGame} setGames={addGameToList}/> : gamesToDisplay}
      {/* {gamesToDisplay} */}
    </>
  )
}

export default AllGameCards
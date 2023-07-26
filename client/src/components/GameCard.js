import React from "react";

function GameCard({ game }){

console.log(game.game_title)

  return(
    <div>
      <h3>Title: {game.game_title}</h3>
      {game.exclusive ? <p>Platform exclusive</p> : null}
      <h4>Platform: {game.platform}</h4>
      <p>release year: {game.release_year}</p>
    </div>
  )
}

export default GameCard
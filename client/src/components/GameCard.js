import React from "react";
import ReviewCard from "./ReviewCard";

function GameCard({ game }){

  const reviews = game.reviews.map(rev =>{
    return(
      <ReviewCard rev={rev} key={rev.created_at}/>
    )
  })

  return(
    <div className="game-card">
      <h3>Title: {game.game_title}</h3>
      {game.exclusive ? <p>Platform exclusive</p> : null}
      <h4>Platform: {game.platform}</h4>
      <p>release year: {game.release_year}</p>
      <div className="review-div">
        <h4>Reviews</h4>
        {reviews}
      </div>
    </div>
  )
}

export default GameCard
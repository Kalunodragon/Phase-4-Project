import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function GameCard({ game }){
  const [reviewState, setReviewState] = useState(game.reviews)
  const [showCreateReview, setShowCreateReview] = useState(false)

  const reviewsToShow = reviewState.map(rev =>{
    return(
      <ReviewCard rev={rev} key={rev.created_at}/>
    )
  })

  function createReview(){
    setShowCreateReview(v => !v)
  }

  return(
    <div className="game-card">
      <h3>Title: {game.game_title}</h3>
      {game.exclusive ? <p>Platform exclusive</p> : null}
      <h4>Platform: {game.platform}</h4>
      <p>release year: {game.release_year}</p>
      <div className="review-div">
        <h4>Reviews</h4>
        {showCreateReview ?
          <button onClick={createReview}>Hide Create Review</button> :
          <button onClick={createReview}>Create Review</button>}
        {showCreateReview ? <ReviewForm game={game}/> : null}
        {reviewsToShow}
      </div>
    </div>
  )
}

export default GameCard
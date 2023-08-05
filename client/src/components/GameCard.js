import React, { useContext, useState } from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { userContext } from "./App";

function GameCard({ game }){
  const user = useContext(userContext)
  const [reviewState, setReviewState] = useState(game.reviews)
  const [showCreateReview, setShowCreateReview] = useState(false)

  const reviewsToShow = reviewState.map(rev =>{
    return(
      <ReviewCard
        rev={rev}
        key={rev.created_at} 
        setFilteredReviews={setFilteredReviews} 
        setReviews={filterAndAddReview}
      />
    )
  })

  function createReview(){
    setShowCreateReview(v => !v)
  }

  function setReviews(newReview){
    const newState = [...reviewState, newReview]
    setReviewState(newState)
  }

  function setFilteredReviews(revToRemove){
    const newRevState = reviewState.filter(rev => rev.id !== revToRemove.id)
    setReviewState(newRevState)
  }

  function filterAndAddReview(newReview){
    const filtered = reviewState.filter(rev => rev.id !== newReview.id)
    const newState = [...filtered, newReview]
    setReviewState(newState)
  }

  return(
    <div className="game-card">
      <h3>Title: {game.game_title}</h3>
      {game.exclusive ? <p>Platform exclusive</p> : null}
      <h4>Platform: {game.platform}</h4>
      <p>release year: {game.release_year}</p>
      <div className="review-div">
        <h4>Reviews</h4>
        {user ? 
          showCreateReview ?
          <button onClick={createReview}>Hide Create Review</button> :
          <button onClick={createReview}>Create Review</button>
        : null}
        {showCreateReview ? <ReviewForm game={game} setReviews={setReviews} handleState={createReview}/> : null}
        {reviewsToShow}
      </div>
    </div>
  )
}

export default GameCard
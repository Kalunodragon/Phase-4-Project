class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    if(session[:user_id])
      thought = Review.create(user_id: session[:user_id], game_id: Game.find(params[:game_id]), thoughts: params[:thoughts])
      render json: thought, status: :created
    else
      render json: { errors: "Please sign in to create a review" }, status: :unauthorized
    end
  end
end

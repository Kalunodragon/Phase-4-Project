class ReviewsController < ApplicationController
  skip_before_action :auth, only: :index

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
      game = Game.find(params[:game_id])
      thought = Review.create(user_id: session[:user_id], game_id: game.id, thoughts: params[:thoughts])
      render json: thought, status: :created
  end

  def destroy
    thought = Review.find(params[:thought_id])
    if(thought.user_id == session[:user_id])
      thought.destroy
      render json: thought, status: :ok
    else
      render json: { errors: "Only the user that created this review can delete this review." }, status: :unauthorized
    end
  end
end

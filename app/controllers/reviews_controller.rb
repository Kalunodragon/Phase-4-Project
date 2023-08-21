class ReviewsController < ApplicationController
  skip_before_action :auth, only: :index

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
      game = Game.find(params[:game_id])
      thought = @current_user.reviews.create(game_id: game.id, thoughts: params[:thoughts])
      render json: thought, status: :created
  end

  def destroy
    # thought = Review.find_by(id: params[:id])
    thought = @current_user.reviews.find_by(id: params[:id])
    if(thought)
      thought.destroy
      render json: thought, status: :ok
    else
      render json: { errors: "Only the user that created this review can delete this review." }, status: :unauthorized
    end
  end

  def update
    game = Game.find(params[:game_id])
    review = @current_user.reviews.find_by(id: params[:id])
    if(review)
      review.update(game_id: game.id, thoughts: params[:thoughts])
    end
    # review = Review.find_by(id: params[:id])
    render json: review, status: :ok
  end

end

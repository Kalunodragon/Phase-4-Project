class GamesController < ApplicationController
  skip_before_action :auth, only: :index

  # def many_reviews
  #   # finding all games that have at least :num reviews
  #   games = Game.all.select {|game| game.reviews.size >= params[:num].to_i }
  #   render json: games
  # end

  def create
      game = Game.create!(game_params)
      render json: game, status: :created
  end

  def index
    games = Game.all.order("game_title ASC")
    render json: games
  end

  private

  def game_params
    params.permit(:game_title, :platform, :exclusive, :release_year)
  end
end

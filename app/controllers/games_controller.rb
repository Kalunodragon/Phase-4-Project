class GamesController < ApplicationController
  skip_before_action :auth

  def create
    if(session[:user_id])
      game = Game.create!(game_params)
      render json: game, status: :created
    else
      render json: { errors "Please log-in to create a game" }, status: :unauthorized
    end
  end

  def index
    games = Game.all
    render json: games
  end

  private

  def game_params
    permit.params(:game_title, :platform, :exclusive, :release_year)
  end
end

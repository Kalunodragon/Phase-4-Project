class GamesController < ApplicationController
  skip_before_action :auth, only: :index

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

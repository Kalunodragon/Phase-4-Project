class GamesController < ApplicationController

  def create

  end

  def index
    games = Game.all
    render json: games
  end
end

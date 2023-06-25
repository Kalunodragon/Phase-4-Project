class GameSerializer < ActiveModel::Serializer
  attributes :id, :game_title, :platform, :release_year, :exclusive

  has_many :reviews
end

class GameSerializer < ActiveModel::Serializer
  attributes :id, :game_title, :platform, :release_year

  has_many :reviews
end

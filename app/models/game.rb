class Game < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  validates :game_title, uniqueness: true, presence: true
  validates :platform, :release_year, presence: true
end

class Game < ApplicationRecord
  has_many :reviews
  has_many :owners

end

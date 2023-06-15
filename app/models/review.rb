class Review < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :game
end

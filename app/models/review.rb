class Review < ApplicationRecord
  belongs_to :user, dependant: :destroy
  belongs_to :game, dependant: :destroy
end

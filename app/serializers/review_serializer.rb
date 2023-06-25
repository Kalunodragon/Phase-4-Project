class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :thoughts, :created_at, :updated_at, :game_id, :user_id

  belongs_to :user
  belongs_to :game
end

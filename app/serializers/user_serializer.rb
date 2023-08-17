class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :email, :first_name, :last_name, :image_url, :bio

  # has_many :
  # games array for showing all games reviews
  has_many :games
end

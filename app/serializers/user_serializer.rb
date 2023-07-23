class UserSerializer < ActiveModel::Serializer
  attributes :id, :user_name, :email, :first_name, :last_name, :image_url, :bio

  has_many :reviews
  has_many :games, through: :reviews
end

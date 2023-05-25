class User < ApplicationRecord
  has_secure_password

  has_many :reviews
  has_many :games

  validates :user_name, :email, uniqueness: true
  validates :user_name, :first_name, :last_name, :image_url, :email, :password, presence: true
end

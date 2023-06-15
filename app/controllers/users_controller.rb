class UsersController < ApplicationController
  skip_before_action :auth, only: :create

  def create
    if(params[:password] == params[:password_confirmation])
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    else 
      render json: { errors: "Please try again, can't proccess." }, status: :unprocessable_entity
    end
  end

  def show
    render json: @current_user
  end

  private
  
  def user_params
    params.permit(:user_name, :first_name, :last_name, :email, :password, :password_confirmation, :image_url, :bio)
  end
end

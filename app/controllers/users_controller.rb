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
    if(@current_user)
      render json: @current_user
    else
      render json: { errors: "No user logged in" }, status: :unprocessable_entity
    end
  end

  def update
    user = find_user
    if (params[:password] == params[:password_confirmation])
      user.update(user_params)
      render json: user, status: :ok
    else
      render json: { errors: "Please make sure passwords match and try again" }, status: :unprocessable_entity
    end
  end

  def destroy
    user = find_user
    user.destroy
    render json: user, status: :ok
  end

  private
  
  def user_params
    params.permit(:user_name, :first_name, :last_name, :email, :password, :password_confirmation, :image_url, :bio)
  end

  def find_user
    User.find(session[:user_id])
  end

end

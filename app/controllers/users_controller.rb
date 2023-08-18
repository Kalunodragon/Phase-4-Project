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
      user = @current_user
      render json: user, serializer: UserSerializer
      # render json: user, include: [:reviews, :games]
    else
      render json: { errors: "No user logged in" }, status: :no_content
    end
  end

  def update
    user = find_user
    if (params[:password] == params[:password_confirmation])
      user.update!(user_params)
      render json: user, status: :ok
    else
      render json: { errors: "Please make sure passwords match and try again" }, status: :unprocessable_entity
    end
  end

  def destroy
    user = find_user
    if(session[:user_id] === user.id)
      user.destroy
      render json: user, status: :ok
    else
      render json: { errors: "Only a User can delete their own account!" }, status: :unauthorized
    end
  end

  private
  
  def user_params
    params.permit(:user_name, :first_name, :last_name, :email, :password, :password_confirmation, :image_url, :bio)
  end

  def find_user
    User.find_by(id: params[:id])
  end

end

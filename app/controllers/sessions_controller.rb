class SessionsController < ApplicationController
  skip_before_action :auth, only: :create

  def create
    user = User.find_by(user_name: params[:user_name])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { error: "Invalid Username and/or Password, please try again." }, status: :unauthorized
    end
  end

  def destroy
    session.delete :user_id
    head :no_content
  end
end

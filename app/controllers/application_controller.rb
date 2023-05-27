class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_not_processable
  before_action :auth

  private

  def auth
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: "No authorization found" }, status: :unauthorized unless @current_user
  end

  def render_not_processable(item)
     render json: { errors: item.record.errors.full_messages }, status: :unprocessable_entity
  end

end

Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # User Routes
  post "/sign_up", to: "users#create"
  get "/current_user", to: "users#show"
  post "/log_in", to: "sessions#create"
  delete "/log_out", to: "sessions#destroy"

end

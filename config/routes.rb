Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # User Routes
  post "/user", to: "users#create"
  get "/user", to: "users#show"
  patch "/user", to: "users#update"
  delete "/user", to: "users#destroy"

  # Sessions Routes
  post "/log_in", to: "sessions#create"
  delete "/log_out", to: "sessions#destroy"

  # reviews Routes
  post "/review", to: "reviews#create"
  get "/review", to: "reviews#index"
  delete "/review", to: "reviews#destroy"
  patch "/review", to: "reviews#update"

  # games Routes
  get "/game", to: "games#index"
  post "/game", to: "games#create"

end

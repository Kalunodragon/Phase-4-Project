Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
# Move over to rescorces and restful routes (plurals)
# upgrade to V6 Dom

  # User Routes
  resources :users, only: [:create, :show, :update, :destroy]
  # post "/users", to: "users#create"
  # get "/users", to: "users#show"
  # patch "/users/:id", to: "users#update"
  # delete "/users/:id", to: "users#destroy"
  
  # Sessions Routes
  get "/user", to: "users#show"
  post "/log_in", to: "sessions#create"
  delete "/log_out", to: "sessions#destroy"

  # reviews Routes
  post "/review", to: "reviews#create"
  get "/review", to: "reviews#index"
  delete "/review", to: "reviews#destroy"
  patch "/review", to: "reviews#update"

  # games Routes
  resources :games, only: [:index, :create]
  # get "/games", to: "games#index"
  # post "/games", to: "games#create"

end

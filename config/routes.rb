Rails.application.routes.draw do
  

  #FIXME: To delete the routes below 
  resources :tasks
  get "/users", to: "users#index"
  
  # JOINER ROUTES
  resources :tasks_joiners
  resources :group_events
  resources :user_events
  resources :group_joiners

  # MAIN ROUTES
  resources :users, only:[:update, :show, :destroy, :create] do
    resources :calendars
    resources :groups
    resources :events
    resources :tasks
    resources :tasks_joiners
    resources :user_events
    resources :group_joiners
  end

  resources :groups do
    resources :events
    resources :tasks
    resources :users
    resources :tasks_joiners
    resources :group_events
    resources :group_joiners
  end

  resources :events do
    resources :groups
    resources :users
  end

  # USER AUTHORIZATION CONTROLS
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  
end

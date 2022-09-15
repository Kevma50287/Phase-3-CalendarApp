Rails.application.routes.draw do

  resources :tasks_joiners

  resources :user_events

  resources :group_joiners

  resources :users, only:[:update, :show, :destroy, :create] do
    resources :calendars
    resources :groups
    resources :events
    resources :tasks
  end

  resources :groups

  resources :events


  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  #FIXME: To delete the routes below 
  resources :tasks
  get "/users", to: "users#index"
end

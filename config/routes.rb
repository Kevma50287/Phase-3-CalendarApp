Rails.application.routes.draw do
  root 'users#index'

  resources :tasks_joiners

  resources :user_events

  resources :group_joiners

  resources :users do
    resources :calendars
    resources :groups
    resources :events
    resources :tasks
  end

  resources :groups
end

Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :poems, only: [:index, :create, :show, :destroy]
    resources :stanzas, only: [:create, :show, :destroy]
  end
end

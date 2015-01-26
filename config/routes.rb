Rails.application.routes.draw do
  resources :videos

  resources :mylists do
    member do
      get 'info'
    end
  end

  root 'mock#top'
  get '/top', to: 'mock#top'
  get '/home', to: 'mock#home'
end

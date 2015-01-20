Rails.application.routes.draw do
  resources :videos

  resources :mylists

  root 'mock#top'
  get '/top', to: 'mock#top'
  get '/home', to: 'mock#home'
end

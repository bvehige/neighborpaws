Rails.application.routes.draw do
  
  resources :dogs
  resources :neighborhoods do
    resources :dogs
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

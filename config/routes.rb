# frozen_string_literal: true

Rails.application.routes.draw do
  resources :tasks, except: %i[new edit], param: :slug
  resources :users, only: %i[create index]
  resource :sessions, only: %i[create destroy]
  resources :comments, only: :create

  root "home#index"
  get "*path", to: "home#index", via: :all
end


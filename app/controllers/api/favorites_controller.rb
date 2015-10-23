class Api::FavoritesController < ApplicationController
  before_action :ensure_login

  def create
    @fav = current_user.favorites.new({
      poem_id: params[:poem_id]
    })

    if @fav.save
      render json: {
        fav_object: @fav,
        fav_status: true,
        favoritor: current_user.username
      }
    end
  end

  def destroy
    @fav = Favorite.find(params[:id])
    @fav.destroy
    render json: {
      fav_object: nil,
      fav_status: false,
      favoritor: current_user.username
    }
  end
end

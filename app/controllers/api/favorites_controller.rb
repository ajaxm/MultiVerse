class Api::FavoritesController < ApplicationController
  def create
    @fav = current_user.favorites.new({
      poem_id: params[:poem_id]
    })

    if @fav.save
      render json: {fav_status: true}
    end
  end

  def destroy
    @fav = Favorite.find(params[:id])
    @fav.destroy
    render json: {fav_status: false}
  end
end

class Api::FavoritesController < ApplicationController
  def create
    @fav = current_user.favorites.new({
      poem_id: params[:poem_id]
    })

    if @fav.save
      poem = @fav.poem
      render '/api/poems/_poem', locals: {poem: poem}
    end
  end

  def destroy
  end
end

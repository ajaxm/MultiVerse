class Api::PoemsController < ApplicationController
  def index
    if params[:status].to_sym == :complete
      @poems = current_user.completed_contributed_poems
    else
      @poems = Poem.get_incomplete_poems
    end
  end

  def create
    @poem = current_user.poems.new(poem_params)
    if @poem.save
      render '/api/poems/_poem', locals: {poem: @poem}
    else
      render json: @poem.errors.full_messages, status: :unprocessible_entity
    end
  end

  def show
    @poem = Poem.includes(:author, stanzas: :author)
                .where('id = ?', params[:id])
                .first
    if @poem
      render :show
    else
      @poem = {title: 'N/A', stanzas: []}
      render :show
    end
  end

  def destroy
    @poem = Poem.find_by_id(params[:id])
    if @poem
      title = @poem.title
      @poem.destroy
      render json: "#{title} deleted."
    else
      render json: "Poem not found.", status: :unprocessible_entity
    end
  end

  private
  def poem_params
    params.require(:poem).permit(:title, :num_stanzas, :first_stanza)
  end
end

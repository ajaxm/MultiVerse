class Api::PoemsController < ApplicationController
  def index
    @poems = Poem.includes(:author, :stanzas)
  end

  def create
    @poem = current_user.poems.new(poem_params)
    if @poem.save
      render json: @poem
    else
      render  json: @poem.errors.full_messages, status: :unprocessible_entity
    end
  end

  def show
    @poem = Poem.includes(:author, :stanzas)
                .includes(stanzas: :author)
                .where('id = ?', params[:id])
                .first
    if @poem
      render :show
    else
      render json: "Poem not found.", status: :unprocessible_entity
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
    param.require(:poem).permit(:title, :num_stanzas, :first_stanza)
  end
end

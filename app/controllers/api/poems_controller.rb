class Api::PoemsController < ApplicationController
  def index
    @poems = Poem.all
    render json: @poems
  end

  def create
    @poem = current_user.poems.new(poem_params)
    if @poem.save!
      render json: @poem
    else
      render  json: @poem.errors.full_messages,
              status: :unprocessible_entity
    end
  end

  def show
    @poem = Poem.find_by_id(params[:id])
    if @poem
      render json: @poem
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

class Api::StanzasController < ApplicationController

  def create
    poem = Poem.find_by_id(params[:id])
    @stanza = poem.stanzas.new(
      body: stanza_body, order: poem.length + 1)
    @stanza.order = poem.length + 1
    @stanza.author_id = current_user.id
    if @stanza.save!
      render json: @stanza
    else
      render  json: @stanza.errors.full_messages,
              status: :unprocessible_entity
    end
  end

  private
  def stanza_params
    params.require(:stanza).permit(:body)
  end

  def stanza_body
    stanza_params[:body]
  end
end

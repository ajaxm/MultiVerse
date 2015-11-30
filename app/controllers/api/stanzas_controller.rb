class Api::StanzasController < ApplicationController
  before_action :ensure_login

  def create
    poem = Poem.find_by_id(params[:poem_id])
    @stanza = poem.stanzas.new(
      body: params[:body], order: poem.length + 1, author_id: current_user.id
    )
    if @stanza.save
      poem = @stanza.poem
      poem.update(updated_at: Time.now)
      render '/api/poems/_poem', locals: {poem: poem}
    else
      render json: @stanza.errors.full_messages, status: :unprocessible_entity
    end
  end
end

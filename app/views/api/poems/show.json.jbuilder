json.title @poem.title
json.author_id @poem.author_id
@poem.stanzas.each do |stanza|
  json.set! stanza.order do
    json.(stanza, :body)
    json.author stanza.author.username  ### N+1 QUERY?
    json.time stanza.created_at
  end
end

json.array! @poems do |poem|
  json.title poem.title
  json.author poem.author.username
  json.first_stanza poem.stanzas.first.body
end

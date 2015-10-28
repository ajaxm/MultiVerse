json.array! @poems do |poem|
  json.id poem.id
  json.title poem.title
  json.author poem.author.username
  json.first_stanza poem.stanzas.first.body
  json.last_line poem.last_stanza.lines.last
  json.contributed poem.is_contributor?(current_user)
  json.favorited poem.is_favoritor?(current_user)
  json.last_author_id poem.last_stanza.last.author_id
  json.num_contribution poem.stanzas.where(author: current_user).count.to_words
end

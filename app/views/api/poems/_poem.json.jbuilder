json.id poem.id
json.title poem.title
json.author poem.author.username
json.stanzas {json.array! poem.stanzas.sort_by(&:order) do |stanza|
  json.id stanza.id
  json.order stanza.order
  json.author stanza.author.username
  json.body stanza.body
end}
json.last_line poem.stanzas.last.lines.last
json.last_author_id poem.stanzas.sort_by(&:order).last.author_id
json.favorited poem.is_favoritor?(current_user)
json.fav current_user.favorites.find_by_poem_id(poem.id)

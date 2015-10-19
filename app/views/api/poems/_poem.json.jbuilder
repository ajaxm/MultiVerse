json.id poem.id
json.title poem.title
json.author poem.author.username
json.stanzas {json.array! poem.stanzas.order(:order) do |stanza|
  json.id stanza.id
  json.order stanza.order
  json.author stanza.author.username
  json.body stanza.body
end}
json.last_line poem.stanzas.last.lines.last
json.last_author_id poem.stanzas.order(:order).last.author_id

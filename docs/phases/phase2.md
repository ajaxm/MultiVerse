### Phase 2: Flux Architecture, React views

## React Components
* Index
 - PoemListItem
* Poem
    - StanzaForm
* Archive
  - PoemListItem
* ArchivePoem
* PoemForm

## Rails Views
* _poem.json.jbuilder

## Stores
* Poem

## Actions
* .receiveAllPoems
* .receiveOnePoem

## ApiUtil
* .fetchAllPoems(status) (include *all* associated stanzas; argument indicates completion status)
* .fetchOnePoem (include *all* associated Stanzas)
* .createPoem
* .createStanza

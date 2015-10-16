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

## Stores
* Poem

## Actions
* .receiveAllPoems
* .receiveOnePoem
* .deletePoem

## ApiUtil
* .fetchAllPoems(status) (include *all* associated stanzas; argument indicates completion status)
* .fetchOnePoem (include *all* associated Stanzas)
* .createPoem
* .destroyPoem
* .createStanza

### Phase 1: User Authentication, Poem/Stanza Models, JSON API

## Models
* User
* Poem
* Stanza

## Controllers
* UsersController (create, new)
* SessionsController (create, new, destroy)
* Api::PoemsController (index, create, show, destroy)
* Api::StanzasController (create, destroy)

## Rails Views
* users/new.html.erb
* session/new.html.erb
* poems/index.json.jbuilder
* poems/show.json.jbuilder

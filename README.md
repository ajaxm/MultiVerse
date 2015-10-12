# MultiVerse

Possibilities in Poetry

[Heroku link][heroku]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

MultiVerse is a web application for collaborative poetry writing built using
Ruby on Rails and React.js.

MultiVerse allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, and delete poems
- [ ] Contribute stanzas to poems
- [ ] Favorite completed poems
- [ ] Comment on completed poems

## Implementation Timeline

### Phase 1: User Authentication, Poem/Stanza Models, JSON API (1 day)
* BCrypt authentication and sessions
* Login page and basic home page after login (empty container, temporary logout
  button)
* Poem and Stanza models in Rails
* API controller for Poems

*At the end of Phase 1, users can sign up and login/logout.*  
No Stanzas controller; they will only be fetched as part of their associated
Poem.  
When a Poem is created, it uses the contents of its "first_stanza" column to
create a new Stanza object. "first_stanza" will also serve as a preview when the
poem is completed.  
Stanzas will keep track of their "last_line."  
Poems and Stanzas cannot be edited after creation, although Poems can be deleted
entirely.  

[More details](./docs/phases/phase1.md)  
Relevant wireframes:
* [Sign up](./docs/wireframes/new_user.png)
* [Login](./docs/wireframes/new_session.png)


### Phase 2: Flux Architecture, React views (3 days)
* React router
* Poem store, actions for create/read/destroy
* React components: Index, Poem, Stanza

*At the end of Phase 2, Poems can be created, viewed, and destroyed in the
browser, and stanzas can be added to poems.*  
Home page (Index) shows all poems created by or involving the user.  
No distinction is yet made between complete and incomplete poems, though users
still specify poem length on creation.  

[More details](./docs/phases/phase2.md)  
Relevant wireframes:
* [New poem](./docs/wireframes/new_poem.png)
* [New stanza](./docs/wireframes/new_stanza.png)

### Phase 3: Navigation, Archive, Page Styles (2 days)
* Persistent navigation sidebar: Home, Archive, New, Logout
* Archive page showing completed poems
* Endless scrolling for homepage
* Basic page design and arrangement

*At the end of Phase 3, Poems are separated by completion status (in Home or
  Archive).*  
Users can read archived poems and contribute to incomplete poems.  

[More details](./docs/phases/phase3.md)  
Relevant wireframes:
* [Home page](./docs/wireframes/home.png)
* [Archive page](./docs/wireframes/archive.png)

### Phase 4: Favorites, Comments (1 day)
* Favorite, comment functionality for completed poems
* Favorites tab in Archive page
* Comments shown below completed poems

[More details](./docs/phases/phase4.md)  

*At the end of Phase 4, users can comment on and favorite completed poems.*

### Phase 5: Detailed Styling and Seeding (1 day)
* Create seed data
* Finalize page appearance, polish

*At the end of Phase 5, the application is complete and self-contained.*

### Phase 6: Bonus Features (1 day)
* Attempt to complete one ore more bonus features

### Bonus Features
- [ ] Notifications for contributions, favorites, and comments
- [ ] Toggle on/off to show authors and separation of each Stanza in a Poem
- [ ] Users can customize font for their authored stanzas
- [ ] Users can "branch" completed poems by reverting to an incomplete stage and

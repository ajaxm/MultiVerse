# MultiVerse

[Heroku link.](http://multi-verse.herokuapp.com)

## Minimum Viable Product

MultiVerse is a web application for collaborative poetry writing (based on the
  "Exquisite Corpse" method) built using
Ruby on Rails and React.js.

MultiVerse allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, and delete poems
- [ ] Contribute stanzas to poems
- [ ] Favorite completed poems
- [ ] Comment on completed poems

## Design Docs

* [Wireframes](./docs/views.md)
* [Database Schema](./docs/schema.md)

## Implementation Timeline

### Phase 1: User Authentication, Poem/Stanza Models, JSON API (2 days)
* BCrypt authentication and sessions
* Login page and basic home page after login (empty container, temporary logout
  button)
* Rails models for Poems, Stanzas
* API controllers for Poems, Stanzas

*At the end of Phase 1, users can sign up and login/logout.*   
When a Poem is created, it uses the contents of its "first_stanza" column to
create a new Stanza object. "first_stanza" will also serve as a preview when the
poem is completed.  
Stanzas will keep track of their "last_line."  
Poems and Stanzas cannot be edited after creation, although Poems can be deleted
entirely.  

[Component details.](./docs/phases/phase1.md)

### Phase 2: Flux Architecture, React views (3 days)
* React router
* Poem store, actions for create/read/destroy
* React components: Index, Poem, Stanza

*At the end of Phase 2, Poems can be created, viewed, and destroyed in the
browser, and stanzas can be added to poems.*  
Home page (Index) shows all poems created by or involving the user.  
No distinction is yet made between complete and incomplete poems, though users
still specify poem length on creation.  

[Component details.](./docs/phases/phase2.md)


### Phase 3: Navigation and Page Style (1 day)
* Persistent navigation sidebar: Home, Archive, New, Logout
* Separate archive and home pages
* Endless scrolling implementation
* Basic cleanup of page design

*At the end of Phase 3, Poems are separated by completion status (in Home or
  Archive).*  
Users can read archived poems and contribute stanzas to incomplete poems.  

A NavBar React component is the only new component required for Phase 3.

### Phase 4: Favorites, Comments (1 day)
* Rails models for Favorites, Comments
* API Controllers for Favorites, Comments
* Favorites tab in Archive page
* Comments shown below completed poems

*At the end of Phase 4, users can comment on and favorite completed poems.*

[Component details.](./docs/phases/phase4.md)

### Phase 5: Detailed Styling and Seeding (1 day)
* Create seed data
* Finalize page appearance, polish
* Decorative quotes for login screen

*At the end of Phase 5, the application is complete and self-contained.*

### Phase 6: Bonus Features (1 day)
*At the end of Phase 6, one or more bonus features is complete.*

Bonus Features (tentative order of priority):  
- [ ] Notifications for contributions, favorites, and comments
- [ ] Toggle on/off to show authors and separation of each stanza in a poem
- [ ] Users can customize font for their authored stanzas
- [ ] Users can "branch" completed poems by reverting to an incomplete stage and
 adding new stanzas at that stage

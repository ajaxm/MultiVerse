# MultiVerse

[Heroku link.](http://multi-verse.herokuapp.com)

## Minimum Viable Product

MultiVerse is a web application for collaborative poetry writing (based on the
  "Exquisite Corpse" method) built using
Ruby on Rails and React.js.

MultiVerse allows users to:

- [x] Create an account
- [x] Log in / Log out
- [ ] Create poems
- [x] Contribute stanzas to poems
- [ ] Delete poems
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
When a Poem is created, it uses the contents of the "first_stanza" param to
create a new Stanza object.  
Poems and Stanzas cannot be edited after creation, although Poems can be deleted
entirely.  

[Component details.](./docs/phases/phase1.md)

(Phase 1 completed in 1 day. October 13, 2015.)

### Phase 2: Flux Architecture, React views (3 days)
* React router
* Poem store, actions for create/read/destroy
* React components: Index, Archive, Poem, ArchivePoem, StanzaForm, PoemForm
* Separate archive and home pages

*At the end of Phase 2, Poems can be created, viewed, and destroyed in the
browser, and stanzas can be added to poems.*  
Poems are separated by completion status (in Home or Archive).

[Component details.](./docs/phases/phase2.md)


### Phase 3: User Focus and Page Style (1 day)
* Persistent navigation sidebar: Home, Archive, New, Logout
* Accessibility changes based on current user
* Endless scrolling implementation
* Basic cleanup of page design

*At the end of Phase 3, the application only shows poems involving the current user.*  
The archive shows users all completed poems to which they contributed a stanza.  
Users can contribute stanzas to any incomplete poems provided they did not the write the most recent stanza.  

A NavBar React component is the only new component required for Phase 3.

### Phase 4: Favorites, Comments (1 day)
* Rails models for Favorites, Comments
* API Controllers for Favorites, Comments
* Favorites tab in Archive page
* Comments shown below completed poems

*At the end of Phase 4, users can comment on and favorite completed poems.*

[Component details.](./docs/phases/phase4.md)

### Phase 5: Detailed Styling and Seeding (1 day)
* Organize and expand seed data
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

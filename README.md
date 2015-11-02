# MultiVerse

[Live link.](http://themultiverse.io)

## Minimum Viable Product

MultiVerse is a web application for collaborative poetry writing (based on the
  "Exquisite Corpse" method) built using
Ruby on Rails and React.js.

MultiVerse allows users to:

- [x] Create an account
- [x] Log in / Log out
- [x] Create and read poems
- [x] Contribute stanzas to poems
- [x] Favorite completed poems

## Design Docs

* [Wireframes](./docs/views.md)
* [Database Schema](./docs/schema.md)

## Implementation Timeline

### Phase 1: User Authentication, Poem/Stanza Models, JSON API
* BCrypt authentication and sessions
* Login page and basic home page after login (empty container, temporary logout
  button)
* Rails models for Poems, Stanzas
* API controllers for Poems, Stanzas

*At the end of Phase 1, users can sign up and login/logout.*   
When a Poem is created, it uses the contents of the "first_stanza" param to
create a new Stanza object.  
Poems and Stanzas cannot be edited after creation.

[Component details.](./docs/phases/phase1.md)

(Phase 1 completed on October 13, 2015.)

### Phase 2: Flux Architecture, React views
* React router
* Poem store, actions for create/read
* React components: Home, Archive, Poem, ArchivePoem, StanzaForm, PoemForm
* Separate archive and home pages

*At the end of Phase 2, Poems can be created and viewed in the
browser, and stanzas can be added to poems.*  
Poems are separated by completion status (in Home or Archive).

[Component details.](./docs/phases/phase2.md)

(Phase 2 completed on October 16, 2015.)

### Phase 3: User Focus and Page Style
* Persistent navigation: Home, Archive, New, Logout
* Changes based on current user
* Infinite scrolling implementation
* Basic cleanup of page design

*At the end of Phase 3, the poems are marked according to the current user.*  
The archive shows users all completed poems and users' contributions to each.  
The home page shows all incomplete poems; users can contribute stanzas to
any of these provided they did not the write the most recent stanza.  
Both the home page and the archive page have infinite scrolling enabled,
which reduces load time.  

[Component details.](./docs/phases/phase3.md)

(Phase 3 completed on October 20, 2015.)

### Phase 4: Favorites
* Rails models for Favorites
* API Controllers for Favorites

*At the end of Phase 4, users can favorite completed poems.*

[Component details.](./docs/phases/phase4.md)

(Phase 4 completed on October 21, 2015.)

### Phase 5: Styling, Seeding, Testing
* Organize and expand seed data
* Set up detailed styling patterns
* Refactor based on user testing

*At the end of Phase 5, the application is complete and self-contained.*  
"About" page added with corresponding tab in Navbar.

[Component details.](./docs/phases/phase5.md)

(Phase 5 completed on October 25, 2015.)

### Phase 6: Bonus Features and Additional Styling
* Archived poems show the various contributions from users.
* Finalize page appearance, polish

*At the end of Phase 6, one or more bonus features is complete.*

(Phase 6 completed on October 27, 2015.)

### Bonus Features for Future Implementation:  
- [ ] Notifications for contributions and favorites
- [x] Toggle on/off to show authors and separation of each stanza in a poem
- [ ] Users can customize font for their authored stanzas
- [ ] Users can "branch" completed poems by reverting to an incomplete stage and
 adding new stanzas at that stage

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all
Poem.destroy_all
Stanza.destroy_all
Favorite.destroy_all

# Dir[File.join(Rails.root, 'db', 'seeds', '*.rb')].sort.each { |seed| load seed }

############################################################
### USERS

maryoliver = User.create(
  username: 'mary0liver',
  password: 'thesummerdayoliver'
)
billycollins = User.create(
  username: 'billy_collins',
  password: 'aimlesslovecollins'
)
roberthass = User.create(
  username: 'bobhass',
  password: 'happinesshass'
)
richardsiken = User.create(
  username: 'rsiken',
  password: 'scheherazadesiken'
)
markstrand = User.create(
  username: 'markstrand',
  password: 'thedressstrand'
)
sharonolds = User.create(
  username: 'sharonolds',
  password: 'fortyoneolds'
)
terrancehayes = User.create(
  username: 'terrancehayes',
  password: 'boxcarhayes'
)
margaretatwood = User.create(
  username: 'margaret_a',
  password: 'sirensongatwood'
)
eavanboland = User.create(
  username: 'eavan_boland',
  password: 'quarantineboland'
)
charlessimic = User.create(
  username: 'csimic',
  password: 'glassofmilksimic'
)

############################################################
### POEMS

summerday = Poem.create(
  title: 'The Summer Day',
  author: maryoliver,
  first_stanza: "Who made the world?
    Who made the swan, and the black bear?",
  num_stanzas: 7
)
aimlesslove = Poem.create(
  title: 'Aimless Love',
  author: billycollins,
  first_stanza: "This morning as I walked along the lakeshore,
    I fell in love with a wren,",
  num_stanzas: 6
)
boxcar = Poem.create(
  title: 'Boxcar',
  author: terrancehayes,
  first_stanza: "Black as snow & ice as cool
    Miles stood horn-handed while
    John so&soloed",
  num_stanzas: 8
)
thedress = Poem.create(
  title: 'The Dress',
  author: markstrand,
  first_stanza: "Lie down on the bright hill
    with the moon's hand on your cheek,",
  num_stanzas: 5
)

############################################################
### STANZAS

Stanza.create([
  { body: "The miniature orange tree,
      the clean white shirt, the hot evening shower?",
    author: billycollins,
    poem: summerday,
    order: 2
  },
  { body: "The notebook, turned to a new page,
      was blank except for a faint blue idea of order.",
    author: roberthass,
    poem: summerday,
    order: 3
  },
  { body: "I don't know exactly what a prayer is.
      I do know how to pay attention, how to fall down
      into the grass, how to kneel down in the grass,",
    author: maryoliver,
    poem: summerday,
    order: 4
  },
  { body: "but my heart is always propped up
      in a field on its tripod,
      ready for the next arrow,",
    author: billycollins,
    poem: summerday,
    order: 5
  },
  {
    body: "and the days are bright red,
      and every time we kiss there is
      another apple to slice into pieces––",
    author: richardsiken,
    poem: summerday,
    order: 6
  },
  {
    body: "tell me, what is it you plan to do
      with your one wild and precious life?",
    author: maryoliver,
    poem: summerday,
    order: 7
  }
])

Stanza.create([
  { body: "and the owl arranging all of the night,
      which is his wisdom, and the poem
      filling your pillow with its blue feathers.",
    author: markstrand,
    poem: aimlesslove,
    order: 2
  },
  { body: "Tell me, what else should I have done?
      Doesn't everything die at last, and too soon?",
    author: maryoliver,
    poem: aimlesslove,
    order: 3
  },
  { body: "Let no love poem ever come to this threshold.
      There is no place here for the inexact
      praise of the easy graces and sensuality of",
    author: eavanboland,
    poem: aimlesslove,
    order: 4
  },
  { body: "faithfulness, as if it was a compliment
      rather than a state of partial sleep.",
    author: sharonolds,
    poem: aimlesslove,
    order: 5
  },
  { body: "After all, you had your turn,
      and mine will soon be done,
      then someone else will sit here after me.",
    author: billycollins,
    poem: aimlesslove,
    order: 6
  }
])

Stanza.create([
  { body: "when she went into the gazebo
      with her black pen and yellow pad
      to coax an inquisitive soul",
    author: roberthass,
    poem: boxcar,
    order: 2
  },
  { body: "like two small streams
      which upon entering a wide river
      feel the pull of the distant sea.",
    author: charlessimic,
    poem: boxcar,
    order: 3
  },
  { body: "This is the one song everyone
      would like to learn: the song
      that is irresistible:",
    author: margaretatwood,
    poem: boxcar,
    order: 4
  },
  { body: "you only have to let the soft animal of your body
      love what it loves.",
    author: maryoliver,
    poem: boxcar,
    order: 5
  },
  {
    body: "Now everything stops for a while,
      now I must wait many years",
      author: sharonolds,
      poem: boxcar,
      order: 6
  },
  {
    body: "to see my diva
      with old jazz in my speakers
      & the only thing between us",
    author: terrancehayes,
    poem: boxcar,
    order: 7
  },
  {
    body: "is a room far back in time
      lit by the headlights of a passing car.",
    author: charlessimic,
    poem: boxcar,
    order: 8
  }
])

Stanza.create([
  {
    body: "the moonlight juicing naked branches.
      All species have a notion of emptiness, and yet
      the flowers don’t quit opening. I am",
    author: terrancehayes,
    poem: thedress,
    order: 2
  },
  {
    body: "the one I wanted to tell you about,
      sitting with a glass of rosé at a café table––",
    author: billycollins,
    poem: thedress,
    order: 3
  }
])



############################################################

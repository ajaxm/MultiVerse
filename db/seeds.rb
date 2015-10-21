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

maryoliver = User.create(
  username: 'maryoliver',
  password: 'thesummerday'
)
billycollins = User.create(
  username: 'billycollins',
  password: 'aimlesslove'
)
markstrand = User.create(
  username: 'markstrand',
  password: 'thedress'
)
richardsiken = User.create(
  username: 'richardsiken',
  password: 'scheherazade'
)
terrancehayes = User.create(
  username: 'terrancehayes',
  password: 'boxcarboxcarboxcar'
)

##########

summerday = Poem.create(
  title: 'The Summer Day',
  author: maryoliver,
  first_stanza: "Who made the world?
    Who made the swan, and the black bear?",
  num_stanzas: 6
)
aimlesslove = Poem.create(
  title: 'Aimless Love',
  author: billycollins,
  first_stanza: "This morning as I walked along the lakeshore,
    I fell in love with a wren"
)
boxcar = Poem.create(
  title: 'Boxcar',
  author: terrancehayes,
  first_stanza: "Black as snow & ice as cool
    Miles stood horn-handed while
    John so&soloed",
  num_stanzas: 8
)

sleep(1)

##########

Stanza.create([
  { body: "The love of the chestnut,
      the jazz cap and one hand on the wheel.",
    author: billycollins,
    poem: summerday,
    order: 2
  },
  { body: "I don't know exactly what a prayer is.
      I do know how to pay attention, how to fall down
      into the grass, how to kneel down in the grass,",
    author: maryoliver,
    poem: summerday,
    order: 3
  },
  { body: "but my heart is always propped up
      in a field on its tripod,
      ready for the next arrow.",
    author: billycollins,
    poem: summerday,
    order: 4
  },
  {
    body: "And the days were bright red,
      and every time we kissed there was
      another apple to slice into pieces.",
    author: richardsiken,
    poem: summerday,
    order: 5
  },
  {
    body: "Tell me, what is it you plan to do
      with your one wild and precious life?",
    author: maryoliver,
    poem: summerday,
    order: 6
  }
  ])

  Stanza.create([
  { body: "or the owl arranging all of the night,
      which is his wisdom, or the poem
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
  }
])

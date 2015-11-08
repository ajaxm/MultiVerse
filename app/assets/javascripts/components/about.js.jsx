var About = React.createClass({
  render: function() {
    var githubLink = (
      <a href='http://github.com/Ajax4778/MultiVerse'>
        see the Github page
      </a>
    );
    var personalLink = (
      <a href='http://www.adithyamanohar.com/'>
        Adithya "Ajax" Manohar
      </a>
    );
    var wikiLink = (
      <a href='http://en.wikipedia.org/wiki/Exquisite_corpse'>
        "Exquisite Corpse"
      </a>
    );
    return (
      <div className='about-container'>
        <div className="lines"></div>
        <h2 className='about-header'>The MultiVerse</h2>
        <ul className='about-list'>
          <li>The MultiVerse is a collaborative poetry-writing game
            following the {wikiLink} method.</li>
          <li className='about-subheader'>Creating Poems:</li>
          <li>On creating a poem, you write the first stanza and specify the
            number of stanzas the poem should have. When it reaches that length,
            it is closed for contribution and added to the archive.</li>
          <li className='about-subheader'>Contributing Stanzas:</li>
          <li>Before a poem is completed, only its most recent line is visible.
            The next stanza is written based on this line.</li>
          <li>You may contribute multiple times to the same poem provided you do
            not write successive stanzas.</li>
          <li>Stanzas must be at least two lines long,
            and no more than three.</li>
          <li className='about-subheader'>About:</li>
          <li>The Multiverse was created by {personalLink} using
            React.js and Rails. For more information, {githubLink}.</li>
        </ul>
      </div>
    );
  }
});

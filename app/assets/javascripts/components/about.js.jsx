var About = React.createClass({
  render: function() {
    var githubLink = (
      <a href='http://github.com/Ajax4778/MultiVerse'>
        For the Github page, click here.
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
          <li>The MultiVerse is a collaborative poetry-writing application
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
          <li>Stanzas must be at least two lines long, and no more than three.
            (That is, your input must have either one linebreak or two; no more,
            no fewer.) </li>
          <li className='about-subheader'>About:</li>
          <li>The Multiverse was created by Adithya "Ajax" Manohar using
            React.js and Rails. {githubLink}</li>
        </ul>
      </div>
    );
  }
});

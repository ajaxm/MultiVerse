var About = React.createClass({
  render: function() {
    return (
      <div className='about-container'>
        <h2 className='about-header'>About The MultiVerse</h2>
        <ul>
          <li>The MultiVerse is a collaborative poetry-writing application.</li>
          <li>As a user of the MultiVerse, you can create new poems and
            contribute stanzas to existing ones.</li>
          <li>When you create a poem, you specify the number of stanzas it needs
            to have, and write the first one. When it reaches that number, it is
            closed for contribution and added to the archive.</li>
          <li>When a poem is in progress, only its last line is visibile. The
            next stanza must be written based on this line. When the poem is
            completed, it becomes fully visible.</li>
          <li>You may contribute multiple times to the same poem provided you do
            not write successive stanzas.</li>
          <li>Stanzas must be at least two lines long, and no more than three
            lines long.</li>
        </ul>
      </div>
    );
  }
});

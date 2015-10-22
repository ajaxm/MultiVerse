var PoemListItem = React.createClass({
  render: function() {
    var poem = this.props;

    var poemPreview, poemLink, contributionStatus, statusMessage;

    if (poem.contributed) {
      if (poem.status === 'incomplete') {
        poemPreview = poem.last_line;
        poemLink = '/#poems/';
        if (poem.last_author_id === window.currentUserId) {
          contributionStatus = 'last-contribution';
          statusMessage = 'You wrote the most recent stanza for this poem.';
        } else {
          contributionStatus = 'contributed';
          // statusMessage = 'You have contributed #stanzas to this poem so far.';
          statusMessage = 'You have contributed to this poem.';
        }
      } else if (poem.status === 'complete') {
        poemPreview = poem.first_stanza;
        poemLink = '/#archive/';
        contributionStatus = 'complete';
        // statusMessage = 'You contributed #stanzas to this poem.';
        statusMessage = 'You contributed to this poem.';
      }
    } else {
      contributionStatus = 'not-contributed';
      statusMessage = '';
      if (poem.status === 'incomplete') {
        poemPreview = poem.last_line;
        poemLink = '/#poems/';
      } else if (poem.status === 'complete') {
        poemPreview = poem.first_stanza;
        poemLink = '/#archive/';
      }
    }

    return (
      <a href={poemLink + poem.id}>
        <li className={contributionStatus}>
          <div className='list-item-title'>{poem.title}</div>
          <div className='list-item-preview'>{poemPreview} ...</div>
          <div className='status-message'>{statusMessage}</div>
        </li>
      </a>
    );
  }
});

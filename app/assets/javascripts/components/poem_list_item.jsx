var PoemListItem = React.createClass({
  render: function() {
    var poem = this.props;

    var poemPreview, poemLink, contributionStatus, statusMessage;

    if (poem.status === 'complete') {
      poemPreview = poem.first_stanza;
      poemLink = '/#archive/';
      contributionStatus = 'complete';
      statusMessage = '';
    } else {
      poemPreview = poem.last_line;
      poemLink = '/#poems/';
      if (poem.contributed) {
        if (poem.last_author_id === window.currentUserId) {
          contributionStatus = 'last-contribution';
          statusMessage = 'You wrote the most recent stanza for this poem.';
        } else {
          contributionStatus = 'contributed';
          statusMessage = 'You have contributed #stanzas to this poem.';
        }
      } else {
          contributionStatus = 'not-contributed';
          statusMessage = '';
      }
    }

    return (
      <a href={poemLink + poem.id}>
        <li className={contributionStatus}>
          <div className='list-item-title'>{poem.title}</div>
          {poemPreview}
          <div className='status-message'>{statusMessage}</div>
        </li>
      </a>
    );
  }
});

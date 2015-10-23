var PoemListItem = React.createClass({
  render: function() {
    var poem = this.props;

    var poemPath = '/#poems/';
    var poemPreview, contributionStatus, statusMessage, numContribution;

    if (poem.num_contribution === 'one') {
      numContribution = 'one stanza to this poem';
    } else {
      numContribution = poem.num_contribution + ' stanzas to this poem';
    }

    if (poem.contributed) {
      if (poem.status === 'incomplete') {
        poemPreview = '... ' + poem.last_line;
        if (poem.last_author_id === window.currentUserId) {
          contributionStatus = 'last-contribution';
          statusMessage = 'You have contributed ' + numContribution +
                            ", including the most recent.";
        } else {
          contributionStatus = 'contributed';
          statusMessage = 'You have contributed ' + numContribution + '.';
        }
      } else if (poem.status === 'complete') {
        poemPreview = poem.first_stanza;
        contributionStatus = 'complete';
        statusMessage = 'You contributed ' + numContribution + '.';
      }
    } else {
      contributionStatus = 'not-contributed';
      statusMessage = '';
      if (poem.status === 'incomplete') {
        poemPreview = '... ' + poem.last_line;
      } else if (poem.status === 'complete') {
        poemPreview = poem.first_stanza;
      }
    }

    return (
      <a href={poemPath + poem.id}>
        <li className={contributionStatus}>
          <div className='list-item-title'>{poem.title}</div>
          <div className='list-item-preview'>{poemPreview} ...</div>
          <div className='status-message'>{statusMessage}</div>
        </li>
      </a>
    );
  }
});

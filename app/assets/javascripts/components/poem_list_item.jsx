var PoemListItem = React.createClass({
  render: function() {
    var poem = this.props;

    var poemPreview, poemLink;
    var contributionStatus, statusMessage, numContribution;

    if (poem.num_contribution === 'one') {
      numContribution = 'one stanza to this poem';
    } else {
      numContribution = poem.num_contribution + ' stanzas to this poem';
    }

    if (poem.contributed) {
      if (poem.status === 'incomplete') {
        poemPreview = poem.last_line;
        poemLink = '/#poems/';
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
        poemLink = '/#archive/';
        contributionStatus = 'complete';
        statusMessage = 'You contributed ' + numContribution + '.';
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

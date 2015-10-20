var PoemListItem = React.createClass({
  render: function() {
    var poem = this.props;

    var poemPreview, poemLink, contributionStatus;

    if (poem.status === 'complete') {
      poemPreview = poem.first_stanza;
      poemLink = '/#archive/';
      contributionStatus = 'complete';
    } else {
      poemPreview = poem.last_line;
      poemLink = '/#poems/';
      if (poem.involves_current_user) {
        if (poem.last_author_id === window.currentUserId) {
          contributionStatus = 'last-contribution';
        } else {
        contributionStatus = 'contributed';
        }
      } else {
        contributionStatus = 'not-contributed';
      }
    }

    return (
      <a href={poemLink + poem.id}>
        <li className={contributionStatus}>
          <div className='list-item-title'>{poem.title}</div>
          {poemPreview}
        </li>
      </a>
    );
  }
});

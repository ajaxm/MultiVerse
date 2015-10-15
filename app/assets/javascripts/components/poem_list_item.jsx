var PoemListItem = React.createClass({
  render: function() {
    var poem = this.props;
    var poemPreview, poemLink;
    if (poem.status === 'complete') {
      poemPreview = poem.first_stanza;
      poemLink = '/#archive/';
    } else {
      poemPreview = 'poem.last_line'; ///
      poemLink = '/#poems/';
    }
    return (
      <a href={poemLink + poem.id}>
        <li> {poem.title} <br/>
          {poemPreview}
        </li>
      </a>
    );
  }
});

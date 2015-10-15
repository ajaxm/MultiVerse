var IndexItem = React.createClass({
  render: function() {
    var poem = this.props;
    return (
      <a href={'/#poems/' + poem.id}>
        <li>
          {poem.title} <br/>
          {poem.author} <br/>
          {poem.first_stanza}
        </li>
      </a>
    );
  }
});

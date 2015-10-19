var ArchivePoem = React.createClass({
  getInitialState: function() {
    return { poem: PoemStore.one() };
  },

  componentDidMount: function() {
    PoemStore.addShowListener(this._onChangeEvent);
    ApiUtil.fetchOnePoem(this.props.params.poemId);
  },

  componentWillUnmount: function() {
    PoemStore.removeShowListener(this._onChangeEvent);
  },

  _onChangeEvent: function() {
    this.setState({ poem: PoemStore.one() });
  },

  render: function() {
    var poem = this.state.poem;
    var stanzas = poem.stanzas.map(function(stanza){
      return (
        <li key={stanza.id}>{stanza.body}</li>
      );
    });
    return (
      <div className='poem'>
        <div className='poem-title'>{poem.title}</div>
        <div className='poem-author'>created by {poem.author}</div>
        <ul>
          {stanzas}
        </ul>
        <a className='back-button' href='/#archive'>Back to archive.</a>
      </div>
    );
  }
});

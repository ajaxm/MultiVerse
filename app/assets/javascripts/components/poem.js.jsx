var Poem = React.createClass({
  getInitialState: function() {
    return { poem: PoemStore.one() };
  },

  componentWillMount: function() {
    ApiUtil.fetchOnePoem(this.props.params.poemId);
  },

  componentDidMount: function() {
    PoemStore.addShowListener(this._onShowEvent);
  },

  componentWillUnmount: function() {
    PoemStore.removeShowListener(this._onShowEvent);
  },

  _onShowEvent: function() {
    this.setState({ poem: PoemStore.one() });
  },

  render: function() {
    var poem = this.state.poem || {};
    var lastStanza = poem.stanzas.pop() || {};
    return (
      <div className='poem'>
        Title: {poem.title} <br/>
        Author: {poem.author} <br/>
        {lastStanza.body}
        <br/>
        <StanzaForm poemId={poem.id}/>
        <a href='/#'>Back to all poems.</a>
      </div>
    );
  }
});

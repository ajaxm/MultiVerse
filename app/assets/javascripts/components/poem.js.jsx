var Poem = React.createClass({
  getInitialState: function() {
    return { poem: PoemStore.one() };
  },

  componentWillMount: function() {
    ApiUtil.fetchOnePoem(this.props.params.poemId);
  },

  componentDidMount: function() {
    PoemStore.addShowListener(this._setPoem);
    PoemStore.addStanzaListener(this._setPoem);
  },

  componentWillUnmount: function() {
    PoemStore.removeShowListener(this._setPoem);
    PoemStore.removeStanzaListener(this._setPoem);
  },

  _setPoem: function() {
    this.setState({ poem: PoemStore.one() });
  },

  render: function() {
    var poem = this.state.poem || {};
    return (
      <div className='poem'>
        Title: {poem.title} <br/>
        Author: {poem.author} <br/>
        {poem.last_line}
        <br/>
        <StanzaForm poemId={poem.id}/>
        <a href='/#'>Back to all poems.</a>
      </div>
    );
  }
});

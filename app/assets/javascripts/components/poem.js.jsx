var Poem = React.createClass({
  getInitialState: function() {
    return { poem: PoemStore.one() };
  },

  componentWillMount: function() {
    ApiUtil.fetchOnePoem(this.props.params.poemId);
  },

  componentDidMount: function() {
    PoemStore.addShowListener(this._onChangeEvent);
    PoemStore.addStanzaListener(this._onChangeEvent);
  },

  componentWillUnmount: function() {
    PoemStore.removeShowListener(this._onChangeEvent);
    PoemStore.removeStanzaListener(this._onChangeEvent);
  },

  _onChangeEvent: function() {
    this.setState({ poem: PoemStore.one() });
  },

  render: function() {
    var poem = this.state.poem || {};
    var form;
    if (poem.last_author_id === window.currentUserId) {
      form = (
        <div className='stanza-form-blocker'>
          You wrote the most recent stanza for this poem.
        </div>
      );
    } else {
      form = <StanzaForm poemId={poem.id}/>;
    }
    return (
      <div className='poem'>
        <div className='poem-title'>{poem.title}</div>
        <div className='poem-author'>created by {poem.author}</div>
        {poem.last_line}
        <br/>
        {form}
        <a className='back-button' href='/#'>Back to all poems.</a>
      </div>
    );
  }
});

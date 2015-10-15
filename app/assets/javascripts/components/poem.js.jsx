var Poem = React.createClass({
  getInitialState: function() {
    return { poem: PoemStore.one() };
  },

  componentDidMount: function() {
    PoemStore.addSelectListener(this._onChangeEvent);
    ApiUtil.fetchOnePoem(this.props.params.poemId);
  },

  componentWillUnmount: function() {
    PoemStore.removeSelectListener(this._onChangeEvent);
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
        Title: {poem.title} <br/>
        Author: {poem.author} <br/>
        <ul>
          {stanzas}
        </ul>
        <a href='/#'>Back to all poems.</a>
      </div>
    );
  }
});

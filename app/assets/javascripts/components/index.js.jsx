var Index = React.createClass({
  getInitialState: function() {
    return { poems: PoemStore.all(), selectedPoem: PoemStore.one() };
  },

  componentDidMount: function() {
    PoemStore.addChangeListener(this._onChangeEvent);
  },

  componentWillUnmount: function() {
    PoemStore.removeChangeListener(this._onChangeEvent);
  },

  _onChangeEvent: function() {
    this.setState({ poems: PoemStore.all(), selectedPoem: PoemStore.one() });
  },

  _buildPoemIndex: function() {
    var thisIndex = this;
    var poemList = this.state.poems.map(function(poem){
      return (
        <li onClick={thisIndex.selectPoem} key={poem.id} {...poem}>
          {poem.title} <br/>
          {poem.author} <br/>
          {poem.first_stanza}
        </li>
      );
    });
    return poemList;
  },

  selectPoem: function(e) {
    ApiUtil.fetchOnePoem(e.currentTarget.id);
  },

  render: function() {
    if (this.state.selectedPoem === undefined) {
      var poems = this._buildPoemIndex();
      return(
        <ul className='poem-index'>{poems}</ul>
      );
    } else {
      var poem = this.state.selectedPoem;
      return(
        <Poem className='selected-poem' {...poem}/>
      );
    }
  }
});

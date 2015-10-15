var Archive = React.createClass({
  getInitialState: function() {
    return { poems: PoemStore.all() };
  },

  componentDidMount: function() {
    PoemStore.addChangeListener(this._onChangeEvent);
    ApiUtil.fetchPoems({'status': 'complete'});
  },

  componentWillUnmount: function() {
    PoemStore.removeChangeListener(this._onChangeEvent);
  },

  _onChangeEvent: function() {
    this.setState({ poems: PoemStore.all() });
  },

  _buildPoemArchive: function() {
    var that = this;
    var poemArchive = this.state.poems.map(function(poem){
      return (
        <PoemListItem status='complete' key={poem.id} {...poem}/>
      );
    });
    return poemArchive;
  },

  render: function() {
    var poems = this._buildPoemArchive();
    return(
      <ul className='poem-archive'>{poems}</ul>
    );
  }
});

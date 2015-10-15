var Index = React.createClass({
  getInitialState: function() {
    return { poems: PoemStore.all() };
  },

  componentDidMount: function() {
    PoemStore.addChangeListener(this._onChangeEvent);
    ApiUtil.fetchPoems({'status': 'incomplete'});
  },

  componentWillUnmount: function() {
    PoemStore.removeChangeListener(this._onChangeEvent);
  },

  _onChangeEvent: function() {
    this.setState({ poems: PoemStore.all() });
  },

  _buildPoemIndex: function() {
    var that = this;
    var poemIndex = this.state.poems.map(function(poem){
      return (
        <IndexItem key={poem.id} {...poem}/>
      );
    });
    return poemIndex;
  },

  render: function() {
    var poems = this._buildPoemIndex();
    return(
      <ul className='poem-index'>{poems}</ul>
    );
  }
});

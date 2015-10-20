var Home = React.createClass({
  getInitialState: function() {
    return {
      poems: PoemStore.all()
    };
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

  render: function() {
    var poems = this.state.poems.map(function(poem){
        return (
          <PoemListItem status='incomplete' key={poem.id} {...poem}/>
        );
      });

    return(
      <div className='home-container'>
        <ul className='poem-index'>{poems}</ul>
      </div>
    );
  }
});

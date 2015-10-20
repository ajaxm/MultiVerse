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

  handleScroll: function(e) {
    var scrollTop = $(e.currentTarget).scrollTop();
    var containerHeight = $(document.getElementById('scroll-container')).height();
    if (scrollTop > 0.5 * containerHeight) {
      ApiUtil.loadMorePoems({ 'status': 'incomplete' });
    }
  },

  render: function() {
    var poems = this.state.poems.map(function(poem){
        return (
          <PoemListItem status='incomplete' key={poem.id} {...poem}/>
        );
      });

    return(
      <div id='scroll-container' className='home-container'>
        <ul onScroll={this.handleScroll} className='poem-index'>{poems}</ul>
      </div>
    );
  }
});

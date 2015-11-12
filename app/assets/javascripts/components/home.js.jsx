var Home = React.createClass({
  getInitialState: function() {
    return {
      poems: [],
      page: 1,
      scrolling: false
    };
  },

  componentDidMount: function() {
    PoemStore.addChangeListener(this._onChangeEvent);
    ApiUtil.fetchPoems({ 'status': 'incomplete', page: this.state.page });
  },

  componentWillUnmount: function() {
    PoemStore.removeChangeListener(this._onChangeEvent);
  },

  _onChangeEvent: function() {
    this.setState({
      poems: PoemStore.all(),
      page: PoemStore.currentPage(),
      scrolling: false
    });
  },

  handleScroll: function(e) {
    if (this.state.scrolling) {
      return null;
    }

    var scrollTop = $(e.currentTarget).scrollTop();
    var containerHeight = $(document.getElementById('scroll-container')).height();
    /// Height to trigger load = ~ total height of pages passed - container height
    if (scrollTop > (800 * this.state.page) - containerHeight) {
      var newPage = this.state.page + 1;
      ApiUtil.fetchPoems({ 'status': 'incomplete', page: newPage });
      this.setState({ scrolling: true });
    }
  },

  render: function() {
    var poems = this.state.poems.map(function(poem){
        return (
          <PoemListItem status='incomplete' key={poem.id} {...poem}/>
        );
      });

    var loading = (
      <a>
      <li>
        <div className="lines"></div>
        <div className='list-item-title'>&nbsp;</div>
        <div className='status-message'>Loading...</div>
      </li>
      </a>
    );
    if (poems.length === 0) {
      poems = loading;
    }

    return(
      <div id='scroll-container' className='home-container'>
        <ul onScroll={this.handleScroll} className='poem-index'>{poems}</ul>
      </div>
    );
  }
});

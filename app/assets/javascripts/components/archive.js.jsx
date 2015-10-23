var Archive = React.createClass({
  getInitialState: function() {
    return {
      poems: [],
      page: 1,
      scrollEnd: false,
      scrolling: false
    };
  },

  componentDidMount: function() {
    PoemStore.addChangeListener(this._onChangeEvent);
    ApiUtil.fetchPoems({'status': 'complete', page: this.state.page });
  },

  componentWillUnmount: function() {
    PoemStore.removeChangeListener(this._onChangeEvent);
  },

  _onChangeEvent: function() {
    this.setState({
      poems: PoemStore.all(),
      page: PoemStore.currentPage(),
      scrollEnd: PoemStore.scrollEnd(),
      scrolling: false
    });
  },

  handleScroll: function(e) {
    if (this.state.scrollEnd || this.state.scrolling) {
      return null;
    }

    var scrollTop = $(e.currentTarget).scrollTop();
    var containerHeight = $(document.getElementById('scroll-container')).height();
    /// This if clause is pretty hacky: ~ total height of pages passed - container height
    if (scrollTop > (800 * this.state.page) - containerHeight) {
      var newPage = this.state.page + 1;
      ApiUtil.fetchPoems({ 'status': 'complete', page: newPage });
      this.setState({ scrolling: true });
    }
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
      <div id='scroll-container' className='archive-container'>
        <ul onScroll={this.handleScroll} className='poem-archive'>{poems}</ul>
      </div>
    );
  }
});

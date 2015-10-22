var ArchivePoem = React.createClass({
  getInitialState: function() {
    return { poem: PoemStore.one(), favoriting: true, activeId: -1 };
  },

  componentDidMount: function() {
    PoemStore.addShowListener(this._onChangeEvent);
    ApiUtil.fetchOnePoem(this.props.params.poemId);
  },

  componentWillUnmount: function() {
    PoemStore.removeShowListener(this._onChangeEvent);
  },

  _onChangeEvent: function() {
    this.setState({ poem: PoemStore.one(), favoriting: false });
  },

  _setActive: function(id) {
    if (this.state.activeId === id) {
      this.setState({ activeId: -1 });
    } else {
      this.setState({ activeId: id });
    }
  },

  _buildPoem: function() {
    return (
      this.state.poem.stanzas.map(function(stanza){
        var isActive = false;
        if (this.state.activeId === stanza.id) {
          isActive = true;
        }
        return (
          <Stanza active={isActive}
                  setActive={this._setActive}
                  key={stanza.id} {...stanza}/>
        );
      }.bind(this))
    );
  },

  handleFavorite: function() {
    if (this.state.poem.favorited) {
      ApiUtil.removeFavorite(this.state.poem.fav.id);
    } else {
      ApiUtil.addFavorite({
        'poem_id': this.state.poem.id
      });
    }
    this.setState({ favoriting: true });
  },

  render: function() {
    var stanzas = this._buildPoem();
    return (
      <div className='poem'>
        <div className='poem-title'>{this.state.poem.title}</div>
        <div className='poem-author'>
          created by {this.state.poem.author} {this.state.poem.timestamp} ago
        </div>
        <ul onClick={this.handleStanzaClick}>
          {stanzas}
        </ul>
        <button
          className='favorite-button'
          onClick={this.handleFavorite}
          disabled={this.state.favoriting}>
          {this.state.poem.favorited ? 'Unfavorite' : 'Favorite!'}
        </button>
        <a className='back-button' href='/#archive'>Back to archive.</a>
      </div>
    );
  }
});

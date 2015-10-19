var Home = React.createClass({
  getInitialState: function() {
    return {
      contributed: PoemStore.involvingCurrentUser(),
      nonContributed: PoemStore.notInvolvingCurrentUser()
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
    this.setState({
      contributed: PoemStore.involvingCurrentUser(),
      nonContributed: PoemStore.notInvolvingCurrentUser()
    });
  },

  _getUserPoems: function() {
    var that = this;
    var userPoems = this.state.contributed.map(function(poem){
      return (
        <PoemListItem status='incomplete' key={poem.id} {...poem}/>
      );
    });
    return userPoems;
  },

  _getNonUserPoems: function() {
    var nonUserPoems = this.state.nonContributed.map(function(poem){
      return (
        <PoemListItem status='incomplete' key={poem.id} {...poem}/>
      );
    });
    return nonUserPoems;
  },

  render: function() {
    var userPoems = this._getUserPoems();
    var nonUserPoems = this._getNonUserPoems();
    return(
      <div className='home-container'>
        <ul className='poem-index'>{nonUserPoems}</ul>
        <br/>
        <span>You've contributed to:</span>
        <ul className='poem-index'>{userPoems}</ul>
      </div>
    );
  }
});

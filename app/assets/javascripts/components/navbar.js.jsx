var Navbar = React.createClass({
  handleLogOut: function() {
    ApiUtil.logOut();
  },

  render: function() {
    var activePath = this.props.activePath;
    return (
      <div className='navbar-container'>
        <span className='navbar-username'>{window.currentUserName}</span>
        <a href='/#about'
          className={((activePath === '/about') ? 'navbar-active' : '')}>
            The MultiVerse</a>
        <a href='/#'
          className={((activePath === '/') ? 'navbar-active' : '')}>
            Home</a>
        <a href='/#archive'
          className={((activePath === '/archive') ? 'navbar-active' : '')}>
            Archive</a>
        <a href='/#new'
          className={((activePath === '/new') ? 'navbar-active' : '')}>
            New</a>
          <a className='navbar-logout'
           onClick={this.handleLogOut}
           href='#'>Log Out</a>
      </div>
    );
  }
});

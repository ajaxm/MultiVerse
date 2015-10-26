var Sidebar = React.createClass({
  handleLogOut: function() {
    ApiUtil.logOut();
  },

  render: function() {
    var activePath = this.props.activePath;
    return (
      <div className='sidebar-container'>
        <span className='sidebar-username'>{window.currentUserName}</span>
        <a href='/#about'
          className={((activePath === '/about') ? 'sidebar-active' : '')}>
            The MultiVerse</a>
        <a href='/#'
          className={((activePath === '/') ? 'sidebar-active' : '')}>
            Home</a>
        <a href='/#archive'
          className={((activePath === '/archive') ? 'sidebar-active' : '')}>
            Archive</a>
        <a href='/#new'
          className={((activePath === '/new') ? 'sidebar-active' : '')}>
            New</a>
        <a className='sidebar-logout'
           onClick={this.handleLogOut}
           href='#'>Log Out</a>
      </div>
    );
  }
});

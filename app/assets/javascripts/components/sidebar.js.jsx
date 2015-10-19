var Sidebar = React.createClass({
  handleLogOut: function() {
    ApiUtil.logOut();
  },

  render: function() {
    return (
      <div className='sidebar-container'>
        <span className='sidebar-username'>{window.currentUserName}</span>
        <a className='sidebar-button' href='/#new'>New</a>
        <a className='sidebar-button' href='/#'>Home</a>
        <a className='sidebar-button' href='/#archive'>Archive</a>
        <a className='sidebar-button'
           onClick={this.handleLogOut}
           href='#'>Log Out</a>
      </div>
    );
  }
});

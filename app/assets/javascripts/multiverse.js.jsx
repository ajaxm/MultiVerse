var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Sidebar/>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Index}/>
    <Route path='poems/:poemId' component={Poem}/>
    <Route path='archive' component={Archive}/>
    <Route path='archive/:poemId' component={ArchivePoem}/>
    <Route path='new' component={PoemForm}/>
  </Route>
);

window.mountRouter = function() {
  React.render(<Router>{routes}</Router>,
    document.getElementById('multiverse-container')
  );
};

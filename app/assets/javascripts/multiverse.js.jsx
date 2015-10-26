var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar activePath={this.props.location.pathname}/>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='poems/:poemId' component={PoemContainer}/>
    <Route path='archive' component={Archive}/>
    <Route path='new' component={PoemForm}/>
    <Route path='about' component={About}/>
  </Route>
);

window.mountRouter = function() {
  React.render(<Router>{routes}</Router>,
    document.getElementById('multiverse-container')
  );
};

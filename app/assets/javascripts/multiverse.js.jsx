var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>The MultiVerse</h1>
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
  </Route>
);

$(function() {
  React.render(<Router>{routes}</Router>,
    document.getElementById('multiverse-container')
  );
});

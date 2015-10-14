var Index = React.createClass({
  getInitialState: function() {
    return { poems: PoemStore.all() };
  },

  componentDidMount: function() {
    PoemStore.addChangeListener(this._onChangeEvent);
  },

  componentWillUnmount: function() {
    PoemStore.removeChangeListener(this._onChangeEvent);
  },

  _onChangeEvent: function() {
    this.setState({ poems: PoemStore.all() });
  },

  render: function() {
    var poems = this.state.poems.map(function(poem){
      return (<li key={poem.id} {...poem}>{poem.title}</li>);
    });
    return(<ul className='poem-index'>{poems}</ul>);
  }
});

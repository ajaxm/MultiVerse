var PoemContainer = React.createClass({
  getInitialState: function() {
    return { poem: PoemStore.one() };
  },
  componentDidMount: function() {
    PoemStore.addShowListener(this._onChangeEvent);
    PoemStore.addStanzaListener(this._onChangeEvent);
    ApiUtil.fetchOnePoem(this.props.params.poemId);
  },
  componentWillUnmount: function() {
    PoemStore.removeShowListener(this._onChangeEvent);
    PoemStore.removeStanzaListener(this._onChangeEvent);
  },

  _onChangeEvent: function() {
    this.setState({ poem: PoemStore.one() });
  },

  render: function() {
    if (poem.stanzas.length === 0) {
      return <div></div>;
    }

    if (poem.remaining === 'zero') {
      return <ArchivePoem poem={this.state.poem}/>;
    } else {
      return <Poem poem={this.state.poem}/>;
    }
  }
});

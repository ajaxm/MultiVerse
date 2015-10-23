var Poem = React.createClass({
  getInitialState: function() {
    return { poem: PoemStore.one() };
  },

  componentWillMount: function() {
    ApiUtil.fetchOnePoem(this.props.params.poemId);
  },

  componentDidMount: function() {
    PoemStore.addShowListener(this._onChangeEvent);
    PoemStore.addStanzaListener(this._onChangeEvent);
  },

  componentWillUnmount: function() {
    PoemStore.removeShowListener(this._onChangeEvent);
    PoemStore.removeStanzaListener(this._onChangeEvent);
  },

  _onChangeEvent: function() {
    this.setState({ poem: PoemStore.one() });
  },

  _buildPoem: function() {
    if (this.state.poem.stanzas.length === 0) {
      return <div></div>;
    }
    var stanzas = this.state.poem.stanzas;
    var lines = [];
    var idx = 1;
    stanzas.forEach(function(stanza) {
      stanzaLines = stanza.body.split("\n");
      stanzaLines.forEach(function(line) {
        lines.push(
          <li key={idx} className='incomplete-container'>
            <span className='incomplete-poem-line'>{line}</span>
          </li>
        );
        idx ++;
      });
    });
    return lines;
  },

  render: function() {
    var poem = this.state.poem || {};
    var lines = this._buildPoem();

    var form;
    if (poem.last_author_id === window.currentUserId) {
      form = (
        <div className='stanza-form-blocker'>
          You wrote the most recent stanza for this poem.
        </div>
      );
    } else {
      form = <StanzaForm poemId={poem.id}/>;
    }

    var remainingStanzas;
    if (poem.remaining === 'One') {
      remainingStanzas = poem.remaining + ' more stanza is';
    } else {
      remainingStanzas = poem.remaining + ' more stanzas are';
    }
    return (
      <div className='poem'>
        <div className='poem-title'>{poem.title}</div>
        <div className='poem-author'>created by {poem.author}</div>
        <ul>
          {lines}
        </ul>
        <br/>
        {form}
        <div className='stanzas-remaining'>
          {remainingStanzas} needed to complete this poem.
        </div>
        <a className='back-button' href='/#'>Back to all poems.</a>
      </div>
    );
  }
});

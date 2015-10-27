var IncompletePoem = React.createClass({
  _buildPoem: function() {
    if (this.props.poem.stanzas.length === 0) {
      return <div></div>;
    }
    var stanzas = this.props.poem.stanzas;
    var lines = [];
    var idx = 1;
    stanzas.forEach(function(stanza) {
      stanzaLines = stanza.body.split("\n");
      stanzaLines.forEach(function(line) {
        lines.push(
          <li key={idx} className='incomplete-line-container'>
            <span className='incomplete-poem-line'>{line}</span>
          </li>
        );
        idx ++;
      });
    });
    return lines;
  },

  _getRemainingStanzaCount: function() {
    var remainingStanzas;
    if (this.props.poem.remaining === 'one') {
      remainingStanzas = this.props.poem.remaining + ' stanza';
    } else {
      remainingStanzas = this.props.poem.remaining + ' stanzas';
    }
    var remainingMsg = "This poem is " + remainingStanzas + " from completion.";
    return remainingMsg;
  },

  _setStanzaFormPlaceholder: function() {
    var stanzaFormPlaceholder = (
      "Add a new stanza; at least two lines, but not more than three."
    );
    if (this.props.poem.last_author_id === window.currentUserId) {
      stanzaFormPlaceholder = (
          "You wrote the most recent stanza for this poem."
      );
    }
    return stanzaFormPlaceholder;
  },

  render: function() {
    var poem = this.props.poem || { stanzas: [] };
    if (poem.stanzas.length === 0) {
      return <div></div>;
    }

    var lines = this._buildPoem();
    var remainingMessage = this._getRemainingStanzaCount();
    var stanzaFormPlaceholder = this._setStanzaFormPlaceholder();
    var stanzaFormIsDisabled = (poem.last_author_id === window.currentUserId);
    var form = <StanzaForm placeholder={stanzaFormPlaceholder}
                           isDisabled={stanzaFormIsDisabled}
                           poemId={poem.id}/>;

    return (
      <div className='poem'>
        <div className="lines"></div>
        <div className='poem-title'>
          {poem.title}
          <div className='poem-author'>
            created by {poem.author}<br/>{poem.timestamp} ago
          </div>
        </div>
        <ul>
          {lines}
        </ul>
        <br/>
        {form}
        <div className='stanzas-remaining'>
          {remainingMessage}
        </div>
        <a className='back-button' href='/#'>Back to all poems.</a>
      </div>
    );
  }
});

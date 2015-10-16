var PoemForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return { title: '', numStanzas: '', firstStanza: '' };
  },

  componentDidMount: function() {
    PoemStore.addCreationListener(this._onCreation);
  },

  componentWillUnmount: function() {
    PoemStore.removeCreationListener(this._onCreation);
  },

  _onCreation: function(createdPoem) {
    var poemURL = "poems/" + createdPoem.id;
    this.props.history.pushState(null, poemURL);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var newPoem = { poem: {
        title: this.state.title,
        num_stanzas: this.state.numStanzas,
        first_stanza: this.state.firstStanza
      }
    };
    ApiUtil.createPoem(newPoem);
  },

  render: function() {
    var form = (
      <form onSubmit={this.handleSubmit}>
        <label> Title:
          <input valueLink={this.linkState('title')}/>
        </label>
        <br/>
        <label> Number of Stanzas:
          <input valueLink={this.linkState('numStanzas')}/>
        </label>
        <br/>
        <label> First Stanza:
          <textarea valueLink={this.linkState('firstStanza')}/>
        </label>
        <br/>
        <input type="submit" value="Create 'Verse!"/>
      </form>
    );
    return (
      <div>
        <h2>Create a New Verse</h2>
        {form}
      </div>
    );
  }
});

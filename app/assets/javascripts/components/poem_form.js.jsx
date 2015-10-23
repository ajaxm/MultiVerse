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
        <div className='form-title'>
          <label> Title: </label>
          <input valueLink={this.linkState('title')}
                 placeholder="Give your poem a title."/>
        </div>
        <div className='form-num-stanzas'>
          <label> Number of Stanzas: </label>
          <input valueLink={this.linkState('numStanzas')}
                 placeholder={"How many stanzas should this poem have?"}/>
        </div>
        <div className='form-first-stanza'>
          <label> First Stanza: </label>
          <textarea valueLink={this.linkState('firstStanza')}
                    placeholder="Write the first stanza;
                      at least two lines, but not more than three."/>
        </div>
        <input className='poem-form-submit'
               type="submit"
               value="Create 'Verse!"/>
      </form>
    );
    var heading = "Create a New 'Verse!";
    return (
      <div className='poem-form'>
        <h2>{heading}</h2>
        {form}
      </div>
    );
  }
});

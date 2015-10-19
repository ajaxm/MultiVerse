var StanzaForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return { body: '' };
  },

  componentDidMount: function() {
    PoemStore.addStanzaListener(this._onCreation);
  },

  componentWillUnmount: function() {
    PoemStore.removeStanzaListener(this._onCreation);
  },

  _onCreation: function() {
    this.setState({ body: '' });
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var newStanza = $.extend({}, this.state, { poem_id: this.props.poemId });
    ApiUtil.createStanza(newStanza);
  },

  render: function() {
    var form = (
      <form className='stanza-form' onSubmit={this.handleSubmit}>
        <textarea className='stanza-input' valueLink={this.linkState('body')}/>
        <input id='stanza-submit' type="submit" value="Add Stanza!"/>
      </form>
    );

    return (<div>{form}</div>);
  }
});

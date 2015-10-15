var StanzaForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return { body: '' };
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var newStanza = this.state;
    ApiUtil.createStanza(newStanza);
  },

  render: function() {
    var form = (
      <form onSubmit={this.handleSubmit}>
        <br/> Add a Stanza: <br/>
        <textarea valueLink={this.linkState('body')}/>
        <input type="submit" value="Add Stanza!"/>
      </form>
    );

    return (<div>{form}</div>);
  }
});

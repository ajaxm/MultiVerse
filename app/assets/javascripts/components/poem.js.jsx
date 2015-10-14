var Poem = React.createClass({
  render: function() {
    var stanzas = this.props.stanzas.map(function(stanza){
      return (
        <li key={stanza.id}>{stanza.body}</li>
      );
    });
    return (
      <div className='poem'>
        Title: {this.props.title} <br/>
        Author: {this.props.author} <br/>
        <ul>
          {stanzas}
        </ul>
      </div>
    );
  }
});

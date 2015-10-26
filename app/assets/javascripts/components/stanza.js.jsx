var Stanza = React.createClass({
  handleClick: function() {
    this.props.setActive(this.props.id);
  },
  render: function() {
    var stanzaClickContent = '';
    var clickedClass = ((this.props.active) ? ' clicked-stanza' : '');
    if (this.props.active) {
      stanzaClickContent = (
        <div className='stanza-click-content'>
          written by {this.props.author}<br/>{this.props.timestamp} ago
        </div>
      );
    }
    return (
      <li className={'stanza' + clickedClass} onClick={this.handleClick}>
        <div className='stanza-body'>{this.props.body}</div>
        {stanzaClickContent}
      </li>
    );
  }
});

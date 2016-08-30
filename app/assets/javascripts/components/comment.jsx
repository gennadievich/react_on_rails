var Comment = React.createClass({
  render: function(){
    return <div>
      <p>Author: {this.props.author}</p>
      <p>Comment: {this.props.text}</p>
    </div>
  }
});
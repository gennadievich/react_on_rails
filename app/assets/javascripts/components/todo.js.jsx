var Todo = React.createClass({
  render(){
    if (this.props.done) {
      return <div>
        <span>{this.props.title}</span>
        <span> Done!</span>
      </div>
    } else {
      return <div>
        <span>{this.props.title}</span>
        <span> Not done yet.</span>
      </div>
    }
  }
});
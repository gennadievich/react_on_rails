var CommentBox = React.createClass({
  render: function(){
    return(
      <div className="commentBox">
        <h1>Comment Box Here!</h1>
        <CommentList comments = {this.props.data}/>
        <CommentForm />
      </div>
    )
  }
});
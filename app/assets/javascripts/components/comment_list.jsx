var CommentList = React.createClass({
  getInitialState: function(){
    return {comments: this.props.comments}
  },
  render: function(){
    return <div>
      {
        this.state.comments.map(function(comment){
          return <Comment key = {comment.id} author = {comment.author} text = {comment.text} />
        })
      }
    </div>
  }
});
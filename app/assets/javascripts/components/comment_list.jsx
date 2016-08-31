var CommentList = React.createClass({
  render: function(){
    return <div>
      {
        this.props.data.map(function(comment){
          return <Comment key = {comment.id} author = {comment.author} text = {comment.text} />
        })
      }
    </div>
  }
});
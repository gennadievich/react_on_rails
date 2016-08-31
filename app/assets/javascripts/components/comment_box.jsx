var CommentBox = React.createClass({
  getInitialState: function(){
    return {data: this.props.data};
  },
  submitPost: function(comment){
    $.ajax({
      url: '/comments/',
      method: 'POST',
      dataType: 'JSON',
      data: {comment: comment}
    }).success(function(data){
      var comments = this.state.data.slice();
      comments.push(data);
      this.setState({data: comments})
    }.bind(this))
  },
  render: function(){
    return(
      <div className="commentBox">
        <h1>Comment Box Here!</h1>
        <CommentList data = {this.state.data}/>
        <CommentForm processPost = {this.submitPost}/>
      </div>
    )
  }
});
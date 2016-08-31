var CommentForm = React.createClass({
  getInitialState: function(){
    return {author: '', comment: ''}
  },
  handleSubmit: function(e){
    e.preventDefault();
    var name = this.state.author;
    var comment = this.state.comment;
    if (name.length > 0 && comment.length > 0) {
      this.props.processPost({author: name, text: comment});
      this.setState({author: '', comment: ''})
    }
  },
  handleAuthorChange: function(e){
    this.setState({author: e.target.value});
  },
  handleCommentChange: function(e){
    this.setState({comment: e.target.value});
  },
  render: function(){
    return (
      <form className="commentForm" onSubmit = {this.handleSubmit}>
        <input type="text"
               placeholder="Your name"
               value={this.state.author}
               onChange={this.handleAuthorChange}
        />
        <input type="text"
               placeholder="Say something..."
               value={this.state.comment}
               onChange={this.handleCommentChange}
        />
        <input type="submit" value="Post!" />
      </form>
    )
  }
});
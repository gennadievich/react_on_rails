var Todos = React.createClass({
  getInitialState(){
    return { todos: this.props.data }
  },
  getDefaultProps(){
    return { todos: [] }
  },
  handleEnterPress(e){
    var title = e.target.value;
    if (e.key === 'Enter' && title.length) {
      var self = this;
      $.ajax({
        url: '/todos',
        method: 'POST',
        dataType: 'JSON',
        data: {todo: {title: title}}
      }).success(function(todo){
        var todos = self.state.todos.slice();
        todos.push(todo);
        self.setState({todos: todos});
        $('.input1').val('');
      });
    }
  },
  render(){
     return <div>
       <input className="input1" placeholder="What needs to be done?" onKeyPress={this.handleEnterPress}/>
       {
         this.state.todos.map(function(todo){
           return <Todo key = {todo.id} title = {todo.title} done = {todo.done}/>
         })
       }
     </div>
  }
});
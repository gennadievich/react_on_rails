var Todos = React.createClass({
  getInitialState(){
    return { todos: this.props.data }
  },
  getDefaultProps(){
    return { todos: [] }
  },
  handleEnterPress(e){
    if (e.key === 'Enter' && e.target.value.length) {
      var self = this;
      var title = e.target.value;
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
           return <Todo key = {todo.id} title = {todo.title}/>
         })
       }
     </div>
  }
});
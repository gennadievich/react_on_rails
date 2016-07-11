var AccountForm = React.createClass({
  getInitialState: function(){
    return {
      title: '',
      date: '',
      amount: ''
    }
  },
  handleDateChange: function(e){
    this.setState({date: e.target.value})
  },
  handleTitleChange: function(e){
    this.setState({title: e.target.value})
  },
  handleAmountChange: function(e){
    this.setState({amount: e.target.value})
  },
  valid: function(){
    return this.state.title && this.state.date && this.state.amount
  },
  handleSubmit: function(e){
    var self;
    e.preventDefault();
    self = this;

    $.ajax({
      method: 'POST',
      url: '',
      dataType: 'JSON',
      data: { account: this.state }
    }).done(function(data){
      self.props.handleNewAccount(data);
      self.setState(self.getInitialState)
    })
  },

  render: function(){
    return <form className="form-inline" onSubmit={this.handleSubmit}>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Date" name="date" value={this.state.date} onChange={this.handleDateChange}/>
      </div>

      <div className="form-group">
        <input className="form-control" type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
      </div>

      <div className="form-group">
        <input className="form-control" type="text" placeholder="Amount" name="amount" value={this.state.amount} onChange={this.handleAmountChange}/>
      </div>

      <button type="submit" className="btn btn-primary" disabled={!this.valid()}>Create!</button>
    </form>
  }
});
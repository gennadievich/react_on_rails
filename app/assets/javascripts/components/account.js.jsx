var Account = React.createClass({
  getInitialState: function(){
    return {edit: false}
  },
  handleDelete: function(e){
    var self;
    self = this;
    e.preventDefault();
    $.ajax({
      url: "/accounts/" + self.props.account.id,
      method: "DELETE",
      dataType: "JSON"
    }).done(self.props.handleDeleteAccount(self.props.account))
  },
  handleToggle(e){
    e.preventDefault();
    this.setState({edit: !this.state.edit})
  },
  handleEdit(e){
    var self = this;
    e.preventDefault();
    var data = {
      title: ReactDOM.findDOMNode(this.refs.title).value,
      date: ReactDOM.findDOMNode(this.refs.date).value,
      amount: ReactDOM.findDOMNode(this.refs.amount).value
    };
    $.ajax({
      url: "/accounts/" + self.props.account.id,
      dataType: "JSON",
      method: "PUT",
      data: {account: data}
    }).success(function(data){
      self.setState({edit: false});
      self.props.handleEditAccount(self.props.account, data)
    })
  },
  recordRow(){
    return <tr>
      <td>{this.props.account.date}</td>
      <td>{this.props.account.title}</td>
      <td>{amountFormat(this.props.account.amount)}</td>
      <td>
        <a className="btn btn-default" onClick={this.handleToggle}>Edit</a>
        <a className="btn btn-danger" onClick={this.handleDelete}>Delete</a>
      </td>
    </tr>
  },
  recordForm(){
    return <tr>
      <td><input className="form-control" type="date" defaultValue={this.props.account.date} ref="date"/></td>
      <td><input className="form-control" type="text" defaultValue={this.props.account.title} ref="title"/></td>
      <td><input className="form-control" type="number" defaultValue={this.props.account.amount} ref="amount"/></td>
      <td>
        <a className="btn btn-info" onClick={this.handleEdit}>Update</a>
        <a className="btn btn-default" onClick={this.handleToggle}>Cancel</a>
      </td>
    </tr>
  },

  render: function(){
    if (this.state.edit){
      return this.recordForm();
    } else {
      return this.recordRow();
    }
  }
});
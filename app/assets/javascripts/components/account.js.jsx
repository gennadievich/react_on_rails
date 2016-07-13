var Account = React.createClass({
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
  render: function(){
    return <tr>
      <td>{this.props.account.date}</td>
      <td>{this.props.account.title}</td>
      <td>{amountFormat(this.props.account.amount)}</td>
      <td>
        <a className="btn btn-danger" onClick={this.handleDelete}>Delete</a>
      </td>
    </tr>
  }
});
var Account = React.createClass({
  render: function(){
    return <tr>
      <td>{this.props.account.date}</td>
      <td>{this.props.account.title}</td>
      <td>{amountFormat(this.props.account.amount)}</td>
    </tr>
  }
});
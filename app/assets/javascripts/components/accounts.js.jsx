var Accounts = React.createClass({
  getInitialState: function(){
    return { accounts: this.props.data }
  },
  getDefaultProps: function(){
    return { accounts: [] }
  },
  addAccount: function(account){
    var accounts = this.state.accounts.slice();
    accounts.push(account);
    this.setState({accounts: accounts})
  },
  render: function() {
    return <div className='accounts'>
      <h2 className="title">
        Accounts
      </h2>
      {React.createElement(AccountForm, {handleNewAccount: this.addAccount})}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.state.accounts.map(function(account){
            return React.createElement(Account, {
              key: account.id,
              account: account
            })
          })
          }
        </tbody>
      </table>
    </div>;
  }
});
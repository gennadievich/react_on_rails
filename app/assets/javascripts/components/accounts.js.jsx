var Accounts = React.createClass({
  getInitialState: function(){
    return { accounts: this.props.data }
  },
  getDefaultProps: function(){
    return { accounts: [] }
  },
  render: function() {
    return <div className='accounts'>
      <h2 className="title">
        Accounts
      </h2>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.state.accounts.map(function(account, i){
            return React.createElement(Account, {
              key: i,
              account: account
            })
          })
          }
        </tbody>
      </table>
    </div>;
  }
});
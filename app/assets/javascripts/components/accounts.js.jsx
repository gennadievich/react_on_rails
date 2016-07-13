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
  credits: function(){
    var credits;
    credits = this.state.accounts.filter(function(val){
      return val.amount >= 0;
    });
    return credits.reduce((function(prev, curr){
      return prev + parseFloat(curr.amount);
    }), 0);
  },
  debits: function(){
    var debits;
    debits = this.state.accounts.filter(function(val){
      return val.amount < 0;
    });
    return debits.reduce((function(prev, curr){
      return prev + parseFloat(curr.amount);
    }), 0);
  },
  balance: function(){
    return this.debits() + this.credits()
  },
  handleClickBtn: function(){
    $('.acc-form').slideToggle();
  },
  deleteAccount: function(account){
    var accounts, index;
    accounts = this.state.accounts.slice();
    index = accounts.indexOf(account);
    accounts.splice(index, 1);
    this.replaceState({accounts: accounts});
  },
  updateAccount(account, data){
    var accounts, index;
    accounts = this.state.accounts.slice();
    index = accounts.indexOf(account);
    accounts.splice(index, 1, data);
    this.replaceState({accounts: accounts});
  },
  render: function() {
    return <div className='accounts'>
      <h2 className="title">
        Accounts
      </h2>
      <div className="row">
        {React.createElement(AccountBox, {type: 'success', amount: this.credits(), text: 'Credit'})}
        {React.createElement(AccountBox, {type: 'danger', amount: this.debits(), text: 'Debit'})}
        {React.createElement(AccountBox, {type: 'info', amount: this.balance(), text: 'Balance'})}
      </div>
      <button onClick={this.handleClickBtn} className="btn">ShowHide Form</button>
      <hr/>

      <div className="acc-form" style={{display: 'none'}}>
        {React.createElement(AccountForm, {handleNewAccount: this.addAccount})}
      </div>

      <hr/>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.accounts.map(function(account){
              return (React.createElement(Account, {
                key: account.id,
                account: account,
                handleDeleteAccount: this.deleteAccount,
                handleEditAccount: this.updateAccount
              }));
            }.bind(this))
          }
        </tbody>
      </table>
    </div>;
  }
});
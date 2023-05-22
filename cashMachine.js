class CashMachine {
  constructor() {
    this.balance = 0.0;
    this.transactions = [];
  }

  formatDate() {
    const date = new Date()
    const options = 
    {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
    return date.toLocaleDateString('en-UK', options).replace(/\//g, '-');
  }

  showBalance() {
    return this.balance;
  }

  showTransactions() {
    return this.transactions;
  }

  depositMoney(value, date = this.formatDate()) {
    this.balance += value;
    this.transactions.push({deposit: value, balance: this.balance, date: date});
  }

  withdrawMoney(value, date = this.formatDate()) {
    if(value <= this.balance){
      this.balance -= value;
      this.transactions.push({withdrawal: value, balance: this.balance, date: date});
    } else {
      // If the user tries to withdrawn beyond their balance
      // total balance is withdrawn instead
      const newValue = this.balance
      this.balance -= newValue;
      this.transactions.push({withdrawal: newValue, balance: this.balance, date: date});
    }
  }
}

module.exports = CashMachine;
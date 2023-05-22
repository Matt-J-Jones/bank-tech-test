class CashMachine {
  constructor() {
    this.balance = 0.0;
    this.transactions = [];
  }

  showBalance() {
    return this.balance;
  }

  showTransactions() {
    return this.transactions;
  }

  depositMoney(value) {
    this.balance += value;
    this.transactions.push({deposit: value, balance: this.balance});
  }

  withdrawMoney(value) {
    if(value <= this.balance){
      this.balance -= value;
      this.transactions.push({withdrawal: value, balance: this.balance});
    } else {
      // If the user tries to withdrawn beyond their balance
      // total balance is withdrawn instead
      const newValue = this.balance
      this.balance -= newValue;
      this.transactions.push({withdrawal: newValue, balance: this.balance});
    }
  }
}

module.exports = CashMachine;
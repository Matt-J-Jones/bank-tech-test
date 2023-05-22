const CashMachine = require('./cashMachine');
const StatementPrinter = require('./statementPrinter');

class Bank {
  constructor() {
  this.atm = new CashMachine();
  this.printer = new StatementPrinter();
  }

  depositMoney(amount) {
    this.atm.depositMoney(amount);
  }

  withdrawMoney(amount) {
    this.atm.withdrawMoney(amount);
  }

  printStatement() {
    this.printer.printStatement(this.atm.showTransactions());
  }
}

module.exports = Bank;

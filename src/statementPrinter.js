class StatementPrinter {
  constructor() {
    this.defaultValue = [{ deposit: 0, withdrawal: 0, balance: 0, date: '01-01-2022' }];
  }

  printStatement(transactions = this.defaultValue) {
    console.log("date || credit || debit || balance");
    transactions.reverse().forEach(line => {
      console.log(`${line.date} || ${line.deposit} || ${line.withdrawal} || ${line.balance}`)
    });
  }
}

module.exports = StatementPrinter;
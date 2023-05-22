class StatementPrinter {
  constructor() {
    this.defaultValue = [{ deposit: 0, withdrawal: 0, balance: 0, date: '01-01-2022' }];
  }

  printStatement(transactions = this.defaultValue) {
    console.log("date || credit || debit || balance");
    transactions.forEach(line => {
      console.log(`${line.date} || ${line.deposit} || ${line.withdrawal} || ${line.balance}`)
    });
  }
}

module.exports = StatementPrinter;

// Information received from CashMachine in the following format:
// [ 
//   { deposit: 100, withdrawal: 0, balance: 100, date: '22-05-2022' },
//   { deposit: 0, withdrawal: 100, balance: 0, date: '22-05-2022' }
// ]

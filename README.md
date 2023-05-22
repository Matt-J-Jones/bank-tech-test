# Bank tech test
## Makers Week 9 Individual Challenge

The Bank Tech Test is a backend banking application that allows users to deposit and withdraw funds while ensuring they cannot withdraw more than their available balance. Users can also view a statement of their transaction history.

## Installation

To install the application, follow these steps:

```terminal
git clone https://github.com/Matt-J-Jones/bank-tech-test.git
cd bank-tech-test
npm install
```

To run tests:
```terminal
npm run test
```

### Usage

To use the application, follow these steps:

```terminal
// To create a new bank account
const bank = new Bank();

// To add & withdraw funds

bank.depositMoney({amount});
bank.withdrawMoney({amount});
// Alter {amount} to reflect deposit or withdraw amount
// program accepts both integer and float inputs

// To print a statement of transactions
bank.printStatement();
```

### Logic

The Bank Tech Test consists of three classes: CashMachine, StatementPrinter, and Bank. Here's an overview of their responsibilities:

* CashMachine: Handles the deposit and withdrawal of funds. Each transaction is stored as a hash object, including the withdrawal/deposit amount, the date (in DD-MM-YYYY format), and the current balance at the time of the transaction. These transaction objects are stored in an array.

* StatementPrinter: Prints the transaction history in reverse order, with a header.

* Bank: An integration object that brings together the CashMachine and StatementPrinter classes. It provides an interface for depositing, withdrawing, and printing statements. It also lays the groundwork for potential future development, such as implementing a frontend.
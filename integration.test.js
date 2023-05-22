const StatementPrinter = require('./statementPrinter');
const CashMachine = require('./cashMachine');
const TEST_DATE_1 = new Date(2023, 0, 10).toLocaleDateString('en-UK', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/\//g, '-');
const TEST_DATE_2 = new Date(2023, 0, 13).toLocaleDateString('en-UK', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/\//g, '-');
const TEST_DATE_3 = new Date(2023, 0, 14).toLocaleDateString('en-UK', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/\//g, '-');

describe('Bank Test', () => {
  beforeEach(() => {
    originalLog = console.log;
    mockLog = jest.fn();
    console.log = mockLog;
  });
  
  afterEach(() => {
    console.log = originalLog;
  });

  it('Deposits money into the bank, prints statement', () => {
    const printer = new StatementPrinter();
    const cashMachine = new CashMachine();

    cashMachine.depositMoney(125, TEST_DATE_1);
    printer.printStatement(cashMachine.showTransactions());
    expect(mockLog).toHaveBeenCalledWith("date || credit || debit || balance");
    expect(mockLog).toHaveBeenCalledWith("10-01-2023 || 125 || 0 || 125");
  })

  it('Client makes three transactions, prints statement', () => {
    const printer = new StatementPrinter();
    const cashMachine = new CashMachine();

    cashMachine.depositMoney(1000, TEST_DATE_1);
    cashMachine.depositMoney(2000, TEST_DATE_2);
    cashMachine.withdrawMoney(500, TEST_DATE_3);

    printer.printStatement(cashMachine.showTransactions());
    expect(mockLog).toHaveBeenCalledWith("date || credit || debit || balance");
    expect(mockLog).toHaveBeenCalledWith("14-01-2023 || 0 || 500 || 2500");
    expect(mockLog).toHaveBeenCalledWith("13-01-2023 || 2000 || 0 || 3000");
    expect(mockLog).toHaveBeenCalledWith("10-01-2023 || 1000 || 0 || 1000");
  })
})
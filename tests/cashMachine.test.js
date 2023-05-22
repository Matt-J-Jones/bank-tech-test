const CashMachine = require('../src/cashMachine');
const TEST_DATE = new Date(2022, 4, 22).toLocaleDateString('en-UK', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/\//g, '-');


describe('CashMachine', () => {
  it('Creates new cash machine object', () => {
    const cashMachine = new CashMachine();
    expect(cashMachine).toBeInstanceOf(CashMachine);
  });

  it('Returns a zero starting balance', () => {
    const cashMachine = new CashMachine();
    expect(cashMachine.showBalance()).toEqual(0.0);
  });

  it('Adds money to balance as int, returns total', () => {
    const cashMachine = new CashMachine();
    cashMachine.depositMoney(125);
    expect(cashMachine.showBalance()).toEqual(125.0);
  })

  it('Adds money to balance as float, returns total', () => {
    const cashMachine = new CashMachine();
    cashMachine.depositMoney(115.75);
    expect(cashMachine.showBalance()).toEqual(115.75);
  })

  it('Adds money to balance as a mix of float and int, returns total', () => {
    const cashMachine = new CashMachine();
    cashMachine.depositMoney(115.75);
    cashMachine.depositMoney(125);
    expect(cashMachine.showBalance()).toEqual(240.75);
  })

  it('Withdraws money from a positive balance as int, returns total', () => {
    const cashMachine = new CashMachine();
    cashMachine.depositMoney(100);
    cashMachine.withdrawMoney(20);
    expect(cashMachine.showBalance()).toEqual(80.0);
  })

  it('Withdraws money from a positive balance as float, returns total', () => {
    const cashMachine = new CashMachine();
    cashMachine.depositMoney(100);
    cashMachine.withdrawMoney(20.50);
    expect(cashMachine.showBalance()).toEqual(79.5);
  })

  it('Withdraws money from a positive balance as mix of float and int, returns total', () => {
    const cashMachine = new CashMachine();
    cashMachine.depositMoney(100);
    cashMachine.withdrawMoney(20.50);
    cashMachine.withdrawMoney(20);
    expect(cashMachine.showBalance()).toEqual(59.5);
  })

  it('Does not allow the user to withdraw past 0', () => {
    const cashMachine = new CashMachine();
    cashMachine.depositMoney(100);
    cashMachine.withdrawMoney(200);
    expect(cashMachine.showBalance()).toEqual(0);
  })

  it('Deposits money, shows transaction as hash', () => {
    const cashMachine = new CashMachine();
    cashMachine.depositMoney(100, TEST_DATE);
    expect(cashMachine.showBalance()).toEqual(100);
    expect(cashMachine.showTransactions()).toEqual([{deposit: 100, withdrawal: 0, balance: 100.0, date: TEST_DATE}]);
  })

  it('Deposits money, withdraws money, shows transaction as hash', () => {
    const cashMachine = new CashMachine();
    cashMachine.depositMoney(100, TEST_DATE);
    expect(cashMachine.showBalance()).toEqual(100);
    cashMachine.withdrawMoney(20, TEST_DATE);
    expect(cashMachine.showBalance()).toEqual(80);
    expect(cashMachine.showTransactions()).toEqual([{deposit: 100, withdrawal: 0, balance: 100.0, date: TEST_DATE}, {deposit:0, withdrawal: 20, balance: 80.0, date: TEST_DATE}]);
  })

  it('Deposits money, withdraws money past 0, shows transaction as hash', () => {
    const cashMachine = new CashMachine();
    cashMachine.depositMoney(50, TEST_DATE);
    expect(cashMachine.showBalance()).toEqual(50);
    cashMachine.withdrawMoney(60, TEST_DATE);
    expect(cashMachine.showBalance()).toEqual(0);
    expect(cashMachine.showTransactions()).toEqual([{deposit: 50, withdrawal: 0, balance: 50.0, date: TEST_DATE}, {deposit: 0, withdrawal: 50, balance: 0.0, date: TEST_DATE}]);
  })
})
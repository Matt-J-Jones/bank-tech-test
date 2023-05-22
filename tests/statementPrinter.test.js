const StatementPrinter = require('../src/statementPrinter');
let originalLog;
let mockLog;


describe('StatementPrinter', () => {
  beforeEach(() => {
    originalLog = console.log;
    mockLog = jest.fn();
    console.log = mockLog;
  });
  
  afterEach(() => {
    console.log = originalLog;
  });

  it('Creates a statement object', () => {
    const printer = new StatementPrinter();
    expect(printer).toBeInstanceOf(StatementPrinter);
  })

  it('Prints header text', () => {
    const printer = new StatementPrinter();
    printer.printStatement();
    expect(mockLog).toHaveBeenCalledWith("date || credit || debit || balance");
  })

  it('Prints formatted statement', () => {
    const printer = new StatementPrinter();
    transactions =
      [{ deposit: 100, withdrawal: 0, balance: 100, date: '22-05-2022' },
      { deposit: 0, withdrawal: 100, balance: 0, date: '22-05-2022' }];
    
    printer.printStatement(transactions);
    expect(mockLog).toHaveBeenCalledWith("date || credit || debit || balance");
    expect(mockLog).toHaveBeenCalledWith("22-05-2022 || 100 || 0 || 100");
    expect(mockLog).toHaveBeenCalledWith("22-05-2022 || 0 || 100 || 0");
  })
})
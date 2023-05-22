const StatementPrinter = require('./statementPrinter');

describe('StatementPrinter', () => {
  it('Creates a statement object', () => {
    const printer = new StatementPrinter();
    expect(printer).toBeInstanceOf(StatementPrinter);
  })
})
const assert = require('assert');
const { updateBalance } = require('../lib/balance');

describe('updateBalance', () => {
  it('adds deposits to the current balance', () => {
    assert.strictEqual(updateBalance(75, 25), 100);
  });

  it('subtracts withdrawals from the current balance', () => {
    assert.strictEqual(updateBalance(75, -25), 50);
  });
});

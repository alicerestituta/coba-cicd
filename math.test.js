const { tambah } = require('./math');

test('1 + 2 harus sama dengan 3', () => {
  expect(tambah(1, 2)).toBe(3);
});
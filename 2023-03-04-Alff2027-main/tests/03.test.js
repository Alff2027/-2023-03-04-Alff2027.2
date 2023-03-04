const divisores = require('../03.js')

describe('divisores', function() {
  it('should return [3, 5]', function() {
    expect(divisores(15)).toEqual([3, 5]);
  });
  it('should return "Es primo"', function() {
    expect(divisores(11)).toEqual('Es primo');
  });
});
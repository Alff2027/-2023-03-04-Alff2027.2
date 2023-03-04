const repeatCharacters = require('../09.js')
describe('repetirCaracteres',function() {
  repeatCharacters()
  it('should return "hhoollaa"', function() {
      expect('hola'.repeatCharacters()).toBe('hhoollaa');
  });
  it('should return "hheennrryy"', function() {
    expect('henry'.repeatCharacters()).toBe('hheennrryy');
  });
});

const palabraMasLarga = require('../05.js')

describe('palabraMasLarga', function() {
  it('should return "palabra"', function() {
  expect(palabraMasLarga(['hola esto string', 'frase con palabra'])).toEqual('palabra');
  });
  it('should return "reallylong"', function() {
  expect(palabraMasLarga(['this is reallylong', 'short words', 'hi'])).toEqual('reallylong');
  });
});
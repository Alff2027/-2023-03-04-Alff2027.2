const cuantosOnline = require('../02.js')
let usuarios = {
  toni: {
      online: false
  },
  emi: {
      online: true
  },
  fran: {
      online: false
  },
  agus: {
      online: true
  }
};

let usuarios2 = {
  toni: {
      online: true
  },
  emi: {
      online: false
  },
  fran: {
      online: false
  },
  agus: {
      online: false
  }
};
describe('cuantosOnline', function() {
  it('should return 2', function() {
      expect(cuantosOnline(usuarios)).toBe(2)
  });
  it('should return 1', function() {
    expect(cuantosOnline(usuarios2)).toBe(1)
  });
});
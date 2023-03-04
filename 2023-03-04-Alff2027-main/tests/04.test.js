const actividadesEnComun = require('../04.js')

describe('actividadesEnComun', function() {
  it('should return ["leer", "dormir"]', function() {
      const person1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
      const person2 = ['futbol', 'leer', 'programar', 'dormir'];
      expect(actividadesEnComun(person1,person2)).toContain('leer');
      expect(actividadesEnComun(person1,person2)).toContain('dormir');
  });

  it('should return ["programar", "comer"]', function() {
    const person1 = ['programar', 'tennis', 'viajar', 'comer', 'movies'];
    const person2 = ['escribir', 'comer', 'programar', 'dibujar'];

    expect(actividadesEnComun(person1, person2)).toContain('programar');
    expect(actividadesEnComun(person1, person2)).toContain('comer');
  });
});
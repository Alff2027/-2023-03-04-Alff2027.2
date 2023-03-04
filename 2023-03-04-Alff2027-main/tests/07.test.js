const crearClaseEmprendedor = require('../06-07-08.js')

describe('crearClaseEmprendedor', function() {
  it('should get the number of pets', function() {
      const Emprendedor = crearClaseEmprendedor();
      const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
      expect(emprendedor.getMascotas()).toBe(2);
  });
  it('should add a book with addBook', function() {
      const Emprendedor = crearClaseEmprendedor();
      const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
      emprendedor.addBook('The Foundation Trilogy', 'Isaac Asimov');
      expect(emprendedor.libros[1]).toEqual({nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'});
  });
});
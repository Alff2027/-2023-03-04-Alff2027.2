const crearClaseEmprendedor = require('../06-07-08.js')

describe('crearClaseEmprendedor', function() {
  it('should return a user constructor that correctly builds user objects', function() {
      const Emprendedor = crearClaseEmprendedor();
      const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
      expect(emprendedor.nombre).toBe('Elon');
      expect(emprendedor.apellido).toBe('Musk');
      expect(emprendedor.libros).toEqual([{nombre: 'Lord of the Flies',autor: 'William Golding'}]);
      expect(emprendedor.mascotas).toEqual(['perro','gato']);
  });
  it('should add a pet with addMascota', function() {
    const Emprendedor = crearClaseEmprendedor();
    const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
    emprendedor.addMascota('loro');
    expect(emprendedor.mascotas[2]).toBe('loro');
  });
});
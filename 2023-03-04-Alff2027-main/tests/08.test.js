const crearClaseEmprendedor = require('../06-07-08.js')

describe('crearClaseEmprendedor', function() {
  it('should get all books name with getBooks', function() {
    const Emprendedor = crearClaseEmprendedor();
    const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}, {nombre: 'The Foundation Trilogy', autor: 'Isaac Asimov'}], ['perro','gato']);
    expect(emprendedor.getBooks()).toEqual(['Lord of the Flies','The Foundation Trilogy']);
  });
  it('should get full name with getFullName', function() {
    const Emprendedor = crearClaseEmprendedor();
    const emprendedor = new Emprendedor('Elon', 'Musk', [{nombre: 'Lord of the Flies',autor: 'William Golding'}], ['perro','gato']);
    const nombre = emprendedor.nombre;
    const apellido = emprendedor.apellido;
    expect(emprendedor.getFullName()).toBe(`${nombre} ${apellido}`);
  });
});
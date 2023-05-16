const Manager = require('../library/manager');

describe('Manager', () => {
  it('should create a new manager with the given name, id, email, and office number', () => {
    const name = 'Mauricio Trevino';
    const id = 1;
    const email = 'mtrevino@example.com';
    const officeNumber = 12345;

    const manager = new Manager(name, id, email, officeNumber);

    expect(manager.name).toEqual(name);
    expect(manager.id).toEqual(id);
    expect(manager.email).toEqual(email);
    expect(manager.officeNumber).toEqual(officeNumber);
  });

  it('should return the office number when getOfficeNumber() is called', () => {
    const manager = new Manager(
      'Mauricio Trevino',
      1,
      'mtrevino@example.com',
      12345
    );

    expect(manager.getOfficeNumber()).toEqual(12345);
  });

  it('should return "manager" when getRole() is called', () => {
    const manager = new Manager(
      'Mauricio Trevino',
      1,
      'mtrevino@example.com',
      12345
    );

    expect(manager.getRole()).toEqual('manager');
  });
});

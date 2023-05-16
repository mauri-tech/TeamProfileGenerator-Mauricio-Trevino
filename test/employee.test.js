const Employee = require('../library/employee');

describe('employee', () => {
  it('should create an employee object with name "Mauricio Trevino"', () => {
    const employee = new Employee(
      'Mauricio Trevino',
      1,
      'mtrevino@example.com'
    );
    expect(employee.name).toEqual('Mauricio Trevino');
  });

  it('should return the employee name when getName() is called', () => {
    const employee = new Employee(
      'Mauricio Trevino',
      1,
      'mtrevino@example.com'
    );
    expect(employee.getName()).toEqual('Mauricio Trevino');
  });

  it('should return the employee id when getId() is called', () => {
    const employee = new Employee(
      'Mauricio Trevino',
      1,
      'mtrevino@example.com'
    );
    expect(employee.getId()).toEqual(1);
  });

  it('should return the employee email when getEmail() is called', () => {
    const employee = new Employee(
      'Mauricio Trevino',
      1,
      'mtrevino@example.com'
    );
    expect(employee.getEmail()).toEqual('mtrevino@example.com');
  });

  it('should return "employee" when getRole() is called', () => {
    const employee = new Employee(
      'Mauricio Trevino',
      1,
      'mtrevino@example.com'
    );
    expect(employee.getRole()).toEqual('employee');
  });
});

const Engineer = require('../library/engineer');

describe('Engineer', () => {
  it('should create an object with name, id, email, and github properties', () => {
    const engineer = new Engineer('Mauricio Trevino', 123, 'mtrevino@example.com', 'mtrevino');
    expect(engineer.name).toEqual('Mauricio Trevino');
    expect(engineer.id).toEqual(123);
    expect(engineer.email).toEqual('mtrevino@example.com');
    expect(engineer.github).toEqual('mtrevino');
  });

  it('should return the github username when getgithub() is called', () => {
    const engineer = new Engineer('Mauricio Trevino', 123, 'mtrevino@example.com', 'mtrevino');
    expect(engineer.getgithub()).toEqual('mtrevino');
  });

  it('should return "engineer" when getRole() is called', () => {
    const engineer = new Engineer('Mauricio Trevino', 123, 'mtrevino@example.com', 'mtrevino');
    expect(engineer.getRole()).toEqual('engineer');
  });
});

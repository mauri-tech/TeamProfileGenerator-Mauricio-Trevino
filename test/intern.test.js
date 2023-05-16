const Intern = require('../library/intern');

describe('Intern', () => {
  it('should create an intern object', () => {
    const intern = new Intern('Mauricio Trevino', 1, 'mtrevino@example.com', 'University of Texas');
    
    expect(intern.name).toEqual('Mauricio Trevino');
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual('mtrevino@example.com');
    expect(intern.school).toEqual('University of Texas');
  });

  it('should get the intern school', () => {
    const intern = new Intern('Mauricio Trevino', 1, 'mtrevino@example.com', 'University of Texas');

    expect(intern.getschool()).toEqual('University of Texas');
  });

  it('should get the intern role', () => {
    const intern = new Intern('Mauricio Trevino', 1, 'mtrevino@example.com', 'University of Texas');

    expect(intern.getRole()).toEqual('intern');
  });
});

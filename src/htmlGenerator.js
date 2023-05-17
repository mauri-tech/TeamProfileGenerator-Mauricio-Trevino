const manager = require('../library/manager');
const engineer = require('../library/engineer');
const intern = require('../library/intern');

function generateManagerCard(employee) {
  return `
    <div class="card">
      <h3>${employee.getName()}</h3>
      <p>Manager</p>
      <ul>
        <li>Employee ID: ${employee.getId()}</li>
        <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
        <li>Office Number: ${employee.getOfficeNumber()}</li>
      </ul>
    </div>
  `;
}

function generateEngineerCard(employee) {
  return `
    <div class="card">
      <h3>${employee.name}</h3>
      <p>Engineer</p>
      <ul>
        <li>Employee ID: ${employee.id}</li>
        <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
        <li>GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></li>
      </ul>
    </div>
  `;
}

function generateInternCard(employee) {
  return `
    <div class="card">
      <h3>${employee.name}</h3>
      <p>Intern</p>
      <ul>
        <li>Employee ID: ${employee.id}</li>
        <li>Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
        <li>School: ${employee.school}</li>
      </ul>
    </div>
  `;
}

function htmlGenerator(teamMembers) {
  const managerCards = teamMembers
    .filter((employee) => employee instanceof manager)
    .map(generateManagerCard)
    .join('');

  const engineerCards = teamMembers
    .filter((employee) => employee instanceof engineer)
    .map(generateEngineerCard)
    .join('');

  const internCards = teamMembers
    .filter((employee) => employee instanceof intern)
    .map(generateInternCard)
    .join('');

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Overview</title>
        <link rel="stylesheet" href="../src/style.css">
      </head>
      <body>
        <header>
          <h1>Team Overview</h1>
        </header>
        <main>
          ${managerCards}
          ${engineerCards}
          ${internCards}
        </main>
      </body>
    </html>
  `;

  return html;
}

module.exports = htmlGenerator;
# Team Profile Generator

## Description
The Team Profile Generator is a command-line application built with Node.js. It allows users to generate an HTML webpage that displays a summary for each member of a software engineering team. The application prompts the user to provide information about each team member, including their name, employee ID, email address, and other details specific to their role. The generated webpage presents the information in a well-formatted team roster.

## Installation
To use this application, follow these steps:
1. Clone the repository to your local machine.
2. Run `npm install` to install the necessary dependencies, including Inquirer version 8.2.4 and Jest.

## Usage
To run the application, open the command line and enter the following command: `node index.js`

The application will prompt you to enter the team manager's name, employee ID, email address, and office number.

After providing the manager's information, you will be presented with a menu that offers the option to add an engineer, an intern, or finish building your team. If you choose to add an engineer, you will be prompted to enter the engineer's name, ID, email, and GitHub username. Similarly, if you choose to add an intern, you will need to provide the intern's name, ID, email, and school name. You can continue adding engineers and interns as needed.

Once you have finished building your team, the application will generate an HTML file and save it to the public directory.

## Walkthrough Video
Please click on the following link to watch a walkthrough video that demonstrates the application's functionality and shows all the tests passing: [Video Link](#)

## License
This project is licensed under the MIT License.

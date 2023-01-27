
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        // manager questions
        {
            type: 'input',
            name: 'manager_name',
            message: 'Manager Name.',
        },
        {
            type: 'input',
            name: 'employee_id',
            message: 'Enter employee ID.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email.',
        },
        {
            type: 'input',
            name: 'officenum',
            message: 'Enter office phone number',
        },
        // End of Manager Question
        {
            type: 'list',
            name: 'More Team Members?',
            choices: ["Engineer", "Intern", "The team is complete."]
        },
        {
            type: "input",
            name: "engin_name",
            message: "Enter engineer's name."
        },
        {
            type: 'input',
            name: 'engin_id',
            message: 'Enter engineers ID.',
        },
        {
            type: 'input',
            name: 'engin_email',
            message: 'Enter engineers email.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineer github username.',
        },
        {
            type: 'confirm',
            name: 'Add and Intern ?',
            choices: ["yes", "no"]
        },
        {
            type: "input",
            name: "intern_name",
            message: "Enter intern's name.",
        },
        {
            type: 'input',
            name: 'itern_id',
            message: 'Enter intern ID.',
        },
        {
            type: 'input',
            name: 'intern_email',
            message: 'Enter intern email.',
        },
        {
            type: "input",
            name: "school",
            message: "What's the school the intern is enrolled in ?",
        },
    ])

    .then((answers) => {
        const htmlPageContent = generateHtml(answers);
        fs.writeFile('index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html !')
        );
    })
    .catch((error) => {
        if (error.isTtyError) {
            console.log("You have an error!!!!!!!")
            // Prompt couldn't be rendered in the current environment
        } else {
            console.log("HTML FILE FAILED TO RENDER!!!!")
            // Something else went wrong
        }
    });
// below -  generation of the html file with the information populate from the information input in the command line.
const generateHtml = ({ manager_name, employee_id, email, officenum, engin_name, engin_id, engin_email, github, intern_name, intern_id, intern_email, school }) =>
    `<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>

<body>
    <section class="hero is-primary has-text-centered">
    <div class="hero-body">
      <p class="title">
        My Team
      </p>
    </div>
  </section>
          <div class="columns is-mobile">
            <div class="column">
                <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <h1 class="title is-3">Manager</h1>
                    <h1 class="title is-4">${manager_name}</h1> 
                    <ul>
                        <li>Employee ID:${employee_id}</li>
                        <li>Email Address: ${email}</li>
                        <li>Office #:${officenum}</li>
                    </ul>
                      </div>
                    </div>
                  </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <h1 class="title is-3">Engineer</h1>
                    <h1 class="title is-4">${engin_name}</h1> 
                    <ul>
                        <li>Employee ID:${engin_id}</li>
                        <li>Email Address: ${engin_email}</li>
                        <li>www.github.com/${github}</li>
                    </ul>
                      </div>
                    </div>
                  </div>
            </div>
            <div class="column">
                <div class="card">
                    <div class="card-content">
                      <div class="content">
                        <h1 class="title is-3">Intern</h1>
                    <h1 class="title is-4">${intern_name}</h1> 
                    <ul>
                        <li>Employee ID:${intern_id}</li>
                        <li>Email Address: ${intern_email}</li>
                        <li>School Name:${school}</li>
                    </ul>
                    </div>
                  </div>
              </div>
          </div>
        </div>
</html>`

const inquirer = require('inquirer');
const fs = require('fs');


inquirer
    .prompt([
        // manager questions
        {
            type: 'input',
            name: 'manager_name',
            message: 'Manager Name?',
        },
        {
            type: 'input',
            name: 'employee_id',
            message: 'Enter employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email.',
        },
        {
            type: 'input',
            name: 'office_number',
            message: 'Enter office phone number?',
        },
        {
            type: 'input',
            name: 'trigger_engineer',
            message: 'Would you like to add an engineer?',
        },

        // Engineer Questions - stopped here for the night
        {
            type: 'list',
            name: 'license',
            choices: ["BSD", "MIT", "GPL", "Mozilla", "Apache", "Boost", "The Unlicense"]
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What are your contribution guidelines?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are your testing requirements?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter your email for additional questions',
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
const generateHtml = ({ title, description, installation, usage, license, contribution, test, github, questions }) =>
    `<!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    </head>
    
    <body>
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="card" style="width: 18rem;">
<div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Test</a>
</div>
</div>
    </body
    </html>`

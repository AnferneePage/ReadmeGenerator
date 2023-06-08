
const inquirer = require('inquirer');
const fs = require('fs');



const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title or name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Can you provide a brief description of your project\'s purpose and functionality?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How should users install and set up your project? Are there any dependencies or system requirements?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can users effectively use your application or project? Are there any specific commands or steps they need to follow?',
    },
    {
        type: 'input',
        name: 'screenshots',
        message: 'Can you provide any screenshots or visual assets to include in the README.md file?',
    },
    {
        type: 'input',
        name: 'features',
        message: 'What are the main features or functionalities of your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Are you open to contributions from other developers? If so, what guidelines or instructions should they follow?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Do you have a specific license for your project? If yes, which one?',
    },
    {
        type: 'input',
        name: 'author',
        message: 'Who is the creator or main contributor of the project? Can you provide their name or contact information?',
    },
    {
        type: 'input',
        name: 'contact',
        message: 'If users have questions or need support, how can they reach out to you or your team?',
    },
];



function writeToFile(fileName, data) {
    inquirer
        .prompt(questions)
        .then(answers => {
            const content = generateReadmeContent(answers); 
            fs.writeFile(fileName, content, err => {
                if (err) {
                    console.error('An error occurred while writing the file:', err);
                } else {
                    console.log('README file has been successfully created!');
                }
            });
        })
        .catch(error => {
            console.error('An error occurred:', error);
        });
}

function generateReadmeContent(answers) {
    
    const content = `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}
  ${answers.screenshots}

  ## Features
  ${answers.features}

  ## Contribute
  ${answers.contributing}

  ## License
  ${answers.license}

  ## Author
  ${answers.author}

  ## Contact
  ${answers.contact}


  
  `;
    return content;
}


function init() {
    writeToFile('./dist/README.md', {});
}


init();


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === 'MIT'){
    data.licenseBadge = 'MIT';
  }
  if (data.license === 'Community License'){
    data.licenseBadge = 'Community License';
  }
  if (data.license === 'GNU GPLv3'){
    data.licenseBadge = 'GNU GPLv3';
  }
  else {
    '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === 'MIT'){
    data.licenseLink = 'MIT';
  }
  if (data.license === 'Community License'){
    data.licenseLink = 'Community License';
  }
  if (data.license === 'GNU GPLv3'){
    data.licenseLink = 'GNU GPLv3';
  }
  else{
    '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!data.license){
    '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribute](#contribute)
  -[Tests](#tests)
  -[Credits](#credits)
  -[Features](#features)
  -[License](#license)

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##Contribute
  ${data.contribute}

  ##Tests
  ${data.tests}

  ##Credits
  ${data.credits}

  ##Features
  ${data.features}

  ##License
  ${data.license}

  ##Questions
  If you have any questions email me @ ${data.email}
  Check out my github profile to view other projects and this one at https://github/${data.github}

`;
}

module.exports =  generateMarkdown;

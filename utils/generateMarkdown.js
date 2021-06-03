// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license} Badge](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[here](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   return `${renderLicenseBadge(license)}`
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
    
  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#License)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#Questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  View ${data.license} information ${renderLicenseLink(data.license)}.

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions regarding this app, please email ${data.email} or visit https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;

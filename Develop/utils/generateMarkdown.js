const iconvlite = require('iconv-lite');
const fs = require('fs');

const licenses = [
  "MIT",
  "GPU v2",
  "Apache 2.0",
  "ISC"
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'GNU v2':
        return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)        '
      case 'Apache 2.0':
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      case 'ISC':
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      default:
        return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {switch(license){
  case 'GNU v2':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'ISC':
      return 'https://opensource.org/licenses/ISC';
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    default:
      return '';
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var badge = renderLicenseBadge(data.license);
  var license = renderLicenseSection(data.license);
  return `# ${data.title}

  ${badge}

  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Collaborators](#collaborators)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  
  # Description

  ${data.summary}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Collaborators

  ${data.collaborators}

  ## Contribution

  If you'd like to contribute, please request contribution access on the project's GitHub page, which can be found on my profile at [${data.github}](https://github.com/${data.github}), or refer to the [Questions](#questions) section for my contact info!

  ## Tests

  ${data.tests}

  ## Questions

  Want to get in touch? Reach me at ${data.devEmail}.

  If you want to submit a bug report, my github is [${data.github}](https://github.com/${data.github}).

  ## License

  ${license}
`;
}

module.exports = { generateMarkdown, licenses};

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let licenseType = data.license;
  let yourLicense = '';
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GNU General') {
    yourLicense = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`
  } else if (licenseType === 'BSD2') {
    yourLicense = `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`
  } else {
    yourLicense = "N/A"
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  let licenseType = data.license;
  let yourLicense = '';
  if(licenseType === 'MIT') {
    yourLicense = `[Link to License](https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'GNU General') {
    yourLicense = `[Link to License](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (licenseType === 'BSD2') {
    yourLicense = `[Link to License](https://opensource.org/licenses/BSD-2-Clause)`
  } else {
    yourLicense = "N/A"
  }
  return yourLicense;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let badge = renderLicenseBadge(data);
  let link = renderLicenseLink(data);

  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${badge}\n
  ${link}

  ## Contributors
  ${data.contributing}

  ## Test Instructions
  ${data.tests}

  ## Questions
  If you have any questions feel free to go to my github account [${data.username}](https://github.com/${data.username}) or email me at [${data.email}](${data.email}).
  
`;
}

module.exports = generateMarkdown;
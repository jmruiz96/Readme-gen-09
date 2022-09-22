// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "MIT": license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Apache": license = "[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GPL": license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "none": license = "";
      break;
    }
    return license
}
//cannot get badges to work will have to switch to es6?

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT"){
    return "https://opensource.org/licenses/MIT"
  } else if (license === "Apache"){
    return "https://opensource.org/licenses/Apache-2.0"
  }  else if (license === "GPL"){
    return "https://www.gnu.org/licenses/gpl-3.0"
  }else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case "MIT": license = `> **Note**: This application is covered under the ${license} license.`;
      break;
    case "Apache": license = `> **Note** This application is covered under the ${license} license.`;
      break;
    case "GPL": license = `> **Note** This application is covered under the ${license} license.`;
      break;
    case "none": license = "N/A";
      break;
  }
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // I tried to put the different inputs in the () but it didnt work so I just put data in there.
  return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Contact](#contact)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Contact
Feel free to reach out to me with any questions.  
[Github](https://github.com/${data.github})  
[Email](mailto:${data.email})
`;
}
//had to add 'data.' infront of all the targets
module.exports = generateMarkdown;

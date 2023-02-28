// checks the license the user selects and gets the badge for that license
function getLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } 
  else if(license === 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } 
  else if(license === 'Open Database License (ODbL)'){
    return `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`
  } 
  else if(license === 'GNU GPL v3'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } 
  else if(license === 'GNU AGPL v3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`    
  } 
  else if(license === 'GNU GPL v2') {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }

  return;

}

// function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  
  // console.log(answers.answers.Title);
  
  return `# ${answers.answers.Title} 

  ${getLicenseBadge(answers.answers.License)}

  ## Description
  ${answers.answers.Description}

  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Installation

  Use the following commands to install any dependencies:

  ${answers.answers.Installation}

  ## Usage

  ${answers.answers.Usage}

  ## License

  ${answers.answers.License}

  ## Contributing

  ${answers.answers.Contributing}

  ## Tests 

  ${answers.answers.Tests}

  ## Questsions

  If you have any questions, please contact me on: 

  ${answers.answers.Questions}

  Or you can visit my github page:

  https://github.com/${answers.answers.github}

`; 
}

module.exports = generateMarkdown;

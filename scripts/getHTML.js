const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('./_site/').filter(file => path.extname(file) === '.html');
console.log(files);

fs.writeFile(
  `./_site/index.json`,
  `{"files": ${JSON.stringify(files)} }`,
  err => {
    if (err) {
      console.error(err);
    }
    console.log('file generated successfully.');
  }
);

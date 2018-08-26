const fs = require('fs');
const path = require('path');
const readdir = require("recursive-readdir");
const slash = require('slash');
const htmlPath = '_site';
// const files = fs.readdirSync(htmlPath).filter(file => path.extname(file) === '.html');

module.exports = readdir(htmlPath).then(
    function(files) {
      return files
        .filter(file => path.extname(file) === '.html')
        .map(file => slash(file.replace(htmlPath,"").replace("index.html","")));
      
    },
    function(error) {
      console.error("something error", error);
    }
  );


// fs.writeFile(
//   `./_site/index.json`,
//   `{"files": ${JSON.stringify(files)} }`,
//   err => {
//     if (err) {
//       console.error(err);
//     }
//     console.log('file generated successfully.');
//   }
// );



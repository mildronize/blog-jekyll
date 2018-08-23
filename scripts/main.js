const cheerio = require('cheerio');
const fs = require('fs');
// const $ = cheerio.load('<h2 class="title">Hello world</h2>')

// $('h2.title').text('Hello there!')
// $('h2').addClass('welcome')

// console.log($.html());

const recursive = require("recursive-readdir");
const ignore = ["*.jpg", "*.png", "*.gif","*.woff", "*.woff2","*.svg", "*.ttf","*.otf", "*.eot", "*.js", "*.css","CNAME", "*.xml"] ;

recursive("_site", ignore,  function (err, files) {
  // console.log(files);
  files.forEach(function(file){
    fs.readFile(file, 'utf8', (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          console.error(file + 'does not exist');
          return;
        }
        throw err;
      }
    
      // console.log(content);
      const $ = cheerio.load(content);
      console.log("Hey: " + file);
      // $('img').each(function() {
      //   var $img = $(this);
      //   var imgsrc = $img.attr('src');
      //   var imgalt = $img.attr('alt');

      //   console.log(imgsrc);
      //   $img.replaceWith( "<p>This is an image</p>" );
      // });
      console.log($.html.html);
    //   fs.writeFile(file, $.html, function(err, data){
    //     if (err) console.log(err);
    //     console.log("Successfully Written to File.");
    // });
        // $img.replaceWith( "<p>This is an image</p>" );
        // console.log($.html());
    });
  });


});

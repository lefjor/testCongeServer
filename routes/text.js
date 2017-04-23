var express = require('express');
var fs = require('fs');
var replace = require('replace-in-file');

var router = express.Router();
router.get('/', buildText);

function buildText(req, res) {
  copySync(__dirname + '/text.txt', __dirname + '/toto.txt');

}

function copySync(src, dest) {
  /*  fs.readFile(src, function (err, data) {
   if (err) throw err;
   console.log(data);
   });*/

  /*  if (!fs.existsSync(src)) {
   return false;
   }*/

  var data = fs.readFileSync(src, 'utf-8');



/*  console.log(data);
  fs.writeFile(dest, data, function (err) {
    if (err) {
      return console.log(err);
    }
  });*/


}

function replacement () {
  const options = {
    files: __dirname + '/toto.txt',
    from: [/{LASTNAME}/g],
    to: ['bar'.toUpperCase()],
  };

  try {
    var changedFiles = replace.sync(options);
    console.log('Modified files:', changedFiles.join(', '));
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
}

module.exports = router;

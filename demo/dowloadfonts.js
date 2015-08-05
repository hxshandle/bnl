"use strict";

var wget = require('wget');
var _ = require('lodash');
var process = require('process');
var path = require('path');
var cp = require('child_process');
var src = 'https://raw.github.com/Fyrd/caniuse/master/data.json';
var output = '/tmp/data.json';
var options = {
  proxy: 'http://proxy.successfactors.com:8080'
};


process.env.http_proxy = "http://proxy.successfactors.com:8080";
process.env.http_proxy = "http://proxy.successfactors.com:8080";

var baseURL = "http://www.gogoro.com";
var outputBase = "/"
var downloadFonts = {
  graphik: ["Graphik-Light-Web", "Graphik-Semibold-Web", "Graphik-BlackItalic-Web"],
  flama: ["FlamaCondensed-Bold", "FlamaCondensed-Semibold", "FlamaSemicondensed-Ultralight"]
}
var fontTypes = ["eot", "woff", "ttf", "svg"];


function _download(src, out, option) {
  console.log('start downlowd ' + src);
  var download = wget.download(src, output, options);
  download.on('error', function(err) {
    console.log(err);
  });
  download.on('end', function(output) {
    console.log(output);
  });
  download.on('progress', function(progress) {
    console.log("[" + progress + "] " + out);
  });
}

var fontFamily = _.keys(downloadFonts);
fontFamily.forEach(function(familyName, index, arr) {
  var fonts = downloadFonts[familyName];
  fonts.forEach(function(fontName, idx, fontArr) {
    fontTypes.forEach(function(ext) {
      var src = baseURL + "/fonts/" + familyName + "/" + fontName + "." + ext;
      var output = path.join(__dirname, "../www/fonts/", familyName, fontName + "." + ext);
      var _cmd = "curl -o " + output + " " + src;
      var ls = cp.exec(_cmd, {});
      ls.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
      });

      ls.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
      });

      ls.on('exit', function(code) {
        console.log('child process exited with code ' + code);
      });
    });
  });
});


/**/
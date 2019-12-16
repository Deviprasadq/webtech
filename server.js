var express = require("express");

var path = require('path');

var bodyParser = require("body-parser");


var markdown = require("markdown-js");
var fs = require("fs");
var markD = require('markdown-table');


var str1 = fs.readFileSync("Introduction\\Chapter-one.md", "utf8");
var str2 = fs.readFileSync("Introduction\\Chapter-two.md", "utf8");

var result1 = markdown.makeHtml(str1);
var result2 = markdown.makeHtml(str2);

console.log(result1);
console.log(result2);

app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'Introduction')));

app.get('/', function (req, res) {
    res.sendFile("F:\\CloudYuga\\assignment-master\\index.html");
});
app.get('/Introduction/Chapter-one', function (req, res) {
    res.send(result1);
});
app.get('/Introduction/Chapter-two', function (req, res) {
    res.send(result2);
});
app.get('/Setup/Installation/Chapter-One', function (req, res) {

    var installation = fs.readFileSync("Setup\\Installation\\Chapter-One.md", "utf8");

    res.send(outPut = markdown.makeHtml(installation));
});
app.get('/Setup/Configuration/Chapter-One', function (req, res) {

    var configuration = fs.readFileSync("Setup\\Configuration\\Chapter-One.md", "utf8");
    res.send(outPut = markdown.makeHtml(configuration));
});




console.log('*****loading MD file');
app.listen(5000);

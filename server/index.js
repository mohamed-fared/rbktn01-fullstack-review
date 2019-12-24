const express = require('express');
let app = express();
const savedb = require('../database')
const bodyParser = require('body-parser')
const http = require ('http')
const request = require('request');
var getUser = require('../helpers/github')


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.post('/repos', function (req, res) {

  var callback = function (err,response,body){
  console.log(response.statusCode)
  var data = JSON.parse(body)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(data)
    for(var i = 0 ; i < data.length;i++){
      savedb.save(data[i])
    }

}
getUser.getReposByUsername(req.body.name,callback)

  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {

  savedb.repo.find({"name" : "HoudaRs"},function(err,data){
    console.log(data.length)
    res.send(data)
  }).limit(5)


  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


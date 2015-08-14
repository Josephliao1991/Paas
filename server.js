
var express = require('express');
var bodyparser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var argv = require('optimist').argv;

  //Connect to Mongodb
  mongoose.connect('mongodb://'+argv.be_ip+':80/pass_db');

  //set express to app
  var app = express();
  app.use(bodyparser.json({
    verify: function (req, res, buf, encoding) {
        req.rawBody = buf;
    }
}));
app.use(bodyparser.urlencoded({
    extended: false,
    verify: function (req, res, buf, encoding) {
        req.rawBody = buf;
    }
}));
  // app.use(bodyparser.raw)
  // app.use(bodyparser.json())
  // app.use(bodyparser.urlencoded({extended: false}))
  app.use(bodyparser.json({ type: 'application/vnd.api+json' }))
  app.use(methodOverride())

  //Testing api
  app.get('/',function(request,response){
    response.end("Hello world, This is Pass Test Server!");
  });

  app.get('/create', function (request, response) {
    // body...
    var key = request.query.key
    console.log("Key : "+key);
    var value = request.query.value
    console.log("Value : "+value);
    var rowBody = request.rawBody
    console.log("rowBody : "+rowBody);
    // console.log("ParamS[0] :"+params[0]);
    response.json({result:params})
  })

  app.listen(8080,argv.fe_ip,function(request, response) {
  // app.listen(80,argv.fe_ip,function(request, response) {
    // body...
    // console.log('App listening at http://%s:%s', server.address().address, server.address().port);
    console.log("Press Ctrl+C to quit.");
    console.log("server start");

  })

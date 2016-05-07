//Vars
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');

var app = express();
app.use('/app', express.static(__dirname + '/app')); //public folder for static content Angular
app.use('/bower_components', express.static(__dirname + '/bower_components')); //public folder for static content bower depedencies
app.set('views', __dirname + '\\app'); //remapping default views express/node directory to angular app, still using ejs
//database
//var db = mongojs("MEAN1223", ["employees"]);

//require mongoose models
fs.readdirSync(__dirname + '/models').forEach(function(fileName){
	require(__dirname + '/models/' + fileName);
});

//Mongoose setup
mongoose.connect('mongodb://localhost/MEAN1223');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Mongoose connected');
});

// var employeeSchema = mongoose.Schema({employeeAge : String, employeeName : String});
// var Employee = mongoose.model('Employee', employeeSchema);


//Server
var server = app.listen(3000,function(){
	console.log('Listening on port 3000 :)')
});

//Configuration
app.set('view engine','ejs');
app.use(bodyParser.json());

//Routes
app.get('/', function (req,res) {
	res.render('index');
});

//Examples
app.get('/me', function (req,res) {
	res.send('maciejc85');
});
app.get('/who/:name?', function (req,res) {
	var name = req.params.name;
	res.send(name + ' was here');
});
app.get('/who/:name?/:title?', function (req,res) {
	var name = req.params.name;
	var title = req.params.title;
	res.send('<div>name: ' + name + '</div>' +
			 '<div>title: ' + title + '</div>');
});

//Date Endpoints
//Get All
app.get('/employees', function (req,res) {
	mongoose.model('Employee').find({}, function (err,doc){
		res.json(doc);
	});
});
//Get Id
app.get('/employees/:id', function (req,res){
	// db.employees.findOne({_id : mongojs.ObjectId(req.params.id)}, function(err, doc){
	// 	res.json(doc);
	// });
	mongoose.model('Employee').find({_id : req.params.id}, function (err,doc){
		res.json(doc);
	});
});

//Put
app.put('/employees/:id', function (req,res){
	// db.employees.findAndModify({
	// 	query : {_id : mongojs.ObjectId(req.params.id)},
	// 	update : {$set : {employeeAge : req.body.employeeAge, employeeName : req.body.employeeName}},
	// 	new:true
	// }
	// , function (err, doc, lastErrorObject){
	// 	res.json(doc);
	// });
});

//Post
app.post('/employees', function (req,res) {
	var employee = req.body;
	db.employees.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

//Delete
app.delete('/employees/:id', function (req,res){
	var id = req.params.id;
	console.log(id);
	// db.employees.remove({_id : mongojs.ObjectId(id)}, function(err, doc){
	// 	res.json(doc);
	// });
});


//Default route
app.get('*', function (req,res) {
	res.send('Bad Route');
});
var bodyParser = require('body-parser')
var session = require('express-session')
var db=require("./db")
var jwt = require('jsonwebtoken');


function rout(app){

	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(bodyParser.json({limit:'50mb'}))



	app.set('trust proxy', 1) // trust first proxy
	app.use(session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
	}))


//routs
	app.get('/', function(req, res) {
		if (req.session.name){
			res.render("dashboard", { name: req.session.name, pass: req.session.pass })
		}else{
			res.render('login')
		}
	})


	app.post("/",function(req,res){
		var bd = req.body;
		db.getdb("ft",(e)=>{
			_db = e[0];

			if(_db.pass==bd.pass){
				req.session.name = bd.name;
				req.session.pass = bd.pass;
				res.render("dashboard", { name: bd.name,  pass: bd.pass })
			}else{
				res.send("incorrent")
			}
		})		
	})


//addVoter
	app.post("/addVoter",function(req,res){
		var bd = req.body;
		db.addVoter(bd.user,bd.name,bd.email,bd.img,(cb)=>{
			res.json({ status: cb })
		})
		
	})

//addCont

	app.post("/addCont", function(req, res) {
		var bd = req.body;
		db.addCont(bd.user, bd.name, bd.email, bd.img,bd.sec, (cb) => {
			res.json({ status: cb })
		})
	})

/////addSec
	app.post("/addSec", function(req, res) {
		var bd = req.body;
		db.addSec(bd.user, bd.sec,(cb) => {
			res.json({ status: cb })
		})
	})
	
///Setting
	//get
	app.post("/Setting", function(req, res) {
		var bd = req.body;
		db.getdb(bd.user,function(e){
			_db = e[0];
			res.json(_db)
		})
	})
	///update
	app.post("/update", function(req, res) {
		var bd = req.body;
		db.updateSet(bd.user, bd.obj, bd.objVal)
		res.json({ status: "success" })

	})
	
	app.get("/vote/:crypto",function(req, res) {
		var token=req.params.crypto;
		var dec= jwt.verify(token, 'shhhhh');
		db.checkVoter("ft",dec.name,dec.email,function(e){
			if(e=="Exists"){
				res.render("vote",{name:dec.name,email:dec.email})
			}else{
				res.send(e)
			}
			
		})
	})


	app.post("/addVote",function(req,res){
		var bd = req.body;
		db.addVotes(bd.user,bd.voter, bd.votes, (cb) => {
			res.send({ status: cb })
		})
	})

	app.post("/countVote",(req,res)=>{
		var bd = req.body;
		db.countVote(bd.user, (cb) => {
			res.send({ data: cb })
			console.log(cb)
		})
	})
}


exports.rout=rout
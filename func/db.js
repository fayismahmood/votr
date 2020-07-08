var Datastore = require('nedb'),
db = new Datastore({ filename: './func/db/db.json', autoload: true });
db.loadDatabase();




var AdminData={
	user:"",
	password:""
}







function getdb(user,cb){
	db.find({ user: user }, function(err, docs) {
		cb(docs)
	});
}




function addVoter(user,name,email,img,cb){
	db.find({ user: "ft" }, function(err, docs) {
		var _AldyHv=false
		for (var e in docs[0]["voters"]) {
			var _each = docs[0]["voters"][e]
			if(_each["email"]==email){
				_AldyHv = true;
				break;
			}
		}
		if(!_AldyHv){
			db.update({ user: user }, { $push: { voters: { name: name, email: email,img:img,votes:[] } } }, function(err, docs) {
				cb("Added Succes")
			});
			
		}else{
			cb("Already Exists");
		}
		
	})
	
}


function addCont(user, name, email, img,sec, cb) {
	db.find({ user: "ft" }, function(err, docs) {
		var _AldyHv = false
		for (var e in docs[0]["Cont"]) {
			var _each = docs[0]["Cont"][e]
			if (_each["email"] == email) {
				_AldyHv = true;
				break;
			}
		}
		if (!_AldyHv) {
			db.update({ user: user }, { $push: { Cont: { name: name, email: email, img: img,sec:sec } } }, function(err, docs) {
				cb("Added Succes")
			});

		} else {
			cb("Already Exists");
		}

	})

}


function updateSet(user,obj,objVal) {
	for(var _e in obj){

		var _Obj = obj[_e];
		var _ObjVal = objVal[_e]
		db.update({ user: user }, { $set: { [_Obj]: _ObjVal } }, function(err, docs) {
		});
	}
	
}

function addSec(user,sec,cb){
	db.update({ user: user }, { $push: { sec:sec } }, function(err, docs) {
				cb("Added Succes")
	});
}


function addVotes(user,voter,votes,cb) {
	db.find({ user: user }, function(err, docs) {
		var _Voters = docs[0]["voters"];

		var _index = _Voters.findIndex(e=>{
			return e.email == voter;
		})

		if(_index==-1){
			cb("No such Voter")
		}else{
			if (docs[0]["voters"][_index]["votes"].length==0){

				var key = "voters." + _index + ".votes"
				db.update({ user: "ft" }, { $set: { [key]: votes } }, function(err, docs) {
					cb(docs)
				});
			}else{
				cb("Already Votted")
			}
		}
		
	})

}



function checkVoter(user,name,email,cb){
	db.find({ user: user }, function(err, docs) {

		var _Voters = docs[0]["voters"];
		var _index = _Voters.findIndex(e => {
			return e.email == email;
		})
		if (_index == -1) {
			cb("Not")
		}else{
			if (docs[0]["voters"][_index]["votes"].length == 0) {
				cb("Exists")
			}else{
				cb("Already Votted")
			}
			
		}

	})
}

function countVote(user,cb){
	db.find({ user: user }, function(err, docs) {
		var _Voters = docs[0]["voters"];
		var sec=docs[0]["sec"]

		var _totLength=_Voters.length

		var votes=_Voters.filter(e=>{
			return e.votes.length!==0
		})

		var vottedLength=votes.length
		var _VotesToCant={}
		for(var _e in sec){
			var _eSec=sec[_e]
			var _Cont=docs[0]["Cont"].filter(e=>{
				return e.sec==sec[_e]
			})
			
			_Cont.forEach((e,i) => {
				delete _Cont[i]["sec"]
				_Cont[i]["votes"]=0

			});
			_VotesToCant[_eSec]=_Cont
		}

		for(_e in votes){
			var _eVotes=votes[_e]["votes"]
			_eVotes.forEach((e,i) => {
				_sec=sec[i];
				_VotesToCant[_sec][e]["votes"]++

			});
		}
		
		cb({voters:_totLength,votted:vottedLength,vot:_VotesToCant})
	})
}

exports.countVote=countVote
exports.checkVoter = checkVoter
exports.addVotes = addVotes
exports.addSec=addSec
exports.getdb=getdb
exports.addVoter=addVoter
exports.addCont=addCont
exports.updateSet = updateSet

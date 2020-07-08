var Datastore = require('nedb'),
db = new Datastore({ filename: './db/db.json', autoload: true });
db.loadDatabase();




/*db.update({"voters.name":"dsf"},{$pull:{voters:{name:"dersf",email:"asddf",pic:"dfdf"}}}, function(err, docs) {
		
	});

*/



/*db.find({ user: "ft" }, function(err, docs) {
//	console.log(docs)
	docs.insert([{ a: 5 }, { a: 42 }], function(err, newDocs) {
		// Two documents were inserted in the database
		// newDocs is an array with these documents, augmented with their _id
	});
});*/


db.insert({user:"ft",pass:"www",voters:[],Cont:[],sec:[]},(err,doc)=>{})


/*db.find({ user: "ft" }, function(err, docs) {

	console.log(docs[0]["voters"])
})*/
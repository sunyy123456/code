require("./tools/conn_mongo");
var Student = require("./models/students");

Student.find({}, function(err, doc){
    if(!err){
        console.log(doc);
    }
});
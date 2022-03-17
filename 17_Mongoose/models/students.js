/** 
 * 用来定义Student的模型（集合）
 * 
*/
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var stuSchema = new Schema({
    name: String,
    age: Number,
    gender:{
        type: String,
        default:"female"  
    }  
});

// 定义模型
var StuModel = mongoose.model("student", stuSchema);  

module.exports = StuModel;

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongoose_test");

mongoose.connection.once("open", function(){
    console.log("数据库连接成功！");
});
mongoose.connection.once("close", function(){
    console.log("数据库已断开");
});



// 将Mongoose.Schema 赋值给一个变量
var Schema = mongoose.Schema;

// 创建Schema（模式）对象
var stuSchema = new Schema({
    name: String,
    age: Number,
    gender:{
        type: String,
        default:"female"   // 默认值是"female"
    }  
});

/*
    通过Schema来创建Model
    Model代表的是数据库中的集合，通过Model才能对数据库进行操作
    mongoose.model(modelName, schema);
        modelName  就是要映射的集合名  mongoose会自动将集合名变成复数
*/
var StuModel = mongoose.model("student", stuSchema);   // 集合名会变成Students（复数）

// 向数据库中插入一个文档
// StuModel.create(doc, function(err){});
StuModel.create({
    name:"zhangsan",
    age:18,
    gender:"male"
}, function(err){
    if(!err){
        console.log("插入成功");
    }
});


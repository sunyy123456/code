var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mongoose_test");

mongoose.connection.once("open", function(){
    console.log("数据库连接成功！");
});
mongoose.connection.once("close", function(){
    console.log("数据库已断开");
});

var Schema = mongoose.Schema;

var stuSchema = new Schema({
    name: String,
    age: Number,
    gender:{
        type: String,
        default:"female"  
    }  
});

var StuModel = mongoose.model("student", stuSchema);   // 集合名会变成Students（复数）


/*
    有了model，就可以对数据库进行增删改查操作了
    
    Model.create(doc(s), [callback])
        - callback是可有可无的      [a]  代表a可有可无
        - 用来创建一个或多个文档并添加到数据库中
        - 参数：
            doc(s) 可以是一个文档对象，也可以是一个文档对象的数组
            callback 当操作完成后调用的回调函数
*/


/*
    查询
        Model.find(conditions, [projection], [options], [callback])
            - 查询所有符合条件的文档,总会返回一个数组
        Model.findById(id, [projection], [options], [callback])
            - 根据文档的id属性查询文档
        Model.findOne(conditions, [projection], [options], [callback])
            - 查询符合条件的第一个文档，总会返回一个具体的文档对象

            conditions 查询的条件
            projection 投影，需要获取的字段
                两种方式：
                    {name: 1, _id: 0}
                    "name -_id"  (注意中间用空格隔开，而不是逗号隔开)
            options 查询选项（skip， limit）
                {skip: 3, limit: 1}
            callback 回调函数，查询结果会通过回调函数返回
                    回调函数必须传，如果不传回调函数，压根不会查询
        

*/
// StuModel.find({name:"susan"}, function(err, docs){
//     if(!err){
//         console.log(docs);
//     }
// });

// StuModel.find({}, {name:1, _id:0}, function(err, docs){  // 注意是 _id, 不是 id
//     if(!err){
//         console.log(docs);
//     }
// });

// StuModel.find({},"name -_id", function(err, docs){  
//     if(!err){
//         console.log(docs);
//     }
// });

// StuModel.find({}, {}, {skip: 3, limit:1}, function(err, docs){  
//     // 写options时，它前面一定要写全{即要有conditions和projection}，如果没有projection，也要写上{}
//     if(!err){
//         console.log(docs);
//     }
// });


// StuModel.findById("6184aadd84fab61c822724ad", function(err, doc){
//     if(!err){
//         // 通过find()查询的结果，返回的对象，就是Document，即为文档对象
//         // Document对象就是Model的实例
//         console.log(doc);
//         console.log(doc instanceof StuModel);  // true
//     }
// });

/* 
    修改
        Model.update(condotions, doc, [options], [callback]);
        Model.updateMany(condotions, doc, [options], [callback]);
        Model.updateOne(condotions, doc, [options], [callback]);
        - 用来修改一个或多个文档
        - 参数：
            conditions 查询条件
            doc 修改后的对象
            options 配置参数
            callback 回调函数

        推荐使用 updateOne 和 updateMany


*/

// StuModel.update({name:'susan'}, {$set:{age:20}}, function(err){
//     if(!err){ 
//         console.log("修改成功！！");
//     }
// }); 

// StuModel.updateOne({name:'susan'}, {$set:{age:18}}, function(err){
//     if(!err){ 
//         console.log("修改成功！！");
//     }
// }); 

// StuModel.updateMany({name:'susan'}, {$set:{age:22}}, function(err){
//     if(!err){ 
//         console.log("修改成功！！");
//     }
// }); 

/*
    删除
        Model.remove(conditions, [callback]);
        Model.deleteOne(conditions, [callback]);
        Model.deleteMany(conditions, [callback]);

        推荐使用 deleteOne 和 deleteMany
*/

// StuModel.remove({name:"susan"}, function(err){
//     if(!err){
//         console.log("删除成功！");
//     }
// });

/*
    Model.count(conditions, [callback])
        - 统计集合内文档的数量
*/
StuModel.count({}, function(err, count){
    if(!err){
        console.log(count);
    }
});




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
    Document 和 集合红的文档 一一对应，Document是Model的实例
        通过Model查询到结果都是Document
*/

// 创建一个Document
// var stu = new StuModel({
//     name:"susan",
//     age:22,
//     gender:"female"
// });

/*
    document的方法
        model#save([options], [fn]);
*/
// stu.save(function(err){
//     if(!err){
//         console.log("保存成功！");
//     }
// })

StuModel.findOne({}, function(err, doc){
    if(!err){
         /*
            update(替换的, [options], [callback])
                - 修改对象
        */
        // console.log(doc)
        // doc.update({$set:{age:28}}, function(err){
        //     if(!err){
        //         console.log("修改成功！！");
        //     }
        // });
        // 也可以直接修改
        /*
            doc.age = 18;
            doc.save();
        */

        /*
            get(属性)
                获取文档中的指定属性值
            
            set(属性，属性值)
                设置文档的指定属性

            id
                获取文档的_id属性值

            toJSON()
                转换为一个JSON对象

            toObject()
                将Document对象转换为一个普通的JS对象
                    转换为普通的JS对象后，注意所有的Document对象的方法或属性就不能使用了
        */

        // console.log(doc.get("name"));
        // doc.set("name", "lisi");
        // console.log(doc.get("name"));
        // doc.save();  // 注意修改后要保存！！

        // console.log(doc.id); // 6184a6b8969bffdb76456bfa
        // console.log(doc._id);  // new ObjectId("6184a6b8969bffdb76456bfa")

        // console.log(doc);
        // doc = doc.toObject();
        // console.log(doc);
        // doc.get("name");  // 当doc变成普通对象时，就不能使用Document的方法或属性了

        console.log(doc);
        doc = doc.toJSON();
        console.log(doc);
        
        /* 
            remove([callback])
                删除文档
        */
        // doc.remove(function(err){
        //     if(!err){
        //          console.log("删除成功");
        //     }
        // });
    }
})
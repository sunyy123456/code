let fs = require("fs");
const { connect } = require("http2");

/* 
    fs.existSync(path)
        - 检查一个文件是否存在
*/
let isExists = fs.existsSync("hello3.txt");
console.log(isExists);

/* 
    fs.stat(path, callback)
    fs.statSync(path)
        - 获取文件状态
        - 会返回一个对象，这个对象保存了当前对象状态的相关信息
*/
fs.stat("hello3.txt", function(err, stat){
    console.log(stat);
});

/* 
    fs.unlink(path, callback)
    fs.unlinkSync(path)
        - 删除文件
*/
// fs.unlinkSync("hello3.txt");

/*
    fs.read(path, [option], callback)
    fs.readSync(path, [option])
        - 读取一个目录的目录结构
            files 是一个字符串数组，每一个元素就是一个文件夹或文件的名字
*/ 
fs.readdir(".",function(err, files){
    if(!err){
        console.log(files);
    }
});

/*
    fs.truncate(path, len, callback)
    fs.truncateSync(path, len)
        - 截断文件，将文件修改为指定的大小
        - 表示截成len个字节
*/
fs.truncateSync("hello2.txt", 10);
/*
    fs.mkdir(path,  [mode], callback)
    fs.mkdirSync(path. [mode])
        - 创建一个目录

    fs.rmdir(path,  [mode], callback)
    fs.rmdirSync(path. [mode])
        - 删除一个目录
*/

/*
    fs.rename(oldPath, newPath ,callback)
    fs.renameSync(oldPath, newPath)
        - 对文件进行重命名
        - 也可以间接实现剪切
*/

// fs.rename("hello.txt", "hello2.txt" ,function(err){
//     if(!err){
//         console.log("修改成功");
//     }
// });

// fs.rename("hello2.txt", "C:\\Users\\26958\\Desktop\\hello.txt" ,function(err){
//     if(!err){
//         console.log("修改成功");
//     }
// });

/*
    fs.watchFile(filename, [options],listener)
        - 监视文件的修改
        - 参数：
            filename   监视的文件的名字
            option  配置参数
            listener    回调函数，当文件发生变化时，回调函数就会执行
                回调函数会有两个参数
                    curr    当前文件的状态
                    prev   修改前文件的状态
                        这两个对象都是stats对象

    fs.renameSync(oldPath, newPath)
*/
fs.watchFile("hello2.txt", {interval:1000},function(curr, prev){
    console.log("修改前文件大小：" + prev.size);
    console.log("修改后文件大小：" + curr.size);
});
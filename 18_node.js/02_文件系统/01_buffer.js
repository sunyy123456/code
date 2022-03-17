/*
    Buffer(缓冲区)
        - Buffer的结构和数组很像，操作的方法也和数组类似
        - 数组中不能存储二进制文件，而Buffer就是专门用来存储二进制数据（音频、视频、图片等等就是二进制文件）
        - 使用buffer不需要引入模块，直接使用即可
        - 在buffer中存储的都是二进制数据，但是在表示时都是以16进制的形式显示（因为要是使用二进制显示就太长了）
            buffer中每一个元素的范围都是从00 - ff（即0-255）
            8bit（位） = 1byte（字节）
            1024byte = 1kb
            1024kb = 1mb
            1024mb = 1gb
            1024gb = 1tb

            buffer的一个元素，占用内存的一个字节

        - Buffer的大小一旦确定，则不能修改，Buffer实际上是对底层内存的直接操作
*/

var str = "Hello 您好";

// 将一个字符串保存在buffer中
var buf = Buffer.from(str);

/*
    buf.length  占用内存的大小
*/ 
console.log(buf.length);  // 12 （一个汉字占用3个字节）
console.log(str.length);  // 8 （字符串的长度）

// 创建一个指定大小的buffer
// buffer构造函数是不推荐使用的

var buf2 = Buffer.alloc(10);
// 通过索引来操作buf的元素
buf2[1] = 16; // 传入的是十进制
buf2[4] = 0xaa;  //传入的是十六进制
buf2[10] = 1; // 10已经超过buf2的索引了，所以该条语句不会产生任何影响

console.log(buf2); // 输出的是十六进制
console.log(buf2[1].toString(10)); // 将buf2[1]转为十进制

// Buffer.allocUnsafe(size)  创建一个指定大小的Buffer，但是buffer中可能含有敏感数据
var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

/*
    总结：
        Buffer.from(str)    将一个字符串转换为buffer
        Buffer.alloc(size)  创建一个指定大小的Buffer
        Buffer.allocUnsafe(size)    创建一个指定大小的Buffer，但是可能包含敏感数据
        buf.toString()      将缓存区的数据转换为字符串
*/

var buf4 = Buffer.from("我是一段字符串");
console.log(buf4.toString());
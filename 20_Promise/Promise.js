class Promise{
    // 构造方法
    constructor(executor){
        // 添加属性
        this.PromiseState = "pending";
        this.PromiseResult = null;

        // 声明属性
        this.callbacks = [];

        // 保存实例对象的this
        const _this = this;

        // resolve做两件事：1. 改变Promise状态  2. 设置结果值
        function resolve(data){
            // 判断状态
            if(_this.PromiseState !== "pending") return ;

            // 注意这里是直接调用函数，this指向的是window
            // 所以需要在前面保存this的值，或者使用箭头函数

            // 修改状态(PromiseState)
            _this.PromiseState = "resolved";
            // 设置结果值（PromiseResult）
            _this.PromiseResult = data;

            // 调用成功的回调函数
            setTimeout(() => {
                _this.callbacks.forEach(item => {
                    item.onResolved(data);
                })
            })
            
        }
        function reject(data){
            if(_this.PromiseState !== "pending") return ;

            // 修改状态(PromiseState)
            _this.PromiseState = "rejected";
            // 设置结果值（PromiseResult）
            _this.PromiseResult = data;

            // 调用失败的回调函数
            setTimeout(() => {
                _this.callbacks.forEach(item => {
                    item.onRejected(data);
                })
            });
        }

        try {
            // 执行器函数是同步调用的
            executor(resolve, reject);
        } catch (error) {
            reject(error);    
        }


    }

    // 添加then方法
    then(onResolved, onRejected){
        const _this = this;
        
        // 判断回调函数参数(用来处理异常穿透)
        if(typeof onRejected != "function"){
            onRejected = reason => {
                throw reason;
            }
        }
        if(typeof onResolved != "function"){
            onResolved = value => value;
        }
        
        return new Promise((resolve, reject) => {
            // 封装函数
            function callback(type){
                try {
                    // 获取回调函数的执行结果
                    let result = type(_this.PromiseResult);
                    // 判断
                    if(result instanceof Promise){
                        result.then(v => {
                            resolve(v);
                        }, r => {
                            reject(r);
                        });
                    }else{
                        // 结果的对象状态设置为成功
                        resolve(result);
                    }
                    
                } catch (error) {
                    reject(error);
                }
            } 
            // 调用回调函数
            if(this.PromiseState === "resolved"){
                setTimeout(() => {
                    callback(onResolved);
                })
            }
            if(this.PromiseState === "rejected"){
                setTimeout(() => {
                    callback(onRejected);
                })
            }
        
            if(this.PromiseState === "pending"){
                // 保存回调函数
                this.callbacks.push({
                    onResolved:function(){
                        callback(onResolved);
                    },
                    onRejected:function(){
                        callback(onRejected);
                    }
                });
            }
        
        });

    }

    // 添加catch方法
    catch(onRejected){
        return this.then(undefined, onRejected);
    }

    // 添加resolve的方法(用static描述,表示它不属于类,属于实例对象)
    static resolve(value){
        return new Promise((resolve, reject) => {
            if(value instanceof Promise){
                value.then(v => {
                    resolve(v);
                }, r => {
                    reject(r);
                })
            }else{
                resolve(value);
            }
        })
    }

    // 添加reject的方法
    static reject(reason){
        return new Promise((resolve, reject) => {
            reject(reason);
        })
    }

    // 添加all的方法
    static all(promises){
        return new Promise((resolve, reject) => {
            let count = 0;
            let arr = [];
            // 遍历
            for(let i = 0; i < promises.length; i++){
                promises[i].then(v=>{
                    // 得知对象的状态是成功
                    // 每个promise都是成功状态才可以resolve
                    count++;
                    // 将当前promise对象成功的结果存入数组
                    arr[i] = v;
                    if(count === promises.length){
                        resolve(arr);
                    }
                }, r=>{
                    reject(r);
                })
            }
        })
    }

    // 添加race的方法
    static race(promises){
        return new Promise((resolve, reject) => {
            // 遍历
            for(let i = 0; i < promises.length; i++){
                promises[i].then(v=>{
                    resolve(arr);
                }, r=>{
                    reject(r);
                })
            }
        })
    }
}










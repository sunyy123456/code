function move(obj, attr, target, speed, callback){
    // 关闭上一个定时器（跟练习27一样）
    clearInterval(obj.timer);

    // 获取元素目前的位置
    var current = parseInt(getStyle(obj, attr));

    // 判断speed正负
    // 如果从0向800移动，则speed为正
    // 如果从800向0移动，则speed为负
    if(current > target){
        speed = -speed;
    }

    // 开启一个定时器，执行动画效果
    // 向执行动画的对象中添加一个timer属性，用来保存它自己的定时器标识
    obj.timer = setInterval(function(){
        // 获取box1原来的left值
        var oldValue = parseInt(getStyle(obj, attr));

        // 在旧值的基础上要增加
        var newValue = oldValue + speed;
        
        // 向左移动，需要判断newValue是否小于target
        // 向右移动，需要判断newValue是否大于target
        if((newValue > target && speed > 0) || (newValue < target && speed < 0)){
            newValue = target;
        }

        // 将新值设置给box1
        obj.style[attr] = newValue + "px";
        
        // 当元素移动到800px时，使其停止移动动画
        if(newValue == target){
            // 到达目标，关闭定时器
            clearInterval(obj.timer);

            // 动画执行完毕，来调用回调函数
            /*
                当没有传递回调函数时，callback是undefined，即为false
                    就不会执行callback了
            */
            callback && callback();
        }
    }, 30);

    
}

function getStyle(obj, name){
    if(window.getComputedStyle){
        return getComputedStyle(obj, null)[name];
    }
    else{
        return obj.currentStyle[name];
    }

}

function addClass(obj, cn){
    // 检查obj中是否含有cn
    if(!hasClass(obj, cn)){
        obj.className += " " + cn;
    }
}

/*
    判断一个元素中是否含有指定的属性值
        如果有该class,返回true;如果没有,返回false

*/
function hasClass(obj, cn){
    // 判断obj中有没有cn这个class值
    // 创建一个正则表达式(要使用构造函数)
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
}


/*
    删除一个元素中指定的属性
        用空串去替代属性
*/
function removeClass(obj, cn){
    // 创建一个正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");

    // 删除Class
    obj.className = obj.className.replace(reg, "");
}


/*
    toggleClass用来切换一个类
        如果元素中具有该类,则删除
        如果元素中没有该类,则添加

*/
function toggleClass(obj, cn){
    // 判断obj中是否含有cn
    if(hasClass(obj, cn)){
        removeClass(obj, cn);
    }
    else{
        addClass(obj, cn);
    }
}
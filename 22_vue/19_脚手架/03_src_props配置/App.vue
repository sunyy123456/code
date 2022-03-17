<template>
    <div>
        <!--  
            注意  :age的用法    
                : 代表使用了v-bind，也就是将它里面js代码的返回值作为v-bind的属性值
                    所以在 :age 中将20作为返回值从而作为v-bind的属性值
                    而如果只写 age="20" 是将"20"（字符串）作为age的属性值
        -->
        <Student name="syy" gender="女" :age="20"/>
    </div>
</template>

<script>
    import Student from "./components/Student.vue"

    /*
        功能：让组件接收外部传过来的数据
            (1) 传递数据：
                <Demo name="xxx"/>
            (2) 接收数据
                第一种方式（只接收）：
                    props:['name']

                第二种方式（限制类型）
                    props:{
                        name: String
                    }

                第三种方式（限制类型，限制必要性，指定默认值）：
                    props:{
                        name:{
                            type: String,   // 类型
                            required: true,   // 必要性 
                            default: "老王"   // 默认值
                        }
                    }

                备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
                    若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中的数据
        */

    export default {
        name:"App",  // name要记得写，而且名字一般都是文件名
        components:{
            Student
        },
    }
</script>

<style>
</style>

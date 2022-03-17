var a = 123;
        function fun(a){
            console.log("a = " + a);
            a = 456;
        }
        fun();
        console.log("a = " + a);
<template>
    <div id="root">
		<Test/>
		<Test2/>
		<Test3/>
	</div>
</template>

<script>
    import Test from './components/Test'
    import Test2 from './components/Test2'
    import Test3 from './components/Test3'

    export default {
        name:"App",  // name要记得写，而且名字一般都是文件名
        components:{
            Test,
			Test2,
			Test3
        },
    }
</script>


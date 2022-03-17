export const mixin1 = {
    methods: {
        showName(){
            alert(this.name);
        }
    },
    mounted() {
        console.log("你好呀", this.name);
    },
}
export const mixin2 = {
    data(){
        return {
            x:10,
            y:20
        }
    }
}
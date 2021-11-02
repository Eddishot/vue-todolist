

Vue.config.devtools = true

new Vue({
    el : "#radice",
    data :{
        title: "Vue-Todolist",

        listaDaFare: "",
        lista:[],


    },

    methods:{
        onClickAdd(){

            // this.lista.push(this.listaDaFare)
            
            // this.listaDaFare = ""

            if (this.listaDaFare.trim( )=== ""){
                return
            }else{
                this.lista.push(this.listaDaFare)
            }

        },

        deleteX(deleteBtn){
            this.lista.splice(deleteBtn, 1)
        }

    }
})
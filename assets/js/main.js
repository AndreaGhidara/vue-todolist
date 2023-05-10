const { createApp } = Vue

createApp({
    data() {
        return {


            newTask:{
                text:"",
                done:false,
            },

            list: [
                {
                    text:"testo",
                    done:false,
                },
                {
                    text:"testo2",
                    done:true,
                },
                {
                    text:"testo3",
                    done:false,
                },
            ],
        }
    },
    methods: {
        addTask() {
            let userTask = {...this.newTask};
            this.list.unshift(userTask);
        },
        removeTask(position) {
            this.list.splice(position,1);
        },
        changeTask(position) {
            this.list[position].done = !this.list[position].done;
        },
    }
}).mount('#app')


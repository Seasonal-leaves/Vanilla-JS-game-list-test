Vue.createApp({
    data(){
        return {
            games:[],
            enteredGame:''
        }
    },
    methods:{
        addGame(){
            this.games.push(this.enteredGame);
            this.enteredGame = '';
        }

    }
}).mount('#app'); //Vue as onject is now available thanks to the import in index.html. createApp() takes a javascript onject where we configure the vue app


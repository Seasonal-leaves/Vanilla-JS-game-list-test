const app = Vue.createApp({
  data() {
    return {
      playedgames:[],
      enteredGame:'',
      counter: 0,
    };
  },
  methods:{
    addGame(){
        this.playedgames.push(this.enteredGame),
        this.counter = this.counter+ 1,
        this.enteredGame = '';
    
        
    },
    removeGame(){
      this.playedgames.pop(),
      this.counter = this.counter - 1;
      
    }
  }
});

app.mount('#events');

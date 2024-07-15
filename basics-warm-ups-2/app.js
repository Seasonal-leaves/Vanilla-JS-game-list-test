const app = Vue.createApp({
  data() {
    return {
      playedgames:[],
      enteredGame:'',
      counter: 0,
      myname: '',
    };
  },
  methods:{
    addGame(num){
        this.playedgames.push(this.enteredGame),
        this.counter = this.counter+ num,
        this.enteredGame = '';
    
        
    },
    removeGame(num){
      this.playedgames.pop(),
      this.counter = this.counter - num;
      
    },
    setName(inputevent, bestgame){
      this.myname= inputevent.target.value + ' '+ bestgame;
    }
  }
});

app.mount('#events');

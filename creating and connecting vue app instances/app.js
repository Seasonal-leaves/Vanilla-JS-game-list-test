const app = Vue.createApp(
    {//The 2nd bracket is needed to configure various property of the Vue app
        data(){// here we have to name this data as it is not upto us, it is the way vue is coded. Here this means the value stored in data is a function
        return {   //this function used in data should always return an object. Not a number, string or anything else always an OBJECT
        addedGame: '<h2>Finish the game and add it</h2>', //inside the return object we can add any key value pair as we like
        addgame:'Played the witcher 3 but did not finish',

        intervuelink: 'https://joyful-speculoos-f3dc31.netlify.app/'
    }
        },
        methods:{ //methods is also a reserved word like data. Here it should always store functions. Remember it is already a property that stores functions so put ':' in stead of '()'
            randomgames(){
                const randomnumber = Math.random();
                if (randomnumber > 0.5){
                    return       this.addedGame          }else{
                    return this.addgame;
                }
            }
        }
    },
);
app.mount('#user-goal');
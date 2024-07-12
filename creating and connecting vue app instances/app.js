const app = Vue.createApp(
    {//The 2nd bracket is needed to configure various property of the Vue app
        data(){// here we have to name this data as it is not upto us, it is the way vue is coded. Here this means the value stored in data is a function
        return {   //this function used in data should always return an object. Not a number, string or anything else always an OBJECT
        addedGame: 'Finsih the game and add it', //inside the return object we can add any key value pair as we like
        intervuelink: 'https://joyful-speculoos-f3dc31.netlify.app/'
    }
        }
    },
);
app.mount('#user-goal');
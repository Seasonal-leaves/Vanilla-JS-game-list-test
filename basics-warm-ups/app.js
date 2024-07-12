const app = Vue.createApp(
    {
        data(){
        return {  
        addName: 'Rituparno Sen',
        addAge: 26,
        imglink: 'https://codeskulptor-demos.commondatastorage.googleapis.com/descent/person_right.png'

    }
        },
        methods:{ 
            randomgames(){
                const randomnumber = Math.random();
                return randomnumber;
            },
        //     populateName() {
        //         const value = this.addName;
        //         return value;
        // },
    }}
);
app.mount('#assignment');
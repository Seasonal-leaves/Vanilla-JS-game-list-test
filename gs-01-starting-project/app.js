// we need to have access to the 'add goal;' GamepadButton, the input form Field and the unordered list 

const gamebutton = document.querySelector('button'); //give any name of your choice for the goal button here
const inputfld = document.querySelector('input')
const gamelist = document.querySelector('ul')
//after getting access to the elements from the html document we need the3 button to do something.
//so we create a event lsitener to the  button in the html document.  so that when there is a button click it should execute a function.
function addgame(){
    const enteredgame = inputfld.value; //takes the value provided by the user in thew input formfield of the webpage
    const games = document.createElement('li');//create a list item where the input value should appear later
    games.textContent = enteredgame;
    gamelist.append(games);
    inputfld.value='';//once the value is entered we need to clear the input field


}

gamebutton.addEventListener('click', addgame)


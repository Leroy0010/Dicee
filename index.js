

var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
console.log(randomNumber1);

if(randomNumber1 === 1) {
    document.querySelector("img.dice1").setAttribute("src", "./assests/images/dice1.png");
}

else if(randomNumber1 === 2) {
    document.querySelector("img.dice1").setAttribute("src", "./assests/images/dice2.png");
}

else if(randomNumber1 === 3) {
    document.querySelector("img.dice1").setAttribute("src", "./assests/images/dice3.png");
}

else if(randomNumber1 === 4) {
    document.querySelector("img.dice1").setAttribute("src", "./assests/images/dice4.png");
}

else if(randomNumber1 === 5) {
    document.querySelector("img.dice1").setAttribute("src", "./assests/images/dice5.png");
}

else if(randomNumber1 === 5) {
    document.querySelector("img.dice1").setAttribute("src", "./assests/images/dice6.png");
}



var randomNumber2 = Math.floor((Math.random() * 6)) + 1;


if(randomNumber2 === 1) {
    document.querySelector("img.dice2").setAttribute("src", "./assests/images/dice1.png");
}

else if(randomNumber2 === 2) {
    document.querySelector("img.dice2").setAttribute("src", "./assests/images/dice2.png");
}

else if(randomNumber2 === 3) {
    document.querySelector("img.dice2").setAttribute("src", "./assests/images/dice3.png");
}

else if(randomNumber2 === 4) {
    document.querySelector("img.dice2").setAttribute("src", "./assests/images/dice4.png");
}

else if(randomNumber2 === 5) {
    document.querySelector("img.dice2").setAttribute("src", "./assests/images/dice5.png");
}

else if(randomNumber2 === 5) {
    document.querySelector("img.dice2").setAttribute("src", "./assests/images/dice6.png");
}



if(randomNumber1 === randomNumber2){
    document.getElementById("heading").textContent = "Draw!";
}

else if(randomNumber1 > randomNumber2){
    document.getElementById("heading").textContent = "🚩Player 1 Wins";
}

else{
    document.getElementById("heading").textContent = "Player 2 Wins🚩";
}

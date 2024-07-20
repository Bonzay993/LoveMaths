
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "submit") {
                answer();
            } else {
                let gameType = this.getAttribute("data-type");
                    if(gameType === "addition"){
                        addition();
                    }else if(gameType === "subtract"){
                        subtract();
                    }else if(gameType === "multiply"){
                        multiply();
                    }else{
                        division();
                    }
            }
        })
    }
})

function startGame(){
    
}

//Generating random numbers and pushing to the dom
function randomNumber(){
    let operand1 = document.getElementById('operand1');
    let operand2 = document.getElementById('operand2');
    randomOne = Math.floor(Math.random() *100);
    randomTwo = Math.floor(Math.random() *100);
    operand1.innerHTML = randomOne;
    operand2.innerHTML = randomTwo;
    
}

function addition(){
    let operator = document.getElementById("operator");
    operator.innerHTML = "+";
    randomNumber();
}


function subtract(){
    let operator = document.getElementById("operator");
    operator.innerHTML = "-";
    randomNumber();
}


function multiply(){
    let operator = document.getElementById("operator");
    operator.innerHTML = "*";
    randomNumber();
}


function division(){
    let operator = document.getElementById("operator");
    operator.innerHTML = "/";
    randomNumber();
}

function answer(){
    let additionAnswer = randomOne + randomTwo;
    let substractAnswer = randomOne - randomTwo;
    let multiplyAnswer = randomOne * randomTwo;
    let divisionAnswer = randomOne / randomTwo;
    let inputAnswer = document.getElementById('answer-box').value;
    if (inputAnswer == additionAnswer) {
        updateScoreCorrect();
    }else if(inputAnswer == substractAnswer){
        updateScoreCorrect();
    }else if(inputAnswer == multiplyAnswer){
        updateScoreCorrect();
    }else if(inputAnswer == divisionAnswer){
        updateScoreCorrect();
    }else {
        alert("Wrong answer");
        updateScoreIncorrect();
    }
}
let totalCorrect=0;
let totalIncorrect=0;

function updateScoreCorrect(){
    let correctAnswer = document.getElementById("score");
    totalCorrect += 1;
    correctAnswer.innerHTML = (`${totalCorrect}`);
}

function updateScoreIncorrect(){
    totalIncorrect += 1;
    let incorrectAnswer = document.getElementById("incorrect");
    incorrectAnswer.innerHTML = (`${totalIncorrect}`);
}

//Creating the first operand variable

startGame();

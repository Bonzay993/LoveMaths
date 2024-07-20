
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
    let operand1 = document.getElementById('operand1');
    let operand2 = document.getElementById('operand2');
    document.getElementById('answer-box').value= '';
    operand1.innerHTML = 0;
    operand2.innerHTML = 0;
}

//Generating random numbers and pushing to the dom
function randomNumber(){
    let operand1 = document.getElementById('operand1');
    let operand2 = document.getElementById('operand2');
    randomOne = Math.floor(Math.random() *100);
    randomTwo = Math.floor(Math.random() *100);
    randomThree = Math.floor(Math.random() *10);
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
    operand2.innerHTML = randomThree;
    randomNumber();
}


function division(){
    let operator = document.getElementById("operator");
    operator.innerHTML = "/";
    operand2.innerHTML = randomThree;
    randomNumber();
}

function answer(){
    let additionAnswer = randomOne + randomTwo;
    let substractAnswer = randomOne - randomTwo;
    let multiplyAnswer = randomOne * randomThree;
    let divisionAnswer = randomOne / randomThree;
    let inputAnswer = document.getElementById('answer-box');
    if(inputAnswer && inputAnswer.value){
        if (inputAnswer.value == additionAnswer) {
            updateScoreCorrect();
            startGame();
        }else if(inputAnswer.value == substractAnswer){
            updateScoreCorrect();
            startGame();
        }else if(inputAnswer.value == multiplyAnswer){
            updateScoreCorrect();
            startGame();
        }else if(inputAnswer.value == divisionAnswer){
            updateScoreCorrect();
            startGame();
        }else {
            alert("Wrong answer");
            updateScoreIncorrect();
            startGame();
        }
    }else{
        alert("no value was input");
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
    let incorrectAnswer = document.getElementById("incorrect");
    totalIncorrect += 1;
    incorrectAnswer.innerHTML = (`${totalIncorrect}`);
}

//Creating the first operand variable

startGame();

/*
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
/**
 * Main game loop that resets the values on the screen
 

function startGame(){
    let operand1 = document.getElementById('operand1');
    let operand2 = document.getElementById('operand2');
    document.getElementById('answer-box').value= '';
    operand1.innerHTML = 0;
    operand2.innerHTML = 0;
}

//Generating random numbers 1-25 and pushing to the dom
function randomNumber(){
    let operand1 = document.getElementById('operand1');
    let operand2 = document.getElementById('operand2');
    randomOne = Math.floor(Math.random() *25) + 1;
    randomTwo = Math.floor(Math.random() *25 + 1);
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
    let multiplyAnswer = randomOne * randomThree;
    let divisionAnswer = randomOne / randomThree;
    let inputAnswer = document.getElementById('answer-box');
    if(inputAnswer && inputAnswer.value){
        if (inputAnswer.value == additionAnswer) {
            updateScoreCorrect();
            startGame();
            alert("Correct answer");
        }else if(inputAnswer.value == substractAnswer){
            updateScoreCorrect();
            startGame();
            alert("Correct answer");
        }else if(inputAnswer.value == multiplyAnswer){
            updateScoreCorrect();
            startGame();
            alert("Correct answer");
        }else if(inputAnswer.value == divisionAnswer){
            updateScoreCorrect();
            startGame();
            alert("Correct answer");
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

*/

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener('click', function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    document.getElementById('answer-box').addEventListener('keydown',function(event){
        if (event.key === "Enter"){
            checkAnswer();
        }
    })
    runGame();
})


function runGame(gameType){

    //setting the focus on the answerbox and wiping it
    document.getElementById('answer-box').value = '';
    document.getElementById('answer-box').focus();

    let num1 = Math.floor(Math.random() *25) +1;
    let num2 = Math.floor(Math.random() *25) +1;

    if (gameType === "addition"){
        addition(num1,num2);
    }else if(gameType === "multiply"){
        multiply(num1,num2);
    }else if(gameType === "subtract"){
        subtract(num1,num2);
    }else if(gameType === "division"){
        division(num1,num2);
    }else{
        alert('Unknown game type: ${gameType}');
        throw 'Unknown game type: ${gameType}.Aborting...'
    }
}

function addition(num1,num2){
    document.getElementById('operand1').textContent = num1;
    document.getElementById('operand2').textContent = num2;
    document.getElementById('operator').textContent = "+";
}

function multiply(num1,num2){
    document.getElementById('operand1').textContent = num1;
    document.getElementById('operand2').textContent = num2;
    document.getElementById('operator').textContent = "x";
}

function subtract(operand1,operand2){
    document.getElementById('operator').textContent = "-";
    //displays the higher number
        document.getElementById('operand1').textContent = operand1 > operand2 ? operand1:operand2;
        document.getElementById('operand2').textContent = operand1 > operand2 ? operand2:operand1;
};

function division(operand1,operand2){
    document.getElementById('operator').textContent = "/";
    //displays the higher number
        document.getElementById('operand1').textContent = operand1 > operand2 ? operand1:operand2;
        document.getElementById('operand2').textContent = operand1 > operand2 ? operand2:operand1;
}
    

/**
 * Gets the  numbers and the operator
 * directly from the dom, and returns the correct answer.
 */
function calculateCorrectAnswer(){
    //getting the integer using parseInt, by default it gets a string
    let operand1 = parseInt(document.getElementById('operand1').innerText); 
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+"){
        return [operand1 + operand2 ,"addition"];
    } else if (operator === "x"){
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-"){
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") { 
        return[operand1 / operand2, "division"]
    }else {
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented operator ${operator}.Aborting`
    }
}

function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect === true){
        alert("Correct Answer!")
        correctScore();
    } else {
        alert(`Wrong Answer ${userAnswer} !. Correct is ${calculatedAnswer[0]}`);
        incorrectScore();
    }
    runGame(calculatedAnswer[1]);
}


/**
 * Gets the current score form the Dom 
 */
function correctScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incorrectScore(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}
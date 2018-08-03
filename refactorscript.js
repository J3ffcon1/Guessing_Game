GuessingGameQuestions = () => {



    let username = prompt('What is your name?');
    alert(`Hello ${username}! welcome to the guessing game!`);

    let node = document.getElementById('header');
    let newNode = document.createElement('h2');
    newNode.appendChild(document.createTextNode(`Welcome ${username}`));
    node.appendChild(newNode);

};
startQuiz = () => {
    let correctCounter = 0;
    let incorrectCounter = 0;

    incorrectAppendToDOMList = () => {
        let questionanswer = document.getElementById('question-answers');
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('incorrect'));
        questionanswer.appendChild(newNode);

        incorrectCounter++;
    }

    correctAppendToDOMList = () => {
        let questionanswer = document.getElementById('question-answers');
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('correct'));
        questionanswer.appendChild(newNode);

        correctCounter++;
    }



    let firstQuestion = prompt("I was born in Portland, True or False?").toLowerCase();
    console.log(`first question Portland answer is ${firstQuestion}`);

    if (firstQuestion == "yes" || firstQuestion == "y" || firstQuestion == "true") {
        alert("Correct, I was born in Portland!");
        correctAppendToDOMList();
    } else {
        alert("I do live in Portland!");
        incorrectAppendToDOMList();
    }

    let secondQuestion = prompt("I have one dog and two cats").toLowerCase();
    console.log(`second Question answer is ${secondQuestion}`);

    if (secondQuestion == "yes" || secondQuestion == "y" || secondQuestion == "true") {
        alert("Correct, I have a dog named Homer and two cats; Phoebe and Axel.");
        correctAppendToDOMList();
    } else {
        alert("It's actually true!");
        incorrectAppendToDOMList();
    }

    let thirdQuestion = prompt("my favorite color is green");
    console.log(`Third question answer is ${thirdQuestion}`);
    if (thirdQuestion == "false" || thirdQuestion == "no" || thirdQuestion == "f") {
        alert("Correct, my favorite color is Blue!");
        correctAppendToDOMList();
    } else {
        alert("Wrong, here's a hint, If I were in Avatar I'd be an Water bender");
        incorrectAppendToDOMList();
    }

    let fourthQuestion = prompt("I work for a chocolate company");
    console.log(`fourth question answer is ${fourthQuestion}`);
    if (fourthQuestion == "true" || fourthQuestion == "yes") {
        alert("I do! at Honey Mamas");
        correctAppendToDOMList();
    } else {
        alert("Sorry, I actually do work at a chocolate factory!");
        incorrectAppendToDOMList();
    }

    let fifthQuestion = prompt("What number between 1 and 10 am i thinking of at the moment of writing this question?");
    console.log(`fifth question answer is ${fifthQuestion}`)
    if (fifthQuestion < 6) {
        alert('Alittle higher');
        incorrectAppendToDOMList();
    } else if (fifthQuestion > 6) {
        alert('A little lower');
        incorrectAppendToDOMList();
    } else {
        alert("correct I was thining of 6! get out of my past selves head!!");
        correctAppendToDOMList();
    }

    let sixthQuestion = 0;

    while (sixthQuestion !== 1) {
        sixthQuestion = prompt('What is my astrological sign? Pisces, Tauros, Scorpio, or Libra?').toUpperCase();
        if (sixthQuestion === 'SCORPIO') {
            sixthQuestion = 1;
            console.log(`sixth Question answer is ${sixthQuestion}`);
            correctAppendToDOMList();

        } else {
            alert("Nope, I'll give you a hint, I'm a water sign");
        }
    }



    console.log(`Correct Answers: ${correctCounter} Incorrect Answers: ${incorrectCounter}`);
    let counter = document.getElementById('question-answers');
    let newNode = document.createElement('p');
    newNode.appendChild(document.createTextNode(`You got ${correctCounter} questions correct! and ${incorrectCounter} questions incorrect!`));
    counter.appendChild(newNode);
}

resetQuiz = () => {
    let node = document.getElementById('question-answers').innerHTML = "";

    let correctCounter = 0;
}

GuessingGameQuestions();
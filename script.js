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

    let firstQuestion = prompt("Was I born in Portland, Oregon, Yes or No?");
    console.log(`first Question answer is ${firstQuestion}`);
    if (firstQuestion == "Yes" || firstQuestion == "yes" || firstQuestion == "y" || firstQuestion == "True" || firstQuestion == "true") {
        alert("Correct, I was born in Portland!")
        let question1Answer = document.getElementById('question-answers');
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('correct'));
        question1Answer.appendChild(newNode);

        correctCounter++;
    }
    else {
        alert("I do live in Portland");
        let question1Answer = document.getElementById("question-answers");
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('Question 1 incorrect'));
        question1Answer.appendChild(newNode);
    }

    let secondQuestion = prompt("I have one dog and two cats");
    console.log(`second Question answer is ${secondQuestion}`);
    if (secondQuestion == "Yes" || secondQuestion == "yes" || secondQuestion == "y" || secondQuestion == "True" || secondQuestion == "true") {
        alert("Correct, I have a dog named Homer and two cats named Phoebe and Axel!")
        let question2Answer = document.getElementById('question-answers');
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('correct'));
        question2Answer.appendChild(newNode);

        correctCounter++
    }
    else {
        alert("Its actually true!");
        let question1Answer = document.getElementById("question-answers");
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('Question 2 incorrect'));
        question1Answer.appendChild(newNode);
    }

    let thirdQuestion = prompt("My favorite color is green");
    console.log(`third Question answer is ${thirdQuestion}`);
    if (thirdQuestion == "False" || thirdQuestion == "false" || thirdQuestion == "n" || thirdQuestion == "No" || thirdQuestion == "no") {
        alert("Correct, Favorite color is Blue!")
        let question3Answer = document.getElementById('question-answers');
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('correct'));
        question3Answer.appendChild(newNode);

        correctCounter++
    }
    else {
        alert("Wrong, here's a hint, If I were in Avatar I'd be an Water bender");
        let question3Answer = document.getElementById("question-answers");
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('Question 3 incorrect'));
        question3Answer.appendChild(newNode);
    }

    let fourthQuestion = prompt("I work for a chocolate company");
    console.log(`fourth Question answer is ${fourthQuestion}`);
    if (fourthQuestion == "True" || fourthQuestion == "true" || fourthQuestion == "y" || fourthQuestion == "Yes" || fourthQuestion == "yes") {
        alert("I do! at Honey Mamas")
        let question4Answer = document.getElementById('question-answers');
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('correct'));
        question4Answer.appendChild(newNode);

        correctCounter++
    }
    else {
        alert("I actually DO work at a chocolate factory!");
        let question4Answer = document.getElementById("question-answers");
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('Question 4 incorrect'));
        question4Answer.appendChild(newNode);
    }

    let fifthQuestion = prompt("What number between 1 and 10 I thinking of at the moment of writing this question?");
    console.log(`fifth question answer is ${fifthQuestion}`);
    if (fifthQuestion < 6) {
        alert('Alittle higher')
        let question5Answer = document.getElementById('question-answers');
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('Question 5 incorrect'));
        question5Answer.appendChild(newNode);
    } else if (fifthQuestion > 6) {
        alert('Alittle lower')
        let question5Answer = document.getElementById('question-answers');
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('Question 5 incorrect'));
        question5Answer.appendChild(newNode);

    } else {
        alert("correct i was thinking 6! get out of my past selfs head!");
        let question5Answer = document.getElementById('question-answers');
        let newNode = document.createElement('li');
        newNode.appendChild(document.createTextNode('correct'));
        question5Answer.appendChild(newNode);

        correctCounter++
    }

    let sixthQuestion = 0;

    while (sixthQuestion !== 1) {
        sixthQuestion = prompt('What is my astrological sign? Pisces, Tauros, Scorpio, or Libra?').toUpperCase();
        if (sixthQuestion === 'SCORPIO') {
            sixthQuestion = 1;
            let question6Answer = document.getElementById('question-answers');
            let newNode = document.createElement('li');
            newNode.appendChild(document.createTextNode('correct'));
            question6Answer.appendChild(newNode);
            correctCounter++;

        } else {
            alert("Nope, I'll give you a hint, I'm a water sign");
        }
    }

    console.log("correct answers " + correctCounter);
    let counter = document.getElementById('question-answers');
    let newNode = document.createElement('p');
    newNode.appendChild(document.createTextNode(`You got ${correctCounter} questions correct!`));
    counter.appendChild(newNode);

};

resetQuiz = () => {
    let node = document.getElementById('question-answers').innerHTML = "";

    let correctCounter = 0;
}

GuessingGameQuestions();
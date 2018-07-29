GuessingGameQuestions = () => {

    let username = prompt('What is your name?');
    alert(`Hello ${username}! welcome to the guessing game!`);
    
    let node = document.getElementById('header');
    let newNode = document.createElement('h2');
    newNode.appendChild(document.createTextNode(`Welcome ${username}`));
    node.appendChild(newNode);
};

startQuiz = () => {

  let firstQuestion = prompt("Was I born in Portland, Oregon, Yes or No?");
  console.log(`first Question answer is ${firstQuestion}`);
  if(firstQuestion == "yes" || firstQuestion == "yes" || firstQuestion == "y") {
      alert("Correct, I was born in Portland!")
      let question1Answer = document.getElementById('question-answers');
      let newNode = document.createElement('li');
      newNode.appendChild(document.createTextNode('correct'));
      question1Answer.appendChild(newNode);
  }
  else {
      alert("I do live in Portland");
      let question1Answer = document.getElementById("question-answers");
      let newNode = document.createElement('li');
      newNode.appendChild(document.createTextNode('Question 1 incorrect'));
      question1Answer.appendChild(newNode);
  }
};

GuessingGameQuestions();
GuessingGameQuestions = () => {

    let username = prompt('What is your name?');
    alert(`Hello ${username}! welcome to the guessing game!`);
    
    let node = document.getElementById('header');
    let newNode = document.createElement('h2');
    newNode.appendChild(document.createTextNode(`Welcome ${username}`));
    node.appendChild(newNode);
}

GuessingGameQuestions();
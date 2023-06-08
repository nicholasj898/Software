const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

//Define quiz questions and answers
const quizQuestions = [
  {
    question: "What is the best color of cat?",
    answers: {
      a: "Black",
      b: "Orange",
      c: "Brown"
    },
    correctAnswer: "a"
  },
  {
    question: "What number am I thinking of right now?",
    answers: {
      a: "90",
      b: "7",
      c: "5,928,390"
    },
    correctAnswer: "a"
  },
  {
    question: "Who invented the light bulb?",
    answers: {
      a: "Nikola Tesla",
      b: "Albert Einstein",
      c: "Benjamin Franklin"
    },
    correctAnswer: "b"
  }
];

//Create a function to generate the quiz
function generateQuiz() {
  const output = [];

  //Loop through each question
  quizQuestions.forEach((question, index) => {
    const answers = [];

    //Loop through each answer for the current question
    for (letter in question.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${index}" value="${letter}">
          ${letter.toUpperCase()}: ${question.answers[letter]}
        </label>`
      );
    }

    //Add questions and their answers to the output
    output.push(
      `<div class="question">
        <h3>${index + 1}. ${question.question}</h3>
        <div class="answers">${answers.join('')}</div>
      </div>`
    );
  });

  //Combine the output list into one string and display it
  quizContainer.innerHTML = output.join('');
}

//Run the generateQuiz function to display the quiz
generateQuiz();

// Add an event listener to the submit button
submitButton.addEventListener('click', showResults);

//Create a function to calculate the score and display the results
function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
  
    //Loop through each question
    quizQuestions.forEach((question, index) => {
      const answerContainer = answerContainers[index];
      const selectedOption = answerContainer.querySelector(`input[name=question${index}]:checked`);
      const userAnswer = selectedOption ? selectedOption.value : undefined;
  
      //Check if the user's answer matches the correct answer
      if (userAnswer === question.correctAnswer) {
        numCorrect++;
        answerContainers[index].style.color = 'green'; // Highlight correct answers in green
      } else {
        answerContainers[index].style.color = 'red'; // Highlight incorrect answers in red
      }
    });
  
    //Display the score and results
    const score = Math.round((numCorrect / quizQuestions.length) * 100);
    const results = `You scored ${numCorrect} out of ${quizQuestions.length} (${score}%)... Thomas who?`;
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('results');
    resultContainer.textContent = results;
    quizContainer.appendChild(resultContainer);
  
    //Disable the submit button after showing the results
    submitButton.disabled = true;
  }
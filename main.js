const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
var allQuestions = [
  {
    question: "Bao lâu thì bán đc 1 tỷ gói mè?",
    answers: {
      A: "1 tuần",
      B: "1 tháng",
      C: "1 năm",
      D: "2 năm",
    },
    correctAnswer: "C",
  },
  {
    question: "1 + 1 =?",
    answers: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    correctAnswer: "B",
  },
  {
    question: "2 + 1 =?",
    answers: {
      A: "1",
      B: "2",
      C: "3",
      D: "4",
    },
    correctAnswer: "C",
  },
];

function buildQuiz() {
  const output = [];
  for (let i = 0; i < allQuestions.length; i++) {
    const answers = [];
    for (let index = 0; index < allQuestions[i].length; index++) {}
    console.log(allQuestions[i]);
    console.log(i);
    for (const key in allQuestions[i].answers) {
      console.log(allQuestions[i].answers);
      answers.push(
        `<label>
        <input type="radio" name="question$[i]" value="${key}">
        ${key} :
        ${allQuestions[i].answers[key]}
        </label>`
      );
    }
    output.push(
      `<div class="question"> ${allQuestions[i].question}</div>
    <div class="answers"> ${answers.join("")}</div>`
    );
  }
  quizContainer.innerHTML = output.join("");
  // allQuestions.forEach(function (currentQuestion, questionNumber) {
  //   console.log(currentQuestion);
  //   console.log(questionNumber);
  // });
}

buildQuiz();

// function buildQuiz() {
//   const output = [];
//   var index = 0;
//   allQuestions.forEach((currentQuestion, questionNumber) => {
//     index += 1;
//     const answers = [];
//     console.log(currentQuestion);

//     console.log(questionNumber);

//     for (letter in currentQuestion.answers) {
//       answers.push(
//         `<label>
//         <input type="radio" name="question${questionNumber}" value="${letter}">
//         ${letter} :
//         ${currentQuestion.answers[letter]}
//         </label>`
//       );
//       console.log(letter);
//     }

//     output.push(
//       "Câu " +
//         index +
//         ":" +
//         `<div class="question"> ${currentQuestion.question} </div>
//             <div class="answers mt-3"> ${answers.join("")} </div>`
//     );
//   });

//   quizContainer.innerHTML = output.join("");
// }

// buildQuiz();

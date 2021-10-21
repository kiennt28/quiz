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
  {
    question: "Một anh thanh niên đánh 1 bà già hỏi anh ấy mất gì?",
    answers: {
      A: "Mất tiền",
      B: "Mất trí",
      C: "Mất sức",
      D: "Mất dạy",
    },
    correctAnswer: "D",
  },
];

function buildQuiz() {
  const output = [];
  var n = 0;
  for (let i = 0; i < allQuestions.length; i++) {
    n += 1;
    const answers = [];
    for (let index = 0; index < allQuestions[i].length; index++) {}
    // console.log(allQuestions[i]);
    // console.log(i);
    for (const key in allQuestions[i].answers) {
      // console.log(allQuestions[i].answers);
      answers.push(
        `<label>
        <input type="radio" name="question${i}" value="${key}">
        ${key} :
        ${allQuestions[i].answers[key]}
        </label>`
      );
    }
    output.push(
      "Câu: " +
        n +
        `<div class="question"> ${allQuestions[i].question}</div>
    <div class="answers mt-3"> ${answers.join("")}</div>`
    );
  }
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let numCorrect = 0;

  for (let j = 0; j < allQuestions.length; j++) {
    for (let index = 0; index < allQuestions[j].length; index++) {}
    // console.log(allQuestions[j]);
    const selector = `input[name=question${j}]:checked`;
    const userAnswer = (answerContainers[j].querySelector(selector) || {})
      .value;
    console.log(answerContainers[j].querySelector(selector));
    if (userAnswer === allQuestions[j].correctAnswer) {
      numCorrect++;

      answerContainers[j].style.color = "lightgreen";
    } else {
      answerContainers[j].style.color = "red";
    }
  }
  resultsContainer.innerHTML =
    `Số câu đúng: ` + `${numCorrect}/${allQuestions.length}`;
}

buildQuiz();

submitButton.addEventListener("click", showResults);

/* Use Foreach */
//----------------------------------------------------------------
// function buildQuiz()

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

// function showResults() {

//   const answerContainers = quizContainer.querySelectorAll(".answers");
//   let numCorrect = 0;

//   allQuestions.forEach((currentQuestion, questionNumber) => {

//     console.log(currentQuestion);
//     const answerContainer = answerContainers[questionNumber];
//     const selector = `input[name=question${questionNumber}]:checked`;
//     const userAnswer = (answerContainer.querySelector(selector) || {}).value;

//     if (userAnswer === currentQuestion.correctAnswer) {
//       numCorrect++;
//       answerContainers[questionNumber].style.color = "lightgreen";
//     } else {
//       answerContainers[questionNumber].style.color = "red";
//     }
//   });
//   resultsContainer.innerHTML = `${numCorrect} / ${allQuestions.length}`;
// }

// buildQuiz();

// submitButton.addEventListener("click", showResults);

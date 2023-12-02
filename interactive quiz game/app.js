const questionElement = document.getElementById('question')
const questionButton = document.getElementById('question-button')
const nextButton = document.getElementById('btn-next')

let currentQuestionIndex = 0
let score = 0

function startQuiz() {
  resetState()
  currentQuestionIndex = 0
  score = 0
  nextButton.innerHTML = "Next"
  showQuestion()
}
function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;
  // Clear previous buttons
  while (questionButton.firstChild) {
    questionButton.removeChild(questionButton.firstChild);
  }
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    questionButton.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none"
  while (questionButton.firstChild) {
    questionButton.removeChild(questionButton.firstChild);
  }
}
function selectAnswer(e){
  const selectBtn = e.target
  const isCorrect = selectBtn.dataset.correct === "true"
  if(isCorrect){
    selectBtn.classList.add("correct")
    score++;
  }
  else{
    selectBtn.classList.add("incorrect")
  }
  Array.from(questionButton.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct")
    }
    button.disabled = true;
  })
  nextButton.style.display = "block"
}
function showScore(){
  resetState()
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
  nextButton.innerHTML = "Play Again"
  nextButton.style.display = "Block"
}
function handelNextButton(){
  currentQuestionIndex++
  if(currentQuestionIndex < questions.length){
    showQuestion()
  }
  else{
    showScore()
  }
}
nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handelNextButton()
  }
  else{
    startQuiz()
  }
})
startQuiz()

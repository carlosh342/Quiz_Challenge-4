var quizContainer = document.getElementById('quiz');
// Array that contains Javascript questions 
var questions = [
 {
   question:"Whats the capital of Cuba",
   answers:{
    a:"Havana",
    b:"Santiago",
    c:"Los Angeles",
    d:"Mexico"
   },
    correct_answer: "a"
 },
 {
  question:"Whats Carlos birtuhday",
  answers:{
    a:"2/23/2022",
    b:"01/18/1999",
    c:"skks",
    d:"gbgbg",
  },
   correct_answer: "b",
 }

];

// function that displays questions and answers to user
function displayQuestion(questions, quizContainer){
 var answers;
 var output=[];
// for loop to cycle through each question
  for(var i=0; i<questions.length;i++){
    answers =[];
    for(letter in questions[i].answers){
      answers.push(
      '<label>'
      + '<input type="radio" name="question'+i+'" value="'+letter+'">'
      + letter + ': '
      + questions[i].answers[letter]
    + '</label>'
    );
    
  }
  output.push(
       '<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
  );
  quizContainer.innerHTML = output.join('');     
}


}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event Listener to start Quiz 
generateBtn.addEventListener("click", displayQuestion);

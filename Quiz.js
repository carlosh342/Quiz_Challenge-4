const start_screen = document.querySelector("#start");
const start_btn = document.querySelector("#start-btn");
const info_box = document.querySelector(".infox-box");
const exit_btn = document.querySelector("#.quit");
const continue_btn = document.querySelector(".restart");
const quiz_box = document.querySelector(".quizbox");
const end_box = document.querySelector("#quiz-end");
const submint_btn = document.querySelector("#save-score");
const initial_text = document.querySelector("#initials");
const storage= localstorage.getItem("results");
storage=storage?storage.split(",") :[];
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
 
var count=0;
var time_counter=60;
var score=0;

continue_btn.onclick =()=>{
  info_box.classList.add("hide");
  start_screen.classList.remove("hide")
};

start_btn.onclick =()=>{
  function count_down(){
    time_counter--;
    if(time_counter===0){
      clearInterval(start_countdown)
      quiz_end()
    }
  let time_remaining = document.querySelector("#time-rem");
  let time_tag="<span>Time left:"+time_counter+"</span>"
  time_remaining.innerHTML = time_tag;
  }
  const start_countdown=setInterval(count_down,1000);
  start_screen.classList.add("hide");
  quiz_box.classList.remove("hide");
  show_questions(count)
}
function show_questions(index){
  if(count>=10){
    return;
  }
const que_text =document.querySelector(".que-text");
const option_list=document.querySelector("#choises");
let que_tag ="<span>"+questions[index].numb+"."+questions[index].questions+"</span>";
let option_tag =`<div class = "option">`+questions[index].answers[a]+`<span></span></div>`
                +`<div class = "option">`+questions[index].answers[b]+`<span></span></div>`
                +`<div class = "option">`+questions[index].answers[c]+`<span></span></div>`
                +`<div class = "option">`+questions[index].answers[d]+`<span></span></div>`
que_text.innerHTML=que_tag;
option_list.innerHTML =option_tag;

const option = option_list.querySelectorAll(".option");
for(let i=0;i<option.length;i++){
  option[i].setAttribute("onclick","option_selected()this");
} }
function option_selected(answer){
  if(count>=10){
    return;
  }
  let user_answer=answer.textContent;
  let correct_answer=questions[counter].answer;
  if(user_answer==correct_answer){
    console.log("Answer is correct :)");
    const response = document.querySelector("#response");
    response.innerHTML=`<div id="response"><span>Correct</span></div>`;
    setTimeout(next_question,500);
    time_counter-=5;
  }
}
function next_question(){
  counter++;
  if(counter==10){
    quiz_end()
  }
  show_questions(counter);
  const response=document.querySelector("#response");
  response.innerHTML=`<div id=response><span></span></div>`
}
function quiz_end(){
  quiz_box.classList.add("hide");
  end_box.classList.remove("hide");
  const score_text =document.querySelector(".score");
  const score_tag=`<h3 class="score"> Your score was` +score+`out of 10</h3>`;
  score_text.innerHTML=score_tag;
}
submint_btn.onclick=()=>{
  const initials=initial_text.value;
  var resultsobject={
    initials:initials,
    score:score
  }
  localStorage.setItem((localStorage.length+1),JSON.stringify(resultsobject));
  initial_text.value="";
  location.reload();
}


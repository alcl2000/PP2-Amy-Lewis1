let questions = [
    {title : 'what day is it',
    alternatives : ['monday' , 'tuesday' , 'wednesday', 'thursday'],
    correctAnswer : '3'},
   {title: 'what colour',
   alternatives : ['green', 'yellow', 'blue'],
   correctAnswer : '0',}
];

let questionArea =  document.getElementById("question-area").value;


function displayQuestion (){
    for (let question of questions){
          questionArea.textContent = questions;   
    }
}

function checkAnswer();


displayQuestion();
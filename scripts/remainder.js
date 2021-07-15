const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");

const correctAudio = document.getElementById("correctSound");
const wrongAudio = document.getElementById("wrongSound");

var correct_answer=0;

// Every Time a new Random Question
function generate_question(){
    var num1 = Math.floor(Math.random() * 20)+1; // No Zero Required
    var num2 = Math.floor(Math.random() * 20)+1;

    if(num1 > num2){
        correct_answer = eval(num1 % num2);
        document.getElementById("num1").innerHTML = num1; 
        document.getElementById("num2").innerHTML = num2;
      }
      else{
        correct_answer = eval(num2 % num1);
        document.getElementById("num1").innerHTML = num2; 
        document.getElementById("num2").innerHTML = num1;
      } 
      console.log(correct_answer);
      var wrong1 = Math.floor(Math.random() * 20)+1 ;
      while(wrong1==correct_answer)
          wrong1 = Math.floor(Math.random() * 20)+1 ;
          
      var wrong2 = Math.floor(Math.random() * 20)+1;
      while(wrong2==correct_answer || wrong2 == wrong1)
        wrong2 = Math.floor(Math.random() * 20)+1 ;

      var wrong3 = Math.floor(Math.random() * 20)+1;
      while(wrong3==correct_answer || wrong3 == wrong1 || wrong3==wrong2)
        wrong3 = Math.floor(Math.random() * 20)+1 ;

    var answersArray= [];
    var switchNumbers = [];

    // All Options
    answersArray = [correct_answer, wrong1, wrong2, wrong3];

    // Shuffling all options 
    for(i = answersArray.length; i--;)
        switchNumbers.push(answersArray.splice(Math.floor(Math.random()*(i+1)),1)[0]);

    // Setting random Options Values 
    option1.innerHTML=switchNumbers[0];
    option2.innerHTML=switchNumbers[1];
    option3.innerHTML=switchNumbers[2];
    option4.innerHTML=switchNumbers[3];
}

option1.addEventListener("click",function(){
    if(option1.innerHTML== correct_answer)
    {
        correctAudio.play();
        setTimeout ( "generate_question()", 1200 );
    }
    else
    {
        wrongAudio.play();
    }
})

option2.addEventListener("click",function(){
    if(option2.innerHTML== correct_answer)
    {
        correctAudio.play();
        setTimeout ( "generate_question()", 1200 );
    }
    else
    {
        wrongAudio.play();
    }
})


option3.addEventListener("click",function(){
    if(option3.innerHTML== correct_answer)
    {
        correctAudio.play();
        setTimeout ( "generate_question()", 1200 );
    }
    else
    {
        wrongAudio.play();
    }
})

option4.addEventListener("click",function(){
    if(option4.innerHTML== correct_answer)
    {
        correctAudio.play();
        setTimeout ( "generate_question()", 1200 );
    }
    else
    {
        wrongAudio.play();
    }
});

generate_question();
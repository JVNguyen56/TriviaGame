var timer = 10;

var questions = [{
  question: "<h3>" + "Which character says Bazinga?" + "</h3>",
  choices: ["<h4 class='correct'>Sheldon</h4>","<h4 class='wrong'>Leonard</h4>","<h4 class='wrong'>Howard</h4>","<h4 class='wrong'>Penny</h4>"],
  correctAnswer: "<h2>Sheldon</h2>" + "<img src='assets/images/bazinga.gif' alt='sheldon'/>"
 
  }, {
  question: "<h3>" + "Which one of these characters are not a main character on the show?" + "</h3>",
  choices: ["<h4 class='wrong'>Sheldon Cooper</h4>","<h4 class='correct'>Dimitri Vega</h4>","<h4 class='wrong'>Leonard Hofstadter</h4>","<h4 class='wrong'>Howard Wolowitz</h4>"],
  correctAnswer: "<h2>Dimitri Vega</h2>" + "<img src='assets/images/bigbangcast.jpg'/>"
}, {
  question: "<h3>" + "Which character does not have a PhD?" + "</h3>",
  choices: ["<h4 class='wrong'>Leonard Hofstadter</h4>","<h4 class='wrong'>Rajesh Koothrappali</h4>","<h4 class='correct'>Howard Wolowitz</h4>","<h4 class='wrong'>Amy Farrah Fowler</h4>"],
  correctAnswer: "<h2>Howard Wolowitz</h2>" + "<img src='assets/images/howard.gif' alt='howard'/>"
}, {

 question: "<h3>" + "What is Sheldon's favorite number?" + "</h3>",
  choices: ["<h4 class='wrong'>23</h4>","<h4 class='wrong'>PI</h4>","<h4 class='correct'>73</h4>","<h4 class='wrong'>91</h4>"],
  correctAnswer: "<h2>73</h2>" + "<img src='assets/images/sheldon2.gif' alt='sheldon'/>"
}, {

 question: "<h3>" + "For the first 6 seasons, who couldn't speak to girls without being drunk?" + "</h3>",
  choices: ["<h4 class='correct'>Rajesh Koothrappali</h4>","<h4 class='wrong'>Leonard Hofstadter</h4>","<h4 class='wrong'>Howard Wolowitz</h4>","<h4 class='wrong'>Sheldon Cooper</h4>"],
  correctAnswer: "<h2>Rajesh Koothrappali</h2>" + "<img src='assets/images/rajesh.gif' alt='rajesh'/>"
}, {

 question: "<h3>" + "Where is Penny originally from?" + "</h3>",
  choices: ["<h4 class='wrong'>Pasadena,CA</h4>","<h4 class='wrong'>Kearny, Nebraska</h4>","<h4 class='correct'>Omaha,Nebraska</h4>","<h4 class='wrong'>Lincoln,Nebraska</h4>"],
  correctAnswer: "<h2>Omaha,Nebraska</h2>" + "<img src='assets/images/omaha.jpg' alt='omaha'/>"
}, {
 question: "<h3>" + "Who wrote and recorded the show's theme song?" + "</h3>",
  choices: ["<h4 class='wrong'>Third Eye Blind</h4>","<h4 class='wrong'>ColdPlay</h4>","<h4 class='wrong'>U2</h4>","<h4 class='correct'>Bare Naked Ladies</h4>"],
  correctAnswer: "<h2>Barenaked Ladies</h2>" + "<img src='assets/images/barenl.jpg' alt='band'/>"
}, {

 question: "<h3>" + "Who trained as an astronaut and went into space as a payload specialist on the International Space Station?" + "</h3>",
  choices: ["<h4 class='correct'>Howard Wolowitz</h4>","<h4 class='wrong'>Rajesh Koothrappali</h4>","<h4 class='wrong'>Leonard Hoftstadter</h4>","<h4 class='wrong'>Sheldon Cooper</h4>"],
  correctAnswer: "<h2>Howard Wolowitz</h2>" + "<img src='assets/images/howardastro.jpg' alt='astro'/>"
}, {

 question: "<h3>" + "What is Leonard's occupation?" + "</h3>",
  choices: ["<h4 class='wrong'>Aerospace Engineer</h4>","<h4 class='wrong'>Microbiologist</h4>","<h4 class='correct'>Experimental Physicst</h4>","<h4 class='wrong'>Theoretical Physicist</h4>"],
  correctAnswer: "<h2>Experimental Physicst</h2>" + "<img src='assets/images/leonard1.gif' alt='leonard'/>"
}, {

 question: "<h3>" + "What is Sheldon Cooper's middle name?" + "</h3>",
  choices: ["<h4 class='correct'>Lee</h4>","<h4 class='wrong'>John</h4>","<h4 class='wrong'>Mason</h4>","<h4 class='wrong'>Bryce</h4>"],
  correctAnswer: "<h2>Lee</h2>" + "<img src='assets/images/sheldonlee.gif' alt='sheldon'/>"
}];

var questionCounter = 0;
var correctCount = 0;
var wrongCount = 0;
var choiceCounter = 0;
var intervalId;

    $(document).ready(function(){

      $("#start").on("click", playGame);
      $("#start").on("click", run);

          function playGame(){

            if (questionCounter < questions.length){

            $("#start").hide(); 
            $("#answer").empty();           
            choice();
            $(".wrong").on("click", WC);
            $(".correct").on("click", RC);

            $("#timer").html("<h2>Time remaining: " + timer + "</h2.");
            $("#question").html("<h2>" + questions[questionCounter].question + "</h2>");

            }
            else if (questionCounter === questions.length) {
              // stop();
              finalPage();
            }  
          }

        
          function choice(){
            $("#choice").append("<button class='btn btn-warning'>" + questions[questionCounter].choices[0] + "</button>" + "<br><br><br>");
            $("#choice").append("<button class='btn btn-warning'>" + questions[questionCounter].choices[1] + "</button>" + "<br><br><br>");              
            $("#choice").append("<button class='btn btn-warning'>" + questions[questionCounter].choices[2] + "</button>" + "<br><br><br>");              
            $("#choice").append("<button class='btn btn-warning'>" + questions[questionCounter].choices[3] + "</button>");              
          }

          function WC(){
            wrongCount++;
            answerPage();
          }

          function RC(){
            correctCount++;  
            answerPage();
          }     

          function NA(){
            noAnswer++;
            answerPage();
          }             

         

          function answerPage(){
            $("#choice").empty();
            $("#answer").html("<h2>Correct Answer is: </h2>" + questions[questionCounter].correctAnswer);
            $("#timer").html(" ");
            questionCounter++;
            stop();
            timer = 15;   
            setTimeout(playGame,3000);

            if (questionCounter < 10){
              setTimeout(run,3000);
          }
          else {
            stop();
          }
          }

          function finalPage(){
            $("#timer").empty();
            $("#question").empty();
            $("#answer").empty();
            var noAnswer = questionCounter - (correctCount + wrongCount); 

            $("#question").html("<h1>Your Results</h1>" + "<br>")
            $("#setup").append("<h3>Correct Answers: " + correctCount + "</h3>" + "<br>").append("<h3>Wrong Answers: " + wrongCount + "</h4>" + "<br>").append("<h3>Unanswered Questions: " + noAnswer + "</h3>" + "<br><br><br>");
            $("#answer").html("<button id='restart'>Replay</button>");
            $("#restart").on("click",refresh);


          }
          function refresh() {
        location.reload();
        };

          function run() {
            intervalId = setInterval(decrement, 1000);
          }

          function stop() {
            clearInterval(intervalId);
          }
          function decrement() {
            timer--;
            $("#timer").html("<h2>Time remaining: " + timer + "</h2>")
      
            if (timer === 0) {   
              answerPage();     
              }           
          }
});





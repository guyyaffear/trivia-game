$(document).ready(function(){

var intervalId;
$("#start-button").on("click", gameState.startTimer);

});

var gameState = {

  //make this 120 seconds when actually playing game
timeRemaining : 10,

showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
    $("#end-page").show();
    $("#questions-box").hide();
    $("#correct-answers").text(numCorrect);
    $("#incorrect-answers").text(numIncorrect);
    $("#unanswered").text(numUnanswered);
    console.log(numCorrect, numIncorrect, numUnanswered);
},

reset: function() {
  gameState.timeRemaining = 10;
  $("#timer".text(10));
},

startTimer: function() {
  $("#start-page").hide(); //hide the start page and show game play
  intervalId = setInterval(gameState.countdown, 1000);

  trivia.displayQuestions();
},

stopTimer: function() {
  clearInterval(intervalId);
  console.log("time stopped");

  trivia.checkAnswers();
},

countdown: function() {
  gameState.timeRemaining--;
  $("#timer").text(gameState.timeRemaining);
  if (gameState.timeRemaining === 0) {
    gameState.stopTimer();
  }
}

}

var trivia = {

  checkAnswers: function() {
    var correctAnswer;
    var userAnswer;
    var numCorrect = 0;
    var numIncorrect = 0;
    var numUnanswered = 0;

    for (var i = 0; i < questionBank.length; i++) {
      correctAnswer = questionBank[i].correct;
      userAnswer = $('input[id=radio'+i+']:checked + label').text();

      console.log("correct answer " + correctAnswer);
      // console.log("user answer " + userAnswer);

      if (userAnswer === correctAnswer) {
        console.log("celebrate");
        numCorrect++;
      } else if (userAnswer === "") {
              console.log("no answer");
          numUnanswered++;
      }
      else if (userAnswer !== correctAnswer) {
         {
          console.log("sorry");
          numIncorrect++;
      }

      }
        }
        // console.log(numCorrect, numIncorrect, numUnanswered);
      gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);
  },

  // keepScore: function() {
  //   var score =
  // },

  displayQuestions: function() {
      var divContainer = $("#questions-box");
      var answerGroup = $(".form-check");

    for (var i = 0; i < questionBank.length; i++) {

      divContainer.append('<div id="question">' + questionBank[i].question + '</div>');

      var answer1 = questionBank[i].answers[0];
      var answer2 = questionBank[i].answers[1];
      var answer3 = questionBank[i].answers[2];

      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
    }
  },
}

var questionBank =
[
   {
    question: "Who is the mayor of Springfield?",
    answers: ["Montgomery Burns", "Joe Quimby", "Clancy Wiggum"],
    correct: "Joe Quimby"
  },

  {
    question: "What did Lyle Lanley sell to Brockway, Ogdenville, and North Haverbrook?",
    answers: ["monorail", "nuclear power plant", "mule"],
    correct: "monorail"
  },
  {
    question: "What what the name of Bart's elephant?",
    answers: ["Snowball", "Stampy", "Laddie"],
    correct: "Stampy"
  },
  {
    question: "When Bart rents a car with a fake license, where does he drive with his friends on spring break?",
    answers: ["Shelbyville", "Itchy and Scratchy Land", "Knoxville"],
    correct: "Knoxville"
  },
  {
    question: "When the Simpsons move to a farm, what do they plant and sell at a roadside stand?",
    answers: ["carrots and peas", "a cross of tomatoes and tobacco", "gummy bears"],
    correct: "a cross of tomatoes and tobacco"
  },
  {
    question: "What character that Homer voices gets added to the Itchy and Scratchy Show?",
    answers: ["Poochie", "Max Power", "Kang"],
    correct: "Poochie"
  },
  {
    question: "When the Simpson kids are removed from their parents' care by child protective services, which one becomes their foster family?",
    answers: ["Flanders family", "Van Houten family", "Smithers family"],
    correct: "Flanders family"
  },
  {
    question: "When Marge starts a business after attending a franchise fair, what is her company?",
    answers: ["Fleet-a-Pita", "Flancrest Enterprises", "Pretzel Wagon"],
    correct: "Pretzel Wagon"
  },
  {
    question: "What does Lisa make for Homer's BBBQ backyard barbecue?",
    answers: ["salad", "gazpacho", "lamb chops"],
    correct: "gazpacho"
  },
  {
    question: "What is Principal Seymour Skinner's real name?",
    answers: ["Troy McClure", "Gary Chalmers","Armin Tamzarian"],
    correct: "Armin Tamzarian"
  }
]

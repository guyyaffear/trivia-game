$(document).ready(function(){

var intervalId;

trivia.startTimer();

});

var trivia = {
    //make this 120 seconds when actually playing game
  timeRemaining : 10,

  reset: function() {
    trivia.timeRemaining = 10;
    $("#timer".text(10));
  },

  startTimer: function() {
    intervalId = setInterval(trivia.countdown, 1000);
    trivia.displayQuestions();
  },

  stopTimer: function() {
    clearInterval(intervalId);
    console.log("time stopped");
    // trivia.checkAnswers();
    // end game, tally score, show new page with score
  },

  countdown: function() {
    trivia.timeRemaining--;
    $("#timer").text(trivia.timeRemaining);
    // console.log(trivia.timeRemaining);
    if (trivia.timeRemaining === 0) {
      trivia.stopTimer();
    }
  },

//   checkAnswers: function() {
//
//   var correctAnswer = simpsonsQuestions.correct;
//   var userAnswer = $("input:checked + label").text();
//
//   console.log(correctAnswer);
//   console.log(userAnswer);
//
//
// if (userAnswer === correctAnswer) {
//      console.log("celebrate");
//   }
//
//   },
  // keepScore: function() {
  //   // tally up correct, incorrect, unanswered
// },

// TODO: make this in a loop
  displayQuestions: function() {
    // var question = $("#question").text(this.simpsonsQuestions.question1.question);;
    // var answer1 = this.simpsonsQuestions.question1.answers[0];
    // $("#radio1label").text(answer1);
    //
    // var answer2 = this.simpsonsQuestions.question1.answers[1];
    // $("#radio2label").text(answer2);
    // var answer3 = this.simpsonsQuestions.question1.answers[2];
    // $("#radio3label").text(answer3);
      var divContainer = $("#questions-box");
      var answerGroup = $(".form-check");


    for (var i = 0; i < simpsonsQuestions.length; i++) {

      divContainer.append('<div id="question">' + simpsonsQuestions[i].question + '</div>');

      var answer1 = simpsonsQuestions[i].answers[0];
      var answer2 = simpsonsQuestions[i].answers[1];
            var answer3 = simpsonsQuestions[i].answers[2];

      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-answer" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 +
              '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-answer" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 +
                      '</label></div>');
    divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-answer" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 +
                                      '</label></div>');

    }


    },


}

var simpsonsQuestions =
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
    question: "When the Simpson kids are removed by child protective services, who is their foster home?",
    answers: ["Flanders", "Van Houten", "Smithers"],
    correct: "Flanders"
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

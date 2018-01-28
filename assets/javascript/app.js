$(document).ready(function(){


var intervalId;
// $("input[type='radio']").on("click", function() {
//   var radioValue = $("input[name='exampleRadios']:checked").val();
//   console.log(radioValue);
// });

trivia.startTimer();

});

var trivia = {
    //make this 120 seconds when actually playing game
  timeRemaining : 30,

  reset: function() {
    trivia.timeRemaining = 30;
    $("#timer".text(30));
  },

  startTimer: function() {
    intervalId = setInterval(trivia.countdown, 1000);
    trivia.displayQuestions();
  },

  stopTimer: function() {
    clearInterval(intervalId);
    console.log("time stopped");
    trivia.testing();
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

  testing: function () {
    var radioValue = $("input[name='exampleRadios']:checked").val();
    console.log(radioValue);
  },
  // keepScore: function() {
  //   // tally up correct, incorrect, unanswered
  // }

// TODO: make this in a loop
  displayQuestions: function() {
    var question = $("#question").text(this.simpsonsQuestions.question1.question);
    var answer1 = $("#exampleRadios1label").text(this.simpsonsQuestions.question1.answers[0]);
    var answer2 = $("#exampleRadios2label").text(this.simpsonsQuestions.question1.answers[1]);
    var answer3 = $("#exampleRadios3label").text(this.simpsonsQuestions.question1.answers[2]);
    var correctAnswer = trivia.simpsonsQuestions.question1.correct;


// var radioValue = $("input[name='exampleRadios']:checked").val();
    },
    // tallyAnswers : function() {
    //   var radioValue = $("input[name='exampleRadios']:checked").val()
    //   console.log(radioValue);
    // },

simpsonsQuestions : {
  question1: {
    question: "Who is the mayor of Springfield?",
    answers: ["Montgomery Burns", "Joe Quimby", "Clancy Wiggum"],
    correct: "Joe Quimby"
  },

  question2: {
    question: "What did Lyle Lanley sell to Brockway, Ogdenville, and North Haverbrook?",
    answers: ["monorail", "nuclear power plant", "mule"],
    correct: "monorail"
  },
  question3: {
    question: "What what the name of Bart's elephant?",
    answers: ["Snowball", "Stampy", "Laddie"],
    correct: "Stampy"
  },
  question4: {
    question: "When Bart rents a car with a fake license, where does he drive with his friends on spring break?",
    answers: ["Shelbyville", "Itchy and Scratchy Land", "Knoxville"],
    correct: "Knoxville"
  },
  question5: {
    question: "When the Simpsons move to a farm, what do they plant and sell at a roadside stand?",
    answers: ["carrots and peas", "a cross of tomatoes and tobacco", "gummy bears"],
    correct: "a cross of tomatoes and tobacco"
  },
  question6: {
    question: "What character that Homer voices gets added to the Itchy and Scratchy Show?",
    answers: ["Poochie", "Max Power", "Kang"],
    correct: "Poochie"
  },
  question7: {
    question: "When the Simpson kids are removed by child protective services, who is their foster home?",
    answers: ["Flanders", "Van Houten", "Smithers"],
    correct: "Flanders"
  },
  question8: {
    question: "When Marge starts a business after attending a franchise fair, what is her company?",
    answers: ["Fleet-a-Pita", "Flancrest Enterprises", "Pretzel Wagon"],
    correct: "Pretzel Wagon"
  },
  question9: {
    question: "What does Lisa make for Homer's BBBQ backyard barbecue?",
    answers: ["salad", "gazpacho", "lamb chops"],
    correct: "gazpacho"
  },
  question10: {
    question: "What is Principal Seymour Skinner's real name?",
    answers: ["Troy McClure", "Gary Chalmers","Armin Tamzarian"],
    correct: "Armin Tamzarian"
  }
  }

}

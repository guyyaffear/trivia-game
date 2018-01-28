$(document).ready(function(){


var intervalId;

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
    // end game, tally score, show new page with score
  },

  countdown: function() {
    trivia.timeRemaining--;
    $("#timer").text(trivia.timeRemaining);
    console.log(trivia.timeRemaining);
    if (trivia.timeRemaining === 0) {
      trivia.stopTimer();
    }
  },

  // keepScore: function() {
  //   // tally up correct, incorrect, unanswered
  // }

  displayQuestions: function() {
    $("#question").text(trivia.questionsList.question);
    $("#customRadio1label").text(trivia.questionsList.incorrect_answers[0]);
  },

  questionsList:
    {

    }

  {
    "category": "Entertainment: Cartoon & Animations",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is Scooby-Doo&#039;s real name?",
    "correct_answer": "Scoobert",
    "incorrect_answers": [
      "Scooter",
      "Scrappy",
      "Scoobert"
    ]
}

{
  "category": "Entertainment: Cartoon & Animations",
  "type": "multiple",
  "difficulty": "medium",
  "question": "Adam West was the mayor of which cartoon town?",
  "correct_answer": "Quahog",
  "incorrect_answers": [
    "Springfield",
    "South Park",
    "Langley Falls"
  ]
},

{
  "category": "Entertainment: Cartoon & Animations",
  "type": "multiple",
  "difficulty": "medium",
  "question": "In &quot;The Simpsons&quot;, where did Homer and Marge first meet?",
  "correct_answer": "At Summer Camp",
  "incorrect_answers": [
    "At High School",
    "At Church",
    "At 742 Evergreen Terrace"
  ]
},


}

trivia.startTimer();

simpsonsQuestions : {
  question1: {
    question: "Who is the mayor of Springfield?",
    answers: ["Joe Quimby", "Montgomery Burns", "Clancy Wiggum"],
    correct: "Clancy Wiggum"
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
  question5: {
    question: "When the Simpsons move to a farm, what do they plant and sell at a roadside stand?",
    answers: ["carrots and peas", "a cross of tomatoes and tobacco", "gummy bears"],
    correct: "a cross of tomatoes and tobacco"
  }
  question6: {
    question: "What character that Homer voices gets added to the Itchy and Scratchy Show?",
    answers: ["Poochie", "Max Power", "Kang"],
    correct: "Poochie"
  }
  question7: {
    question: "When the Simpson kids are removed by child protective services, who is their foster home?",
    answers: ["Flanders", "Van Houten", "Smithers"],
    correct: "Flanders"
  }
  question8: {
    question: "When Marge starts a business after attending a franchise fair, what is her company?",
    answers: ["Fleet-a-Pita", "Flancrest Enterprises", "Pretzel Wagon"],
    correct: "Pretzel Wagon"
  }
  question9: {
    question: "What dish does Lisa bring to Homer's "BBBQ" backyard barbecue?",
    answers: "salad", "gazpacho", "lamb chops",
    correct: "gazpacho"
  }
  question10: {
    question: "What is Seymour Skinner's real name?",
    answers: "Troy McClure", "Gary Chalmers","Armin Tamzarian",
    correct: "Armin Tamzarian"
  }
  }

}

});

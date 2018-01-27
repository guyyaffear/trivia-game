$(document).ready(function(){


var intervalId;

var trivia = {

  timeRemaining : 30,

  reset: function() {
    trivia.timeRemaining = 30;
    $("#timer".text(30));
  },

  startTimer: function() {
    intervalId = setInterval(trivia.countdown, 1000);


  },

  stopTimer: function() {
    clearInterval(intervalId);
    console.log("time stopped");
  },

  countdown: function() {
    trivia.timeRemaining--;
    $("#timer").text(trivia.timeRemaining);
    console.log(trivia.timeRemaining);
    if (trivia.timeRemaining === 0) {
      trivia.stopTimer();
    }
  }



}

trivia.startTimer();

  });

var read = require("readline-sync")
var chalk = require("chalk")
var score= 0;
var user = read.question("what is your name?")
console.log("welcome to the game " + user)
console.log(chalk.bold("LETS SEE HOW BETTER YOU KNOW ME"))
function me(question,answer)
{
  var userAnswer= read.question(chalk.green(question))
  if (userAnswer.toUpperCase()=== answer.toUpperCase())
  {
    console.log(chalk.blue("Answer is true"))
    score=score+1
  }
  else
  {
    console.log(chalk.red("false the answer is " + answer))
  }
}
var highScore= [
  {
    name: "rishi",
    scores: "4",
  },
  {
    name: "tuktuk",
    scores:"3",
  }

]

var puja = [
  {
    question: "Do you know Upashana ",
    answer: "Yes",
  },
  {
    question: "where does she lives? ",
    answer: "Duliajan",
  },
  {
    question: "What is her favourite colour? ",
    answer: "red",
  },
  {
    question: "who is her best friend ",
    answer: "kabyashree",
  },
  {
    question: "who is her fav cartoon character ",
    answer: "doreamon",
  }]

  for(i=0; i<puja.length; i++)
  {
    curQuestion = puja[i];
    me(curQuestion.question, curQuestion.answer)
  }
  console.log(chalk.bold("score is "+ score))

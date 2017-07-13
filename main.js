const Basic = require('./BasicCard.js');
const Cloze = require('./ClozeCard.js');
const fs = require('fs');
const inquirer = require('inquirer');

var flashCardsList = {
  basicCards = [],
  clozeCards = []
};

var addObjectToFile = function(item, file) {
  var writeStream = fs.createWriteStream(file);
  var stringOfItem = JSON.stringify(item);
  writeStream.write(stringOfItem);
  writeStream.end()
}

var options = {
  helpList: ['create basic', 'create cloze', 'review', 'quit', 'help'],
  descriptionList: ['create basic flashcard with front and back', 'create a flashcard that gives a Jeopardy style question',
                    'review your created flashcards', 'quit the flashcard program', 'provide you this list!'],
  "help": function() {
    for(let i = 0; i < options.helpList.length; i++){
      console.log(`${options.helpList[i]}: ${options.descriptionList[i]}`);
    }
    main();
  },
  "create basic": function() {
    inquirer.prompt([
      {
        name:'front',
        message:'What would you like the front of the card to say?\n'
      },
      {
        name:'back',
        message:'What would you like the back of the card to say?\n'
      }
    ]).then(function(answers) {
      var flashcard = new Basic.BasicCard(answers.front, answers.back);
      flashCardsList.basicCards.push(flashcard);
      addObjectToFile(flashCardsList, 'flashCards.txt');
      main();
    });
  },
  "create cloze": function() {
    inquirer.prompt([
      {
        name:'text',
        message:'What would you like the full text to be?\n'
      },
      {
        name:'cloze',
        message:'What would you like the answer to be?\n'
      }
    ]).then(function(answers) {
      var flashcard = new Cloze.ClozeCard(answers.text, answers.cloze);
      flashCardsList.clozeCards.push(flashcard);
      addObjectToFile(flashCardsList, 'flashCards.txt');
      main();
    });
  },
  "review": function() {
    console.log('This function is still being built');
  }
}

function main() {
  console.log("\n");
  inquirer.prompt([
    {
      name:"response",
      message:"What would you like to do?  Type help for a list of options\n"
    }
  ]).then(function(answer) {
    userAnswer = answer.response.toLowerCase();
    if (userAnswer == "quit") {
      console.log("Goodbye!");
    }
    else if(options.helpList.includes(userAnswer)){
      options[userAnswer]();
    }
    else {
      console.log("That is not a command I know.\n");
      main();
    }
  });
};

main();

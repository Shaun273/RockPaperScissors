var winsCom = 0;
var winsUser = 0;
var maxWins = 3;
var Options = ["rock","paper","scissors","lizard","spock"];

// Scripts
var Intro_Confirm = "Welcome to Rock Paper Scissors Lizard Spock";
var Rules = "The Rules are standard RPSLS, as shown in the diagram behind. Best out of 5. You will choose your move and the computer will also generate a random response.";
var Move = "What do you want to pick? \n\n1. Rock\n2. Paper\n3. Scissors\n4. Lizard\n5. Spock\n\nType the name or number and press ENTER to select.";


function GenMove() {
  return Options[Math.floor(Math.random() * Options.length)];
}

function WhoWins(string1,string2) {
  newstring2 = string2;
  newstring1 = string1;
  if (newstring1===newstring2) {
    return 0;
  }
  switch (newstring1) {
    case Options[0]:
      if (newstring2 ==Options[2]||newstring2==Options[3]) {
        return 1;
      } else if (newstring2 ==Options[1]||newstring2==Options[4]) {
        return 2;
      }
      break;
    case Options[1]:
      if (newstring2 == Options[0]||newstring2 == Options[4]) {
        return 1;
      } else if (newstring2 == Options[2]||newstring2 == Options[3]) {
        return 2;
      }
      break;
    case Options[2]:
      if (newstring2 == Options[1]||newstring2==Options[3]) {
        return 1;
      } else if (newstring2 == Options[0]||newstring2==Options[4]) {
        return 2;
      }
      break;
    case Options[3]:
      if (newstring2 == Options[1]||newstring2 == Options[4]) {
        return 1;
      } else if (newstring2 == Options[0]||newstring2 == Options[2]) {
        return 2;
      }
      break;
    case Options[4]:
      if (newstring2 == Options[0]||newstring2 == Options[2]) {
        return 1;
      } else if (newstring2 == Options[1]||newstring2 == Options[3]) {
        return 2;
      }
      break;
    default:

  }
}

function ValidateInput(UserChoice){
  if (UserChoice.length>1){
    newstring1 = sring1.toLowerCase();
  }
  else {
    newstring1 = Options[parseInt(string1)-1];

  }
  while (UserChoice != Options[0] && UserChoice != Options[1] && UserChoice != Options[2] && UserChoice != Options[3] && UserChoice != Options[4] && UserChoice != Options[5] && (UserChoice.length < 2 && UserChoice.replace([/[12345]/g,""]) == "")) {
    alert("Invalid Option.")
    UserChoice = prompt(Move);
  }


}

// Intro
function PlayGame(){

  if (confirm(Intro_Confirm)==false){exit(location.reload())}
  alert(Rules);
  var UserChoice = "";

  do {
    UserChoice = prompt(Move);
    UserChoice = UserChoice.toLowerCase();
    UserChoice = ValidateInput(UserChoice);
    ComChoice = GenMove();

    var Result = WhoWins(UserChoice,ComChoice);

    if (Result == 1) {
      winsUser++
      alert("You picked "+Options[parseInt(UserChoice)-1]+". The computer picked "+ComChoice+". You win!")
    } else if (Result == 2) {
      winsCom++
      alert("You picked "+Options[parseInt(UserChoice)-1]+". The computer picked "+ComChoice+". You lost!")
    } else if (Result == 0) {
      alert("You picked "+Options[parseInt(UserChoice)-1]+". The computer picked "+ComChoice+". It was a draw.")
    }
    alert("The score is "+winsCom+" wins to the Computer. And "+winsUser+" wins to you!")



} while (winsUser < 3 && winsCom < 3)
if (winsUser > winsCom) {
  alert("Congratulations!! You win!")
} else if (winsCom > winsUser) {alert("That's too bad, you lost!")}
}

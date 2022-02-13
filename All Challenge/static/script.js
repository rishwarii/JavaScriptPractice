//Challenege 1 : YOur age in Days

function getAge() {
  var birthyear = prompt("Enter your birth year");
  var d = new Date();
  var cur = d.getFullYear();
  var daysAlive = (cur - birthyear) * 365;
  var h1 = document.createElement("h1"); //elrment h1
  var textAnswer = document.createTextNode(
    "You are " + daysAlive + " days old"
  );
  h1.setAttribute("id", "daysAlive");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-results").appendChild(h1);
}

function resetAge() {
  document.getElementById("daysAlive").remove();
}

//Challenege 2 : Your Catto

function generateCatto() {
  var img = document.createElement("img");
  var div = document.getElementById("flex-cat");
  img.src = "https://thecatapi.com/api/images/get?format=src&type=gif";
  div.appendChild(img);
}

/* Challenege 3 Rock Paper Scirrisios */

function rpsGame(yourChoice) {
  //console.log(yourChoice.id);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  console.log(humanChoice);
  var botChoiceN = randomTorps();
  botChoice = botChoiceN.id;
  console.log(botChoice);
  var results = decideWinners(humanChoice, botChoice);
  console.log(results);
  // messages = finalMessages(results); //{message 'You Won' , color ='green', You Lost , You Tied}
  rpsFrontend(humanChoice, botChoice, results);
}

function randomTorps() {
  return [rock, paper, scissors][Math.floor(Math.random() * 3)];
}

function decideWinners(humanChoicep, botChoicep) {
  //rock , paper
  var choices = {
    rock: 0,
    paper: 2,
    scissors: 1,
  };

  if ((choices[humanChoicep] + 1) % 3 == choices[botChoicep]) return "You Won ";
  else if (choices[humanChoicep] == choices[botChoicep]) return "Its a tie ";
  else return "You lost ";
}

function rpsFrontend(humanChoiceI, botChoiceI, FinMessages) {
  var imdDataset = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messDiv = document.createElement("div");
  var messDivTextNode = document.createTextNode(FinMessages);

  humanDiv.innerHTML =
    "<img src ='" +
    imdDataset[humanChoiceI] +
    "'height=150 width=150 style ='box-shadow: 0px 10px 50px rgb(113, 113, 179)'>";
  botDiv.innerHTML =
    "<img src = '" +
    imdDataset[botChoiceI] +
    "'height=150 width=150 style ='box-shadow: 0px 10px 50px  rgba(209,117,46,0.44)'>";
 
  messDivTextNode.innerHTML =
    "<h1 style='color:rgb(113, 113, 179)'>"+FinMessages+"</h2>";

  document.getElementById("flex-box-container-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-container-rps-div").appendChild(botDiv);
  document
    .getElementById("flex-box-container-rps-div")
    .appendChild(messDivTextNode);
}




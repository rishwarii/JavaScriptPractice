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

//Challenege 2 : YOur Catto

function generateCatto() {
  var img = document.createElement("img");
  var div = document.getElementById("flex-cat");
  img.src = "https://thecatapi.com/api/images/get?format=src&type=gif";
  div.appendChild(img);
}

let textArray = [
  `Try harder bruh`,
  `OMG. It's not that hard ...`,
  `Try again`,
  `Cica is impatient`,
  `One more time`,
  `Go ahead and try again`
];

let counter = 0;

function solve() {
  counter++;
  let text = document.getElementById("testText").value;
  if (text === '0124') {
    document.getElementById("testResult").innerHTML = 'BUZI';
  } else if (counter === 10) {
    document.getElementById("main").style.backgroundImage = "url('flame.jpg')";
    document.getElementById("testResult").innerHTML = 'You starting to make me angry.';
  } else if (counter === 11) {
    document.getElementById("testResult").innerHTML = `I'll take you to a place`;
  } else if (counter === 12) {
    document.getElementById("testResult").innerHTML = 'Okay you asked for it';
  } else if (counter === 13) {
    window.location.replace("https://youtu.be/IslF_EyhMzg?t=22");
  } else {
    var randomNumber = Math.floor(Math.random() * textArray.length);

    document.getElementById("testResult").innerHTML = textArray[randomNumber];
  }
}
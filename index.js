//detecting buttonpress
var buttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    Sound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keydown", function (event) {
  Sound(event.key);
  buttonAnimation(event.key);
});
//detecting keyboard press
function Sound(key) {
  switch (key) {
    case "t":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "o":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "e":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "r":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "s":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}
function buttonAnimation(currentKey) {
     var activeButton=document.querySelector("."+currentKey);
     activeButton.classList.add("pressed");
     setTimeout (function() {
      activeButton.classList.remove("pressed");
     }, 100);
}
var len = document.querySelectorAll(".drum").length;
function buttonAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");
  },400);
}
function keyPress(c) {
  switch (c) {
    case "w":
      var music = new Audio("sounds/tom-1.mp3");
      music.play();
      break;
    case "a":
      var music = new Audio("sounds/tom-2.mp3");
      music.play();
      break;
    case "s":
      var music = new Audio("sounds/tom-3.mp3");
      music.play();
      break;
    case "d":
      var music = new Audio("sounds/tom-4.mp3");
      music.play();
      break;
    case "j":
      var music = new Audio("sounds/crash.mp3");
      music.play();
      break;
    case "k":
      var music = new Audio("sounds/kick-bass.mp3");
      music.play();
      break;
    case "l":
      var music = new Audio("sounds/snare.mp3");
      music.play();
      break;
  }
}
for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color = "white";
    setTimeout(function a() {
    this.style.color = "#DA0463";
    }, 400);
    var buttonInnerHtml = this.innerHTML;
    keyPress(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}
document.addEventListener("keydown", function(event) {
  keyPress(event.key);
  buttonAnimation(event.key);
});

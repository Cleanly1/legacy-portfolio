var video = document.getElementById('player');
var social = document.getElementsByClassName("socialLinks");
var myVar = setInterval(theTime, 1000);
mytimer();


function madness() {
  document.body.style.animation = "backg 1s infinite";
  document.getElementById('name').style.animation = "colorT 1s infinite";
  document.getElementById('nick').style.animation = "colorT 1s infinite";
  document.getElementById('time').style.animation = "colorT 1s infinite";
  social[0].style.animation = "rotateImage 0.25s ease-in-out infinite";
  social[1].style.animation = "rotateImageReverse 0.25s ease-in-out infinite";
  video.play();

};

function stopMadness() {
  video.pause();
  document.body.style.animation = "none";
  document.getElementById('name').style.animation = "none";
  document.getElementById('nick').style.animation = "none";
  document.getElementById('time').style.animation = "none";
  social[0].style.animation = "none";
  social[1].style.animation = "none";

};

function theTime() {
var time = new Date();
document.getElementById("time").innerHTML = time.toLocaleTimeString(); };

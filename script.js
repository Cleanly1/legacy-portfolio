var video = document.getElementById('player');
var social = document.getElementsByClassName("socialLinks");
var dateYear = new Date();
document.getElementById("date").innerHTML = dateYear.getFullYear();


function madness() {
  document.body.style.animation = "backg 1s infinite";
  document.getElementById('name').style.animation = "colorT 1s infinite";
  document.getElementById('nick').style.animation = "colorT 1s infinite";
  social[0].style.animation = "rotateImage 0.5s infinite";
  social[1].style.animation = "rotateImageReverse 0.5s infinite";
  video.play();

};

function stopMadness() {
  video.pause();
  document.body.style.animation = "none";
  document.getElementById('name').style.animation = "none";
  document.getElementById('nick').style.animation = "none";
  social[0].style.animation = "none";
  social[1].style.animation = "none";

}

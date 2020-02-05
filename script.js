var video = document.getElementById("player");
var social = document.getElementsByClassName("socialLinks");
var myVar = setInterval(theTime, 1000);

window.navigator.vibrate(2000);
const projects = document.querySelectorAll(".project");

projects.forEach(function(project) {
    const projectLink = project.querySelector(".projectLink");
    project.addEventListener("mouseover", function(event) {
        projectLink.classList.add("linkHover");
        project.classList.add("projectHover");
        console.log(event);
    });
    project.addEventListener("mouseout", function(event) {
        projectLink.classList.remove("linkHover");
        project.classList.remove("projectHover");
    });
});

function madness() {
    document.body.style.animation = "backg 1s infinite";
    document.getElementById("name").style.animation = "colorT 1s infinite";
    document.getElementById("nick").style.animation = "colorT 1s infinite";
    document.getElementById("time").style.animation = "colorT 1s infinite";
    for (var i = 0; i < social.length - 1; i++) {
        social[i].style.animation =
            "rotateImageReverse 0.25s ease-in-out infinite alternate forwards";
    }
    social[2].style.animation =
        "rotateImage 0.25s ease-in-out infinite alternate forwards";
    video.play();
}

function stopMadness() {
    video.pause();
    document.body.style.animation = "none";
    document.getElementById("name").style.animation = "none";
    document.getElementById("nick").style.animation = "none";
    document.getElementById("time").style.animation = "none";
    for (var i = 0; i < social.length; i++) {
        social[i].style.animation = "none";
    }
}

function theTime() {
    var time = new Date();
    document.getElementById("time").innerHTML = time.toLocaleTimeString();
}

const madnessButtons = document.querySelectorAll(".madness");

madnessButtons[0].addEventListener("click", function() {
    madness();
});
madnessButtons[1].addEventListener("click", function() {
    stopMadness();
});

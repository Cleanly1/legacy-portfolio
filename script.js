var video = document.querySelector("#player");
var social = document.querySelectorAll(".socialLinks");

const projects = document.querySelectorAll(".project");

projects.forEach(function(project) {
    const projectLink = project.querySelector(".projectLink");
    project.addEventListener("mouseover", function() {
        projectLink.classList.add("linkHover");
        project.classList.add("projectHover");
    });
    project.addEventListener("mouseout", function() {
        projectLink.classList.remove("linkHover");
        project.classList.remove("projectHover");
    });
});

const madness = function() {
    document.body.style.animation = "backg 1s infinite";
    document.querySelector("#name").style.animation = "colorT 1s infinite";
    document.querySelector("#nick").style.animation = "colorT 1s infinite";
    document.querySelector("#time").style.animation = "colorT 1s infinite";
    for (var i = 0; i < social.length - 1; i++) {
        social[i].style.animation =
            "rotateImageReverse 0.25s ease-in-out infinite alternate forwards";
    }
    social[2].style.animation =
        "rotateImage 0.25s ease-in-out infinite alternate forwards";
    video.play();
};

const stopMadness = function() {
    video.pause();
    document.body.style.animation = "none";
    document.querySelector("#name").style.animation = "none";
    document.querySelector("#nick").style.animation = "none";
    document.querySelector("#time").style.animation = "none";
    for (var i = 0; i < social.length; i++) {
        social[i].style.animation = "none";
    }
};

const theTime = function() {
    var time = new Date();
    document.querySelector("#time").innerHTML = time.toLocaleTimeString();
};

const madnessButtons = document.querySelectorAll(".madness");

madnessButtons[0].addEventListener("click", function() {
    madness();
});
madnessButtons[1].addEventListener("click", function() {
    stopMadness();
});

var myVar = setInterval(theTime, 1000);

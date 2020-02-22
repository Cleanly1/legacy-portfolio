var video = document.querySelector("#player");
var social = document.querySelectorAll(".socialLinks");
var interval = 10;

const projects = document.querySelectorAll(".project");

projects.forEach(function(project) {
    const projectLink = project.querySelector(".projectLink");
    const projectTitle = project.querySelector(".projectTitle");
    const projectDescription = project.querySelector(".projectDescription");
    project.addEventListener("mouseenter", function() {
        if (!project.classList.contains("projectActive")) {
            projectLink.classList.add("linkHover");
            project.classList.add("projectActive");
            projectTitle.classList.add("fade");
            setTimeout(function() {
                projectTitle.classList.add("hidden");
                projectDescription.classList.add("show");
            }, 200);
            setTimeout(function() {
                projectDescription.classList.remove("fade");
            }, 300);
        }
    });
    project.addEventListener("mouseleave", function() {
        if (project.classList.contains("projectActive")) {
            projectLink.classList.remove("linkHover");
            project.classList.remove("projectActive");
            projectDescription.classList.add("fade");
            setTimeout(function() {
                projectTitle.classList.remove("hidden");
                projectDescription.classList.remove("show");
            }, 200);
            setTimeout(function() {
                projectTitle.classList.remove("fade");
            }, 300);
        }
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

const getQuote = function() {
    fetch("https://api.kanye.rest")
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            const h1 = document.querySelector(".quoteText");
            h1.classList.add("fade");
            setTimeout(function() {
                h1.innerHTML = response.quote;
            }, 1000);
            setTimeout(function() {
                h1.classList.remove("fade");
            }, 1200);
        });
};

getQuote();
setInterval(getQuote, interval * 1000);

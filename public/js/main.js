let img = document.getElementById("img");
let video = document.getElementById("video");
let button = document.getElementById('button');

let nextButton = document.getElementById("nextButton");
let homeButton = document.getElementById("homeButton");

let rewindButton = document.getElementById("rewind");
let reverseButton = document.getElementById("reverse");

let checkboxdiv = document.getElementById("menuToggle");

console.log(checkboxdiv);
let checkbox = checkboxdiv.getElementsByClassName("checkBox");
console.log(checkbox[0]);

checkboxdiv.addEventListener("click", () => {
    checkbox[0].checked = !checkbox[0].checked;
});


nextButton.style.display = 'none';
homeButton.style.display = 'none';
rewindButton.style.display = 'none';
reverseButton.style.display = 'none';

let buttons = {};

for (let index = 1; index <= 24; index++) {
    console.log("g");
    let tmp = document.getElementById(`video${index.toString()}`);
    if (tmp != null) {
        buttons[`button${index.toString()}`] = tmp;
    }
}


let buttonPosition = {
    "video1": ["top-[44%]", "custom:top-[45%]", "left-[48%]", "custom3:top-[45%]", "transform", "-translate-x-1/2", "-translate-y-1/2"],
    "video2": ["top-[44%]", "custom:top-[45%]", "left-[48%]", "custom3:top-[45%]", "transform", "-translate-x-1/2", "-translate-y-1/2"],

}




// console.log(buttons);
counter = 0;

function hideButtons() {
    img.style.display = 'none';
    homeButton.style.display = 'none';
    button.style.display = 'none';
    Object.keys(buttons).forEach(x => {
        buttons[x].style.display = 'none';
    });
    nextButton.style.display = 'none';
    rewindButton.style.display = 'none';
    reverseButton.style.display = 'none';
}

function startVideo() {
    console.log(counter);
    img.style.display = 'none';
    hideButtons();
    counter++;
    video.src = `./public/video/${counter}.mp4`;
}

var eventListenerAttached = false;

video.addEventListener("click", function () {
    if (video.currentTime > video.duration - 6) {
        startVideo()
    }
    else {
        console.log("video not ended")
    }
});

function videoEnd() {
    // // top-[44%] left-[48%] custom3:top-[45%] transform -translate-x-1/2 -translate-y-1/2
    if (counter != 1) {
        reverseButton.style.display = 'block';
    }
    rewindButton.style.display = 'block';
    if (buttons.hasOwnProperty(`button${counter}`)) {
        var replayPosition = video.duration - 5;
        video.currentTime = replayPosition;
        video.play();
        //buttons[`button${counter}`].style.display = 'block';
    }
    else {
        if (counter == 36) {
            homeButton.style.display = 'block';
        }
        else {
            console.log(nextButton);
            nextButton.style.display = 'block';
        }
    }
}


goFirst = () => {
    counter = 1
    hideButtons()
    video.src = `./public/video/${counter}.mp4`;
}
goSecond = () => {
    counter = 2
    hideButtons()
    video.src = `./public/video/${counter}.mp4`;
}
goThird = () => {
    counter = 11
    hideButtons()
    video.src = `./public/video/${counter}.mp4`;
}
goFour = () => {
    counter = 15
    hideButtons()
    video.src = `./public/video/${counter}.mp4`;
}
goFive = () => {
    counter = 16
    hideButtons()
    video.src = `./public/video/${counter}.mp4`;
}
goSix = () => {
    counter = 25
    hideButtons()
    video.src = `./public/video/${counter}.mp4`;
}
goSeven = () => {
    counter = 28
    hideButtons()
    video.src = `./public/video/${counter}.mp4`;
}
goEight = () => {
    counter = 31
    hideButtons()
    video.src = `./public/video/${counter}.mp4`;
}
goNine = () => {
    counter = 33
    hideButtons()
    video.src = `./public/video/${counter}.mp4`;
}
goTen = () => {
    counter = 34
    hideButtons()
    video.src = `./public/video/${counter}.mp4`;
}


previousPlay = () => {
    counter--
    hideButtons()
    video.src = `./public/video/${counter}.mp4`;
}

function goReplay() {
    hideButtons()
    video.src = `./public/video/${counter}.mp4`;
}

function fromStart() {
    counter = 0;
    // startVideo();
    location.reload()
}
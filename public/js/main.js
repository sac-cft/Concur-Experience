let video = document.getElementById("video");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button = document.getElementById("button");
let img = document.getElementById("img");

var counter = 0

hideButtons = () => {
  button.style.display = "none"
  button2.style.display = "none"
  button3.style.display = "none"
  button4.style.display = "none"
  button5.style.display = "none"
  img.style.display = 'none'
}

// On Video End
myFunction = () =>  {
  button2.style.display = 'block'
  button4.style.display = "block"
  if(counter > 1){
    button3.style.display = "block"
  }
  changeButton()
}
changeButton = () => {
  button4.className = "animate__animated animate__pulse animate__infinite	infinite"
  button4.style.paddingTop = ''
  button4.style.paddingBottom = ''
  button4.style.paddingLeft = ''
  button4.style.top =""
  button4.style.right =""
  button4.style.left =""
  button4.style.bottom =""
  console.log(counter)
  if (counter == 1) {
  button4.style.paddingTop = '4vw';
  button4.style.top = '37%';
  button4.style.left = '47%';
}

if (counter == 2) {
  button4.style.paddingBottom = '4vw';
  button4.style.top = '78%';
  button4.style.left = '90%';
}
  if(counter == 3){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 4){
    button4.style.paddingRight = '4vw';
    button4.style.top = '76%';
    button4.style.left = '6%';
  }
  if(counter == 5){
    button4.style.paddingBottom = '4vw'
    button4.style.top = '81%';
    button4.style.left = '0';
  }
  if(counter == 6){
    button4.style.paddingRight = '8vw'
     button4.style.top = '77%';
    button4.style.left = '6%';
  }
  if(counter == 7){
    button4.style.paddingTop = '4vw'
    button4.style.top = "22%"
    button4.style.left = '91%';
  }
  if(counter == 8){
    button4.style.paddingTop = '4vw'
    button4.style.top = "19%"
    button4.style.left = '91%';
  }
  if(counter == 9){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 10){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 11){
    button4.style.paddingBottom = '4vw'
    button4.style.top = "42%"
    button4.style.left = '63%';
  }
  if(counter == 12){
    button4.style.paddingTop = '4vw'
    button4.style.top = "22%"
    button4.style.left = '92%';
  }
  if(counter == 13){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 14){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 15){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 16){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 17){
    button4.style.paddingBottom = '4vw'
    button4.style.top = "73%"
    button4.style.left = '89%';
  }
  if(counter == 18){
    button4.style.paddingBottom = '50px'
    button4.style.top = "81%"
    button4.style.left = '13%';
  }
  if(counter == 19){
    button4.style.paddingTop = '4vw'
    button4.style.top = "10%"
    button4.style.left = '81%';
  }
  if(counter == 20){
    button4.style.paddingTop = '4vw'
    button4.style.top = "14%"
    button4.style.left = '81%'
  }
  if(counter == 21){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 22){
    button4.style.paddingTop = '4vw'
    button4.style.top = "66%"
    button4.style.left = "13%"
  }
  if(counter == 23){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 24){
    button4.style.paddingBottom = '4vw'
    button4.style.top = "60%"
    button4.style.left = "63%"
  }
  if(counter == 25){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 26){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 27){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 28){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 29){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 30){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 31){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 32){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 33){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 34){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 35){
    button4.style.display = 'none'
    button5.style.display = 'block'
  }
  if(counter == 36){
    button4.style.display = 'none'
    button6.style.display = 'block'
  }

}
function goHome() {
  window.location.reload()
}
function doSomeThing() {
  img.style.display = 'none'
  counter++
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}

// For Video Reply
function goReplay() {
  counter
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}
// For Go To Previous Video
goBack = () => {
  counter--
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}

goFirst = () => {
  counter = 1
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}
goSecond = () => {
  counter = 2
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}
goThird = () => {
  counter = 11
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}
goFour = () => {
  counter = 15
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}
goFive = () => {
  counter = 16
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}
goSix = () => {
  counter = 25
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}
goSeven = () => {
  counter = 28
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}
goEight = () => {
  counter = 31
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}
goNine = () => {
  counter = 33
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}
goTen = () => {
  counter = 34
  hideButtons()
  video.src = `./public/new/${counter}.mp4`;
}
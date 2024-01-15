// Function to play sound as image of selected snack is placed in the drop box 
  function playAudioAndChangeImage(imageSource) {
    let audio = new Audio('../sound/vendMac.mp3');
    audio.play();

    setTimeout(() => {
        document.getElementById('myImage').src = imageSource;
    }, 4600);
}

function A1() {
    playAudioAndChangeImage('images/A1.jpg');
}

function A2() {
    playAudioAndChangeImage('images/A2.jpg');
}

function A3() {
    playAudioAndChangeImage('images/A3.jpg');
}

function A4() {
    playAudioAndChangeImage('images/A4.jpg');
}
function B1() {
    playAudioAndChangeImage('images/B1.jpg');
}
function B2() {
    playAudioAndChangeImage('images/B2.jpg');
}
function B3() {
    playAudioAndChangeImage('images/B3.jpg');
}
function B4() {
    playAudioAndChangeImage('images/B4.jpg');
}
function C1() {
    playAudioAndChangeImage('images/C1.jpg');
}
function C2() {
    playAudioAndChangeImage('images/C2.jpg');
}
function C3() {
    playAudioAndChangeImage('images/C3.jpg');
}
function C4() {
    playAudioAndChangeImage('images/C4.jpg');
}

// function to clear image from drop box
function Clear(){
    setTimeout(() => {
    document.getElementById('myImage').src = 'images/myImage.jpg';
        },10)
  }

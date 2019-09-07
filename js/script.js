var difficulty = 6;
var colors = generateColors(difficulty);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetBtn = document.getElementById('reset');
var easyBtn = document.getElementById('easyBtn');
var hardBtn = document.getElementById('hardBtn');


easyBtn.addEventListener('click', function () {
    messageDisplay.textContent = "";
    h1.style.background = "steelblue";
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    difficulty = 3;
    colors = generateColors(difficulty);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0 ; i < squares.length ; i++){
        if (colors[i]){
            squares[i].style.background = colors[i];
        }else {
            squares[i].style.display = 'none';
        }
    }
});

hardBtn.addEventListener('click', function () {
    h1.style.background = "steelblue";
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    difficulty = 6;
    colors = generateColors(difficulty);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";


    for (var i = 0 ; i < squares.length ; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = 'block';
    }
});

colorDisplay.textContent = pickedColor;

resetBtn.addEventListener('click', function (){
    h1.style.background = "steelblue";

    colors = generateColors(difficulty);

    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";

    this.textContent = "new colors!"
    for (var i = 0 ; i < squares.length ; i++){
        squares[i].style.background = colors[i];
    }
});

for (var i = 0 ; i < squares.length ; i++){
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.background;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "CORRECT!";
            changeColor(clickedColor);
            h1.style.background = clickedColor;
            resetBtn.textContent = "Play Again!";
        }else {
            this.style.background = "#232323";
            messageDisplay.textContent = "TRY AGAIN!"
        }
    });
}

function changeColor(color){
    for (var i = 0 ; i < squares.length ; i++){
        squares[i].style.background = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num){
    var arr = [];
    for (var i = 0 ; i < num ; i++){
    arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r +", " + g + ", " + b + ")";
}
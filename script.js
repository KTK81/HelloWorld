//window.onload = function (e) {
//test();
//}


var canvasMain = document.getElementById("canvasFirst");
var ctx = canvasMain.getContext("2d");
        var canvasBeta = document.getElementById("canvasSecond");
        var ctxBeta = canvasBeta.getContext("2d");




var btnBlue = document.getElementById("btnColorBlue");
var btnGreen = document.getElementById("btnColorGreen");
var btnYellow = document.getElementById("btnColorYellow");
btnBlue.addEventListener("click", changeColor);
btnGreen.addEventListener("click", drawFromExistingImage);
btnYellow.addEventListener("click", drawFromFile);


function changeColor() {
    canvasMain.style.backgroundColor = "green";
}

function drawFromExistingImage() {
    var image = document.getElementById("imageTest");
    ctx.drawImage(image, canvasMain.width/2-25, canvasMain.height/2-25, 50, 50);
}


function drawFromFile () {
    var imageBeta = new Image ();
    imageBeta.src = "rea-office-20-20-wenge.jpg";
    imageBeta.onload = function() {
        ctxBeta.drawImage(imageBeta, 0, 0, canvasBeta.width, canvasBeta.height);
    }

    
    
    
//    ctxBeta.drawImage(imageBeta, 0, 0, canvasBeta.width, canvasBeta.height);
    
}

// ***********  FUNGUJEEEE ************
//
//


//  *** BUTTON ***
//    btnBlue.style.backgroundColor = "red";
//    btnBlue.style.color="red";    //text
//    btnBlue.innerHTML = "FunGUJEE";
    

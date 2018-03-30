
var canvasMain = document.getElementById("canvasFirst");
var btnBlue = document.getElementById("btnColorBlue");
var btnGreen = document.getElementById("btnColorGreen");
btnBlue.addEventListener("click", changeColor);
btnGreen.addEventListener("click", changeIMG);

function changeColor() {
    canvasMain.style.backgroundColor = "red";
}


function changeIMG() {
//    document.getElementById("imageTest").src="vsetkyfarby.jpg";
    
    var ctx = canvasMain.getContext("2d");
    var image = document.getElementById("imageTest");
    
    ctx.drawImage(image, canvasMain.width/2-25, canvasMain.height/2-25, 50, 50);
    ctx.drawImage(image, canvasMain.width/2-50, canvasMain.height/2-50, 100, 100);
    
}
    


    
//    btnBlue.style.backgroundColor = "red";
//    btnBlue.style.color="red";    //text
//    btnBlue.innerHTML = "FunGUJEE";
    

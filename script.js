const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function abrirFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImgBox.style.backgroundColor = "white"
    fulImg.src = reference
}
function cerrarImg(){
    fulImgBox.style.display = "none";
}




window.onload = function(){

document.getElementById("proj11s").onclick =function(){
changerprojet(1)
}


document.getElementById("proj12").onclick =function(){
changerprojet(2)
}

document.getElementById("proj13").onclick =function(){
changerprojet(3)
}


}


function changerprojet(valeur){

if (valeur == 1) {

var tabproj = document.getElementsByClassName("projet");
var proj1 = tabproj[0];
var proj2 = tabproj[1];
var proj3 = tabproj[2];

proj1.setAttribute("id","proj11s");
proj2.setAttribute("id","proj12");
proj3.setAttribute("id","proj13");

var tabimg = document.getElementsByClassName("imgprojet");
var img1 = tabimg[0];
var img2 = tabimg[1];
var img3 = tabimg[2];

img1.setAttribute("src","img/projet11.jpg");
img2.setAttribute("src","img/projet12.jpg");
img3.setAttribute("src","img/projet13.jpg");


var tabdes = document.getElementsByClassName("descvisible");
var des1 = tabdes[0];
var des2= tabdes[1];
var des3 = tabdes[2];

des1.setAttribute("class", "descinvisible");
des2.setAttribute("class", "descinvisible");
des3.setAttribute("class", "descinvisible");

var tabdesin = document.getElementsByClassName("descinvisible");
var desin1 = tabdesin[0];
var desin2 = tabdesin[3];
var desin3 = tabdesin[6];

desin1.setAttribute("class", "descvisible");
desin2.setAttribute("class", "descvisible");
desin3.setAttribute("class", "descvisible");

};


if (valeur == 2) {

var tabproj = document.getElementsByClassName("projet");
var proj1 = tabproj[0];
var proj2 = tabproj[1];
var proj3 = tabproj[2];

proj1.setAttribute("id","proj11");
proj2.setAttribute("id","proj12s");
proj3.setAttribute("id","proj13");


var tabimg = document.getElementsByClassName("imgprojet");
var img1 = tabimg[0];
var img2 = tabimg[1];
var img3 = tabimg[2];

img1.setAttribute("src","img/projet21.jpg");
img2.setAttribute("src","img/projet22.jpg");
img3.setAttribute("src","img/projet23.jpg");


var tabdes = document.getElementsByClassName("descvisible");
var des1 = tabdes[0];
var des2= tabdes[1];
var des3 = tabdes[2];

des1.setAttribute("class", "descinvisible");
des2.setAttribute("class", "descinvisible");
des3.setAttribute("class", "descinvisible");

var tabdesin = document.getElementsByClassName("descinvisible");
var desin1 = tabdesin[1];
var desin2 = tabdesin[4];
var desin3 = tabdesin[7];

desin1.setAttribute("class", "descvisible");
desin2.setAttribute("class", "descvisible");
desin3.setAttribute("class", "descvisible");

};


if (valeur == 3) {

var tabproj = document.getElementsByClassName("projet");
var proj1 = tabproj[0];
var proj2 = tabproj[1];
var proj3 = tabproj[2];

proj1.setAttribute("id","proj11");
proj2.setAttribute("id","proj12");
proj3.setAttribute("id","proj13s");



var tabimg = document.getElementsByClassName("imgprojet");
var img1 = tabimg[0];
var img2 = tabimg[1];
var img3 = tabimg[2];

img1.setAttribute("src","img/projet31.jpg");
img2.setAttribute("src","img/projet32.jpg");
img3.setAttribute("src","img/projet33.jpg");



var tabdes = document.getElementsByClassName("descvisible");
var des1 = tabdes[0];
var des2= tabdes[1];
var des3 = tabdes[2];

des1.setAttribute("class", "descinvisible");
des2.setAttribute("class", "descinvisible");
des3.setAttribute("class", "descinvisible");

var tabdesin = document.getElementsByClassName("descinvisible");
var desin1 = tabdesin[2];
var desin2 = tabdesin[5];
var desin3 = tabdesin[8];

desin1.setAttribute("class", "descvisible");
desin2.setAttribute("class", "descvisible");
desin3.setAttribute("class", "descvisible");

};



}
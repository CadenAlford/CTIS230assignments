myitem = document.getElementById("firsttest");
//Checks for the id "firsttest" in tags.

myitem.addEventListener("click", onClick);
//Adds listener for when when something is clicked and then peforms the OnClick function.

function onClick(){
    myitem.style.color = "green";
    //When the onClick function is ran, the text located withing the tag is turned green.
    myitem.style.fontFamily = "serif";
}

myitem.addEventListener("mouseout",onMouseout);

function onMouseout(){
    myitem.style.color = "red";
}

thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");
thebutton.addEventListener("click",onButtonClick);


function onButtonClick(){
    otheritem.style.color= "blue";
}


thebutton2 = document.getElementById("thebutton2");
otheritem2 = document.getElementById("buttontest2");
thebutton2.addEventListener("click",onButtonClick2)

function onButtonClick2(){
    otheritem2.style.color = "black";
    otheritem2.style.fontFamily = "serif";
}

textentry = document.getElementById("myinput");
textentry = document.addEventListener("change",onChange);

function onChange(){
    newtext = myinput.value
    otheritem.innerHTML = newtext;
}

addfeat = document.getElementById("addfeat");

addfeat.addEventListener("click", onPClick);

function onPClick(){
    addfeat.style.fontSize = "24px";
}


ballDiv = document.getElementById("ball");
theLargeView = document.getElementById("largeview");
ballImage = document.getElementById("ballImage");

ballDiv.addEventListener("click", makeBallBig);
theLargeView.addEventListener("click",hideBallImage);
ballDiv.addEventListener("click",expandImage);


function hideBallImage(){
    theLargeView.classList.add("dontshow")
    theLargeView.innerHTML = "";
}

function makeBallBig(event){
    console.log(event);
    theLargeView.classList.remove("dontshow");
}

function expandImage(){
    if (ballDiv.style.position == ""){
        ballDiv.style.position = "fixed";
        ballDiv.style.top = "40%";
        ballDiv.style.left = "20%";
        ballImage.style.width = "auto";
        ballImage.src = "images/tball.png";
    }
   else if (ballDiv.style.position == "fixed"){
        ballDiv.style.position = "";
        ballImage.style.width = "50px";
        ballImage.src = "images/tball.png";
    }
}
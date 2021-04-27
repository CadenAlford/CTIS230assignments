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

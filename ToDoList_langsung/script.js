//####### ADD BUTTON + inputan text #######
var addButton = document.getElementById("addButton");
addButton.addEventListener("click", function(){
    console.log("Add clicked");
    inputText();
});
//jaga2 klo pake enter
document.getElementById("textInput").addEventListener("keypress", function(event){
    if(event.key === "Enter") inputText();
});
function inputText(){
    var isiText = document.getElementById("textInput"); //iis text yg ada di box
    var listDiv = document.getElementById("listDiv");
    var unorderLi = document.getElementById("unorderLi");

    if (isiText.value.trim() == ""){
        alert("kosong");
    } else {
        listDiv.appendChild(unorderLi).appendChild(document.createElement("li")).appendChild(document.createTextNode(isiText.value));
        //pada dasar nya ul masuk ke listDiv (fokus ul), li masuk ke ul (skrng fokus li), nodeText masuk ke li (fokus nodeText, yaudah beres)
        //dan ya ngebuat ul terus2 an, bukan li aj
    }
    isiText.value = null; //awasin setelah di input
}
// mouse down and up
addButton.addEventListener("mousedown", function(){addButton.style.opacity = 1;});
addButton.addEventListener("mouseup", function(){addButton.style.opacity = 0.5;});
//hover
addButton.addEventListener("mouseenter", function(){ addButton.style.opacity = 0.5; addButton.style.transition = "opacity 0.2s ease"});
addButton.addEventListener("mouseleave", function(){ addButton.style.opacity = 1; })



// ### CLEAR BUTTON ###
var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function(){
    console.log("clear clicked");
});
//mouse up and down
clearButton.addEventListener("mousedown", function(){clearButton.style.opacity = 1;});
clearButton.addEventListener("mouseup", function(){clearButton.style.opacity = 0.5;});
//hover mouse
clearButton.addEventListener("mouseenter", function(){clearButton.style.opacity = 0.5; clearButton.style.transition = "opacity 0.2s ease";})
clearButton.addEventListener("mouseleave", function(){clearButton.style.opacity = 1;});




//### EMPTY BUTTON ###
var emptyButton = document.getElementById("emptyButton");
emptyButton.addEventListener("click", function(){
    document.getElementById("unorderLi").remove();
});
//mouse up down
emptyButton.addEventListener("mousedown", function(){emptyButton.style.opacity = 1;});
emptyButton.addEventListener("mouseup", function(){emptyButton.style.opacity = 0.5;});
//hover mouse
emptyButton.addEventListener("mouseenter", function(){emptyButton.style.opacity = 0.5; emptyButton.style.transition = "opacity 0.2s ease";})
emptyButton.addEventListener("mouseleave", function(){emptyButton.style.opacity = 1;})




//### SAVE BUTTON ###
var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", function(){
    console.log("save clicked");
});
//mouse up down
saveButton.addEventListener("mousedown", function(){saveButton.style.opacity = 1;});
saveButton.addEventListener("mouseup", function(){saveButton.style.opacity = 0.5;});
//hover mouse
saveButton.addEventListener("mouseenter", function(){saveButton.style.opacity = 0.5; saveButton.style.transition = "opacity 0.2s ease";})
saveButton.addEventListener("mouseleave", function(){saveButton.style.opacity = 1;})


//####### ul Behavior #####\
var unorderedList = document.getElementById("unorderLi");
unorderLi.addEventListener("click", function(){console.log("ul clicked")});



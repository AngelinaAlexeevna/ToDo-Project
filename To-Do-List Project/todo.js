"use strict";


function clickFunction() {
    let outputList = document.createElement("div");
    let closeButton = document.createElement("button");
    var div = document.getElementsByTagName("div")[0];
    

    
    outputList.className = "output";
    closeButton.className = "closeTask";
    
    
    outputList.innerHTML = document.querySelector("#form--input").value;
    
    closeButton.innerHTML = "X";
    
    div.appendChild(outputList);
    outputList.appendChild(closeButton);

    closeButton.addEventListener("click", clickCloseButton);

    function clickCloseButton() {
        outputList.remove();
    }

    
    outputList.classList.add("output");
    

    outputList.addEventListener("click", clickTask);

    function clickTask() {
        outputList.classList.toggle("doneOutput");
    }


    
}





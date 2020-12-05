var array = [];
var fromList = document.getElementById("content-list");
var toList = document.getElementById("selected-list")
var btn1 = document.getElementById("type-1");
var btn2 = document.getElementById("type-2")

btn1.onclick = function(){
    let option1 = document.createElement("option");
    option1 = fromList.selectedOptions[0];
    toList.add(option1);
}
btn2.onclick = function(){
    let option2 = document.createElement("option");
    option2 = toList.selectedOptions[0];
    fromList.add(option2);
}
const h1 = document.querySelector("#h1");
const button = document.querySelector("#button");

button.addEventListener("click", function(){
    document.getElementById("h1").innerHTML = "Goodbye World";
})
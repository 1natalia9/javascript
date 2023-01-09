

const redButton = document.getElementById("turn-red");
const greenButton = document.getElementById("turn-green");
const blueButton = document.getElementById("turn-blue");

const redCircle = document.getElementsByClassName("red")[0];


redButton.addEventListener("click", function () {
    redCircle.classList.toggle("active");
    redCircle.classList.add("red");
});
greenButton.addEventListener("click", function () {
    redCircle.classList.toggle("active");
    redCircle.classList.add("green");
});
blueButton.addEventListener("click", function () {
    redCircle.classList.toggle("active");
    redCircle.classList.add("blue");
});

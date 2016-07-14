var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var currentColor = "";
var currentReindeer = "";

var hohohoElement = document.getElementById("reindeer");

for (var reindeerName = 0; reindeerName < reindeer.length; reindeerName++) {
  currentReindeer = reindeer[reindeerName];
  currentColor = colors[reindeerName];
  hohohoElement.innerHTML += currentColor + " " + currentReindeer + " ";

}
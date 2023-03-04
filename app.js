// Declaración de los arreglos
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

// Uso de un bucle for para combinar
var fullNames = [];
for (var i = 0; i < pronoun.length; i++) {
  for (var j = 0; j < adj.length; j++) {
    for (var k = 0; k < adj.length; k++) {
      fullNames.push("www." + pronoun[i] + adj[j] + noun[k] + ".com");
    }
  }
}

// Agregar los nombres combinados a una lista en la página web
var fullNamesList = document.getElementById("fullNamesList");
fullNames.forEach(function(name) {
  var li = document.createElement("li");
  li.textContent = name;
  fullNamesList.appendChild(li);
});

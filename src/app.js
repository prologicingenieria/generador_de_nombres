function generarDominio() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var dot = [".cl", ".com", ".es", "org"];
  var dominio =
    "www." +
    pronoun[Math.floor(Math.random() * pronoun.length)] +
    adj[Math.floor(Math.random() * adj.length)] +
    noun[Math.floor(Math.random() * noun.length)] +
    dot[Math.floor(Math.random() * dot.length)];
  document.getElementById("nombreGenerado").innerHTML = dominio;
}

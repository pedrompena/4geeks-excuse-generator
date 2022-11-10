/* eslint-disable */
import "bootstrap";
import "./style.css";

window.addEventListener("load", function() {
  let excuse = "";

  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  excuse =
    who[whoIndex] +
    " " +
    what[whatIndex] +
    " my homework " +
    when[whenIndex] +
    ".";

  let aux = document.querySelector("#excuse");
  aux.innerHTML = excuse;
});

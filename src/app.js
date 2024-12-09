import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ["Un bebé", "Una señora", "Un perro", "Mi tío", "Un payaso"];
  let action = ["mojó", "rompió", "pateó", "robó"];
  let what = ["mi computadora", "mi proyecto", "mi teclado", "mi mouse"];
  let when = [
    "en el centro comercial",
    "en la universidad",
    "en el bondi",
    "en mi camino a casa",
    "en el starbucks"
  ];

  function partExcuseGenerator(part) {
    return part[Math.floor(Math.random() * part.length)];
  }

  let whoExcuse = partExcuseGenerator(who);
  let actionExcuse = partExcuseGenerator(action);
  let whatExcuse = partExcuseGenerator(what);
  let whenExcuse = partExcuseGenerator(when);
  let excuse =
    whoExcuse + " " + actionExcuse + " " + whatExcuse + " " + whenExcuse + ".";

  document.getElementById("excuse").innerText = excuse;

  document.getElementById("generate").onclick = function() {
    let whoExcuse = partExcuseGenerator(who);
    let actionExcuse = partExcuseGenerator(action);
    let whatExcuse = partExcuseGenerator(what);
    let whenExcuse = partExcuseGenerator(when);
    let excuse =
      whoExcuse +
      " " +
      actionExcuse +
      " " +
      whatExcuse +
      " " +
      whenExcuse +
      ".";
    document.getElementById("excuse").innerText = excuse;
  };
};

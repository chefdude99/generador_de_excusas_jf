import "./style.css";

window.onload = function() {
  let who = ["Dalila", "Akira", "Turron", "Liza"];
  let action = [" se comió", " se orinó", " dañó", " rompió"];
  let what = [" mi cuarto", " mi celular", " el carro"];
  let when = [
    " luego de llegar",
    " mientras dormia",
    " durante mi entrenamiento",
    " cuando fui a almorzar"
  ];
  let rdm1 = Math.floor(Math.random() * who.length);
  let rdm2 = Math.floor(Math.random() * action.length);
  let rdm3 = Math.floor(Math.random() * what.length);
  let rdm4 = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[rdm1] + action[rdm2] + what[rdm3] + when[rdm4];
};

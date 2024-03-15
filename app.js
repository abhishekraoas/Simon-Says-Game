let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("Game Started");
    started = true;
  }
});

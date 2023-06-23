// 목숨
var save = 0;

function handleInputText() {
  const word = "loveborimong";

  // 알파벳
  const l = document.querySelector(".l");
  const o = document.querySelector(".o");
  const v = document.querySelector(".v");
  const e = document.querySelector(".e");
  const b = document.querySelector(".b");
  const r = document.querySelector(".r");
  const i = document.querySelector(".i");
  const m = document.querySelector(".m");
  const n = document.querySelector(".n");
  const g = document.querySelector(".g");

  // 행맨
  const smile = document.querySelector("#smile");
  const badSmile = document.querySelector("#badSmile");
  const leftArm = document.querySelector("#leftArm");
  const body = document.querySelector("#body");
  const rightArm = document.querySelector("#rightArm");
  const leftLeg = document.querySelector("#leftLeg");
  const rightLeg = document.querySelector("#rightLeg");

  // 행맨 배열
  const hangman = [smile, body, leftArm, rightArm, leftLeg, rightLeg, badSmile];

  // 인풋
  const input = document.querySelector(".text-input").value;

  // 포함되는 알파벳인지 검사
  if (window.event.keyCode == 13) {
    if (word.includes(input)) {
      const alphabets = document.querySelectorAll(`.${input}`);
      alphabets.forEach((alphabet) => (alphabet.style.visibility = "visible"));
    } else {
      if (save === hangman.length) {
        badSmile.style.display = "block";
        smile.style.display = "none";
      }
      hangman[save].style.display = "block";
      save += 1;
    }
    input = "";
  }
}

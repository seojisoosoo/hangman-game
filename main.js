// 목숨
var save = 0;
var arr = [];

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
  const input = document.querySelector(".text-input");

  // 포함되는 알파벳인지 검사
  if (window.event.keyCode == 13) {
    if (!arr.includes(input.value)) {
      arr.push(input.value);

      if (word.includes(input.value)) {
        const alphabets = document.querySelectorAll(`.${input.value}`);
        alphabets.forEach((alphabet) => (alphabet.style.visibility = "visible"));
      } else {
        if (save === hangman.length - 2) {
          rightLeg.style.display = "block";
          badSmile.style.display = "block";
          smile.style.display = "none";

          alert("게임오버!");
        } else {
          hangman[save].style.display = "block";
          save += 1;
        }
      }
      clear();
    } else {
      clear();
      alert("이미 입력한 알파벳입니다!");
    }
  }
}

function clear() {
  const input = document.querySelector(".text-input");
  input.value = "";
  input.focus();
}

function reset() {
  save = 0;
  arr = [];

  const alphabets = ["l", "o", "v", "e", "b", "r", "i", "m", "n", "g"];
  alphabets.forEach((alphabet) =>
    document.querySelectorAll(`.${alphabet}`).forEach((text) => (text.style.visibility = "hidden")),
  );

  const hangman = [smile, body, leftArm, rightArm, leftLeg, rightLeg, badSmile];
  hangman.forEach((img) => (img.style.display = "none"));
}

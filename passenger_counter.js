let incVal = document.getElementById("inc-btn");
let initialCnt = document.getElementById("count-btn");

let saveVal = document.getElementById("save-btn");
let forEntries = document.getElementById("save-entries");
let cnt = 0;

incVal.addEventListener("click", function () {
  cnt += 1;
  initialCnt.innerHTML = cnt;
});

saveVal.addEventListener("click", function () {
  let writeEntries = cnt + " - ";
  forEntries.innerText += writeEntries;
  cnt=0
  initialCnt.innerHTML=0
});
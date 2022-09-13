var question = document.querySelectorAll(".question");

var answer = document.querySelectorAll(".ans");

var arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    for (let j = 0; j < answer.length; j++) {
      answer[j].classList.add("hidden");
      // answer[j].classList.remove("invert");
      // answer[j].classList.remove("active");
    }

    if (
      answer[i].classList.contains("active") === true
      //   && answer[i].classList.contains("hidden") === true
    ) {
      answer[i].classList.remove("active");
      //   answer[i].classList.add("hidden");
      arrow[i].classList.remove("invert");
    } else {
      for (let k = 0; k < answer.length; k++) {
        answer[k].classList.remove("active");
        arrow[k].classList.remove("invert");
      }

      answer[i].classList.remove("hidden");
      arrow[i].classList.add("invert");
      answer[i].classList.add("active");
    }
  });
}

// for (let i = 0; i < question.length; i++) {
//   question[i].addEventListener("click", function () {
//     for (let j = 0; j < question.length; j++) {
//       answer[j].classList.add("hidden");
//     }

//     if (answer[i].classList.contains("hidden") === true) {
//       answer[i].classList.remove("hidden");
//       arrow[i].classList.add("invert");
//     } else console.log("fuck");

// if (answer[i].classList.contains("hidden") == false) {
//   answer[i].classList.add("hidden");
// } else answer[i].classList.remove("hidden");
//   });
// }
// answer[i].classList.contains("hidden") == true

// if (5 - 2 == 3) {
//   console.log("WTF?");
// } else console.log("OK?");

// for (let i = 0; i < question.length; i++) {
//   question[i].addEventListener("click", function () {
//     for (let j = 0; j < answer.length; j++) {
//       answer.classList.add("hidden");
//     }
//     this.classList.remove("hidden");
//     this.classList.add("add");
//   });
// }

// question.forEach((back) => {
//   back.addEventListener("click", function () {
//     answer.forEach((btn) => btn.classList.add("hidden"));
//     this.classList.remove("hidden");
//     this.classList.add("added");
//   });
// });

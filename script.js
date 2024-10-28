let buttons = document.querySelectorAll(".btn");
let textarea = document.querySelector("textarea");
let delete_btn = document.querySelector(".delete");

buttons.forEach((btn) => {
  btn.addEvenListner("click", () => {
    textarea.value += btn.innerText;
    chars = textarea.value.split("");
  });
});

delete_btn.addEventListener("click", () => {
  chars.pop();
  textarea.value = chars.join("");
});

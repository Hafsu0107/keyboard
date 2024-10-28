let buttons = document.querySelectorAll(".btn");
let textarea = document.querySelector("textarea");

let delete_btn = document.querySelector(".delete");
let shift_btn = document.querySelector(".shift");
let space_btn = document.querySelector(".space");

buttons.forEach((btn) => {
  // forEach array ki ek ek value ko print krwata hai
  btn.addEventListener("click", () => {
    // bht sary event ko listner krskta hai addEvenListner
    textarea.value += btn.innerText;
    chars = textarea.value.split("");
    // .split() The split function  separate  a string in pieces and return them in an array
    // .split() ye ek aesa function hai jo string ko alag krta hai or usse pieces mai  wapis krta hai or usko array mai convert krdeta hai
  });
});

delete_btn.addEventListener("click", () => {
  chars.pop(); //  array ka last element remove krdeta hai
  textarea.value = chars.join("");
});

space_btn.addEventListener("click", () => {
  chars.push(" "); //add element to the end of array  and append (" ")
  textarea.value = chars.join(""); // combine all elemnet of the array
});

shift_btn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.classList.toggle("upper");
  });
});

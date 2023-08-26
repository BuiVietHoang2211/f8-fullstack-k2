let btn = document.querySelector(".btn");
let wrapperShow = document.querySelector(".wrapper");
let closeBtn = wrapperShow.querySelector(".wrapper .close");

btn.addEventListener("click", function () {
  wrapperShow.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  wrapperShow.classList.remove("show");
});

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

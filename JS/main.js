// Dark mode
const themeToggleBtn = document.querySelector("#checkbox");
const calculator = document.querySelector(".calculator");

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
};


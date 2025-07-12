// script.js
console.log("JavaScript aktif!");

document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");
  heading.addEventListener("click", () => {
    alert("Judul diklik!");
  });
});
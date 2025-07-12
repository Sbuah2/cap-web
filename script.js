console.log("✅ JavaScript aktif dan siap jalan!");

document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("header h1");
  const subheading = document.querySelector("header p");

  if (heading) {
    heading.addEventListener("click", () => {
      heading.style.color = "#5ac8fa";
      subheading.innerText = "✨ Kamu baru aja klik judul!";
    });
  }

  const footer = document.querySelector("footer");
  if (footer) {
    const tahun = new Date().getFullYear();
    footer.innerHTML += `<br><small>&copy; ${tahun} - Versi awal web by kamu 😎</small>`;
  }
});
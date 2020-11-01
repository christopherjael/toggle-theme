var btnTheme = document.getElementById("btn-toggle-theme");

btnTheme.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    btnTheme.innerHTML = `
      <i class="fas fa-sun"></i>
      Light Theme
      `;
  } else {
    btnTheme.innerHTML = `
      <i class="fas fa-moon"></i>
        Dark Theme
      `;
  }
});

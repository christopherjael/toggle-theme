var btnTheme = document.getElementById("btn-toggle-theme");

btnTheme.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    btnTheme.innerHTML = `
    <div class="large-device-btn">
      <i class="fas fa-sun"></i>
      Light Theme
      </div>
      <div class="small-device-btn">
          <i class="fas fa-adjust"></i>
        </div>
      `;
  } else {
    btnTheme.innerHTML = `
    <div class="large-device-btn">
      <i class="fas fa-moon"></i>
        Dark Theme
        </div>
        <div class="small-device-btn">
          <i class="fas fa-adjust"></i>
        </div>
      `;
  }
});

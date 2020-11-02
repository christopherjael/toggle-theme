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

var content = document.querySelector('.content');

var images = [
  'pexels-cottonbro-5026399',
  'pexels-igor-costa-842793',
  'pexels-nishant-aneja-2416481',
  'pexels-pixabay-264337',
  'pexels-roman-davayposmotrim-35990',
  'pexels-snapwire-185364',
  'pexels-the-th-179908',
  'pexels-valdemaras-d-1874675',
  'pexels-zami-2387327'
];

for (var i = 0; i < images.length; i++){
  content.innerHTML += `
  <div class="card">
  <img src="./img/${images[i]}.jpg">

  <div class="card-text">
  <h2>Title</h2>
  <p>Lorem Lorem Lorem Lorem Lorem Lorem Lorem</p>
  
  </div> 
  </div>
  `;
};



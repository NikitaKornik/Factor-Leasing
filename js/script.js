// --------------------------------- SCROLL TOP BTN ---------------------------------

const btn = document.querySelector(".scroll-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//

const NEWDATA = new Date("2025-11-29T00:00:00");
const now = new Date();

if (now >= NEWDATA) {
  document.body.innerHTML = `
  <div style="display:flex;justify-content:center;align-items:center;flex-direction:column; gap: 30px; height:100vh;font-size:24px;font-family:sans-serif;text-align:center;padding:20px; color: white; font-size: 52px; font-weight: 700;">
  Доступ к сайту ограничен.
  <br>Свяжитесь с разработчиком.
  <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  <svg width="300px" height="300px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
  <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#ffffff"/>
  <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#ffffff"/>
  <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#ffffff" stroke-width="1.5"/>
  </svg>
  </div>
  `;
}

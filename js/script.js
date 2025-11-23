const slides = [
  {
    title: "Работаем оперативно, ценим ваше время!",
    desc: "Большая линейка лизинговых программ, оперативное рассмотрение заявки до 10 минут, минимальный пакет документов по сделке",
    subtitle: "Лизинг физическим лицам",
    bg: "./images/Image.png",
  },
  {
    title: "Лучшие условия финансирования!",
    desc: "Выбирайте технику, мы позаботимся о выгодных условиях.",
    subtitle: "Спецпредложения",
    bg: "./images/Image2.jpg",
  },
  {
    title: "Поддержка 24/7",
    desc: "Помогаем на всех этапах оформления сделки.",
    subtitle: "Сервисная поддержка",
    bg: "./images/Image3.jpg",
  },
];

const titleEl = document.getElementById("title");
const descEl = document.getElementById("desc");
const subtitleEl = document.getElementById("subtitle");
const progressEl = document.getElementById("progress");
const skipBtn = document.getElementById("skip");
const slider = document.querySelector(".slider");

let current = 0;
let timer = null;
const DURATION = 15000; // 15 секунд
let isFirst = true; // флаг первой инициализации

function startSlide(index) {
  const slide = slides[index];

  if (isFirst) {
    // При первом показе — просто ставим контент и фон без fade
    titleEl.textContent = slide.title;
    descEl.textContent = slide.desc;
    subtitleEl.textContent = slide.subtitle;
    slider.style.backgroundImage = `url(${slide.bg})`;
    slider.style.opacity = "1";
    isFirst = false;

    // Сразу запускаем прогресс и таймер
    progressEl.classList.remove("animate");
    void progressEl.offsetWidth;
    progressEl.classList.add("animate");
    clearTimeout(timer);
    timer = setTimeout(nextSlide, DURATION);
    return;
  }

  // Для всех следующих слайдов — применяем плавный fade
  slider.style.opacity = "0";

  setTimeout(() => {
    titleEl.textContent = slide.title;
    descEl.textContent = slide.desc;
    subtitleEl.textContent = slide.subtitle;
    slider.style.backgroundImage = `url(${slide.bg})`;
    slider.style.opacity = "1";
  }, 600);

  // Перезапускаем прогресс
  progressEl.classList.remove("animate");
  void progressEl.offsetWidth;
  progressEl.classList.add("animate");

  clearTimeout(timer);
  timer = setTimeout(nextSlide, DURATION);
}

function nextSlide() {
  current = (current + 1) % slides.length;
  startSlide(current);
}

skipBtn.addEventListener("click", nextSlide);

// --- Инициализация ---
startSlide(current);

// --- АНИМАЦИЯ fade-ap ---

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("slider__fade");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target); // больше не наблюдаем
        }
      });
    },
    {
      threshold: 0.1, // срабатывает, когда 10% элемента видно
    }
  );

  elements.forEach((el) => observer.observe(el));
});

// Дата, после которой сайт должен заблокироваться
const blockDate = new Date("2025-11-29T00:00:00");
const now = new Date();

if (now >= blockDate) {
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

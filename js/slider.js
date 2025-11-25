// --------------------------------- SLIDES ANIMATE ---------------------------------

const slides = [
  {
    title: "Работаем оперативно, ценим ваше время!",
    desc: "Большая линейка лизинговых программ, оперативное рассмотрение заявки до 10 минут, минимальный пакет документов по сделке",
    subtitle: "Лизинг физическим лицам",
    bg: "./images/Image.webp",
  },
  {
    title: "ПРИМЕР 1",
    desc: "ПРИМЕР 1",
    subtitle: "ПРИМЕР 1",
    bg: "./images/Image2.jpg",
  },
  {
    title: "ПРИМЕР 2",
    desc: "ПРИМЕР 2",
    subtitle: "ПРИМЕР 2",
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

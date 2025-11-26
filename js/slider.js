// --------------------------------- SLIDES ANIMATE ---------------------------------

const slides = [
  {
    title: "Работаем оперативно, ценим ваше время!",
    desc: "Большая линейка лизинговых программ, оперативное рассмотрение заявки до 10 минут, минимальный пакет документов по сделке",
    subtitle: "Лизинг физическим лицам",
    bg: "./images/slide_image-1.webp",
  },
  {
    title: "Оформление за 3 шага!",
    desc: "Выберете необходимое имущество у одного из наших партнеров, подпишите необходимые документы и наслаждайтесь имуществом!",
    subtitle: "Работаем оперативно - ценим Ваше время",
    bg: "./images/slide_image-2.webp",
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

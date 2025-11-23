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

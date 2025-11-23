// --- АНИМАЦИЯ fade-ap ---

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-up");

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

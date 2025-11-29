// --------------------------------- PARTNERS SCROLL ---------------------------------

const list = document.querySelector(".our-partners__list");

document
  .querySelector(".our-partners-list__btn-left")
  .addEventListener("click", () => {
    list.scrollBy({
      left: -400, // листаем влево
      behavior: "smooth",
    });
  });

document
  .querySelector(".our-partners-list__btn-right")
  .addEventListener("click", () => {
    list.scrollBy({
      left: 400, // листаем вправо
      behavior: "smooth",
    });
  });

// --------------------------------- PARTNERS SELECT ---------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const listEl = document.querySelector(".our-partners__list");
  const infoEl = document.querySelector(".our-partners__info");

  // fetch("../data/partners.json")
  fetch(`${basePath}/data/partners.json`)
    .then((res) => res.json())
    .then((partners) => {
      renderPartners(partners);
    });

  // 1. Генерация списка
  function renderPartners(partners) {
    partners.forEach((p, i) => {
      listEl.insertAdjacentHTML(
        "beforeend",
        `
      <li class="our-partners__list-item" data-index="${i}" style="background-color: transparent;">
        <img src="${p.img}" alt="${p.title}">
      </li>
    `
      );

      infoEl.insertAdjacentHTML(
        "beforeend",
        `
      <li class="our-partners__info-item" data-index="${i}">
        <div class="our-partners__info-container" style="background-color: ${p.color};">
          <div class="our-partners__title">${p.title}</div>
          <div class="our-partners__description">${p.description}</div>
          <a href="${p.url}" class="our-partners__btn" target="_blank">
            Перейти на сайт
          </a>
        </div>
      </li>
    `
      );
    });

    const listItems = document.querySelectorAll(".our-partners__list-item");
    const infoItems = document.querySelectorAll(".our-partners__info-item");

    let active = 0;
    infoItems[0].classList.add("active");
    listItems[0].classList.add("active");
    listItems[0].style.backgroundColor = partners[0].color; // первый активный цвет

    listItems.forEach((item, i) => {
      item.addEventListener("click", () => {
        // сброс предыдущего
        listItems[active].style.backgroundColor = "transparent";
        listItems[active].classList.remove("active");
        infoItems[active].classList.remove("active");

        // новый активный
        active = i;
        infoItems[active].classList.add("active");
        listItems[active].classList.add("active");
        listItems[active].style.backgroundColor = partners[active].color;
      });
    });
  }
});

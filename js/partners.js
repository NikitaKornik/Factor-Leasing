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
  const partners = [
    {
      title: "НА СВЯЗИ",
      description:
        "Сеть салонов НА СВЯЗИ — не просто сеть магазинов, а целый мир решений для каждого дня. Здесь легко купить смартфон, гаджеты, умную технику или даже электромобиль. Сегодня НА СВЯЗИ — это: более 160 салонов в 85 городах Беларуси, более 24 лет на рынке, свыше 85 000 товаров в каталоге интернет-магазина, быстрая доставка до двери или в любой салон по всей стране.",
      url: "https://nsv.by/",
      img: "./images/partners_in-touch.webp",
      color: "#cd7a08",
    },
    {
      title: "АЛЛО",
      description:
        "«АЛЛО» — ваш надежный партнер в мире цифровой техники, предлагающий широкий ассортимент смартфонов и мобильных телефонов от лучших производителей, таких как Apple, Samsung, HONOR и Xiaomi. Наша цель — предоставить вам доступ к качественным устройствам по конкурентоспособным ценам.",
      url: "https://alloplus.by/",
      img: "./images/partners_allo.webp",
      color: "#fc0101",
    },
    {
      title: "ДВЕРИ ДАРОМ",
      description:
        "ДВЕРИ ДАРОМ 'Салон дверей №1' НАША МИССИЯ И ЦЕЛЬ: ДЕЛАТЬ ДОМА ЛЮДЕЙ УЮТНЕЙ. ДАРИТЬ КОМФОРТ КАЖДОМУ КЛИЕНТУ, ЧЕРЕЗ БЕЗУПРЕЧНЫЙ СЕРВИС.",
      url: "https://dveri-darom.by/",
      img: "./images/partners_doors-for-free.webp",
      color: "#a31e1e",
    },
    {
      title: "AVTOVELOMOTO",
      description:
        "АвтоВелоМото это... ООО «ТехноАгро» - мультибрендовая компания ориентированная на нужды клиента. Концепция ассортимента сочетает в себе четыре стихии: Огонь (Мототехника), Вода (Водная техника), Земля (Агротехника) Воздух (Велосипеды), в центре которых находится пятая – Человек, наш клиент. Опыт и репутация основные качества компании. География деятельности – СНГ, в Беларуси: Минск, Гомель, Могилёв, Брест и многие другие.",
      url: "https://avtovelomoto.by/",
      img: "./images/partners_avtovelomoto.webp",
      color: "#14305f",
    },
    {
      title: "ПОРТАТИВ",
      description:
        "Только аксессуары и гаджеты Вы тоже предпочитаете делать покупки в узкоспециализированных магазинах, когда продавец может рассказать всё о своем товаре, а не просто оформить покупку? Именно поэтому мы создали сеть салонов по продаже гаджетов и аксессуаров премиум-сегмента. Мы делаем акцент на «Эмоциональные гаджеты» – так называем нашу сеть салонов. То есть предлагаем устройства, которые не просто работают, а делают жизнь лучше, удобнее и интереснее. Дарят эмоции: радость от новых возможностей, комфорт в повседневных мелочах и вдохновение для работы или отдыха. У нас вы найдёте как популярные решения, так и эксклюзивные товары, которых больше нет на рынке. А главное – нам самим интересно то, чем мы занимаемся. Мы очень любим все эти электронные штуки, аксессуары и гаджеты. Следим за последними новинками в технологиях и разбираемся в новых моделях смартфонов. С нашими продавцами можно обсудить глюки последней прошивки iOS или плюсы новой версии Android.",
      url: "https://portative.by/",
      img: "./images/partners_portativ.webp",
      color: "#cd7a08",
    },
  ];

  const listEl = document.querySelector(".our-partners__list");
  const infoEl = document.querySelector(".our-partners__info");

  // 1. Генерация списка
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
});

const listEl = document.querySelector(".our-partners__list");
const infoEl = document.querySelector(".our-partners__info");
const listItems = document.querySelectorAll(".our-partners__list-item");
const infoItems = document.querySelectorAll(".our-partners__info-item");

const partners = [
  {
    title: "НА СВЯЗИ",
    description:
      "Сеть салонов НА СВЯЗИ — не просто сеть магазинов, а целый мир решений для каждого дня. Здесь легко купить смартфон, гаджеты, умную технику или даже электромобиль. Сегодня НА СВЯЗИ — это: более 160 салонов в 85 городах Беларуси, более 24 лет на рынке, свыше 85 000 товаров в каталоге интернет-магазина, быстрая доставка до двери или в любой салон по всей стране.",
    url: "https://nsv.by/",
    img: "./images/partners_1.webp",
  },
  {
    title: "АЛЛО",
    description:
      "«АЛЛО» — ваш надежный партнер в мире цифровой техники, предлагающий широкий ассортимент смартфонов и мобильных телефонов от лучших производителей, таких как Apple, Samsung, HONOR и Xiaomi. Наша цель — предоставить вам доступ к качественным устройствам по конкурентоспособным ценам.",
    url: "https://alloplus.by/",
    img: "./images/partners_1.webp",
  },
  {
    title: "ДВЕРИ ДАРОМ",
    description:
      "ДВЕРИ ДАРОМ 'Салон дверей №1' НАША МИССИЯ И ЦЕЛЬ: ДЕЛАТЬ ДОМА ЛЮДЕЙ УЮТНЕЙ. ДАРИТЬ КОМФОРТ КАЖДОМУ КЛИЕНТУ, ЧЕРЕЗ БЕЗУПРЕЧНЫЙ СЕРВИС.",
    url: "https://dveri-darom.by/",
    img: "./images/partners_1.webp",
  },
  {
    title: "AVTOVELOMOTO",
    description:
      "АвтоВелоМото это... ООО «ТехноАгро» - мультибрендовая компания ориентированная на нужды клиента. Концепция ассортимента сочетает в себе четыре стихии: Огонь (Мототехника), Вода (Водная техника), Земля (Агротехника) Воздух (Велосипеды), в центре которых находится пятая – Человек, наш клиент. Опыт и репутация основные качества компании. География деятельности – СНГ, в Беларуси: Минск, Гомель, Могилёв, Брест и многие другие.",
    url: "https://avtovelomoto.by/",
    img: "./images/partners_1.webp",
  },
  {
    title: "ПОРТАТИВ",
    description:
      "Только аксессуары и гаджеты Вы тоже предпочитаете делать покупки в узкоспециализированных магазинах, когда продавец может рассказать всё о своем товаре, а не просто оформить покупку? Именно поэтому мы создали сеть салонов по продаже гаджетов и аксессуаров премиум-сегмента. Мы делаем акцент на «Эмоциональные гаджеты» – так называем нашу сеть салонов. То есть предлагаем устройства, которые не просто работают, а делают жизнь лучше, удобнее и интереснее. Дарят эмоции: радость от новых возможностей, комфорт в повседневных мелочах и вдохновение для работы или отдыха. У нас вы найдёте как популярные решения, так и эксклюзивные товары, которых больше нет на рынке. А главное – нам самим интересно то, чем мы занимаемся. Мы очень любим все эти электронные штуки, аксессуары и гаджеты. Следим за последними новинками в технологиях и разбираемся в новых моделях смартфонов. С нашими продавцами можно обсудить глюки последней прошивки iOS или плюсы новой версии Android.",
    url: "https://portative.by/",
    img: "./images/partners_1.webp",
  },
];

partners.forEach((item, index) => {
  listEl.insertAdjacentHTML(
    "beforeend",
    `
    <li class="our-partners__list-item" data-index="${index}">
      <label>
        <img src="${item.img}" alt="${item.title}" />
      </label>
    </li>
    `
  );

  infoEl.insertAdjacentHTML(
    "beforeend",
    `
    <li class="our-partners__info-item" data-index="${index}">
      <div class="our-partners__info-container">
        <div class="our-partners__title">${item.title}</div>
        <div class="our-partners__subtitle">${item.description}</div>
        <a href="${item.url}" target="_blank" class="our-partners__btn">Перейти на сайт</a>
      </div>
    </li>
    `
  );
});

// по умолчанию показываем первого
let active = 0;
infoItems[active].classList.add("active");

listItems.forEach((item) => {
  item.addEventListener("click", () => {
    const index = +item.dataset.index;

    // убрать предыдущий
    infoItems[active].classList.remove("active");

    // показать новый
    active = index;
    infoItems[active].classList.add("active");
  });
});

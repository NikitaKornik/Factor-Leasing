// --------------------------------- PARTNERS SELECT ---------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const listEl = document.querySelector(".archive__list");

  fetch("data/archive.json")
    .then((res) => res.json())
    .then((archive) => {
      renderArchive(archive);
    });

  // 1. Генерация списка
  function renderArchive(archive) {
    archive.forEach((a, i) => {
      listEl.insertAdjacentHTML(
        "beforeend",
        `
        <li class="archive__list-item">
          <input type="checkbox" id="year-${a.year}" hidden />
          <label for="year-${a.year}">
            <span class="archive__list-title">${a.year}</span>
            <div class="archive__list__svg">
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.410168 2.27735C-0.136723 1.75659 -0.136723 0.911334 0.410168 0.390572C0.95706 -0.130191 1.84473 -0.130191 2.39162 0.390572L7.00309 4.78172L11.6118 0.390572C12.1587 -0.130191 13.0464 -0.130191 13.5905 0.390572C13.8626 0.649644 14 0.992457 14 1.33265C14 1.67285 13.8626 2.01566 13.5905 2.27474L7.9897 7.60797C7.4428 8.12873 6.55514 8.12873 6.01099 7.60797L0.410168 2.27735Z"
                  fill="#2DFF28"
                />
              </svg>
            </div>
          </label>
        <ul class="archive__inner">
        ${a.documents
          .map(
            (d) => `
            <li class="archive__inner-item">
              <a href="${d.url}">
                <div class="document__svg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                      stroke="#2DFF28"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14 2V8H20"
                      stroke="#2DFF28"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 13H8"
                      stroke="#2DFF28"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 17H8"
                      stroke="#2DFF28"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 9H9H8"
                      stroke="#2DFF28"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span class="document__text">${d.title}</span>
              </a>
            </li>
          `
          )
          .join("")}
        </ul>
      </li>
    `
      );
    });
  }
});

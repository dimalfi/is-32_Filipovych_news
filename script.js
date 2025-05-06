// --- Подія на новини (onclick)
document.querySelectorAll("article h2").forEach(h2 => {
  h2.onclick = function () {
      alert(`Ви обрали новину: ${h2.textContent}`);
  };
});

// --- onmouseover (підсвічування категорій справа)
const categoryItems = document.querySelectorAll('.float-box ul li');

categoryItems.forEach(item => {
  item.onmouseover = function () {
      item.style.backgroundColor = '#ffeaa7';
  };
  item.onmouseout = function () {
      item.style.backgroundColor = '';
  };
});

// --- addEventListener + декілька обробників
const factsBtn = document.createElement("button");
factsBtn.textContent = "Показати цікаві факти";
factsBtn.style.margin = "10px";
factsBtn.style.display = "block";

function showFact1() {
  alert("Факт: Україна увійшла в топ-50 за рівнем інновацій.");
}

function showFact2() {
  alert("Факт: Нові технології стрімко розвиваються у 2025 році.");
}

factsBtn.addEventListener("click", showFact1);
factsBtn.addEventListener("click", showFact2);

document.body.appendChild(factsBtn);

// --- Об'єкт обробник + handleEvent
const subscribeBtn = document.createElement("button");
subscribeBtn.textContent = "Підписатися на новини";
subscribeBtn.style.margin = "10px";
subscribeBtn.style.display = "block";

const subscribeHandler = {
  handleEvent(event) {
      alert("Дякуємо за підписку!");
      event.currentTarget.disabled = true;
  }
};

subscribeBtn.addEventListener("click", subscribeHandler);
document.body.appendChild(subscribeBtn);

// --- removeEventListener (одноразова підказка)
const tipBtn = document.createElement("button");
tipBtn.textContent = "Одноразова підказка";
tipBtn.style.margin = "10px";
tipBtn.style.display = "block";

function showTip() {
  alert("Ця підказка більше не з'явиться.");
  tipBtn.removeEventListener("click", showTip);
}

tipBtn.addEventListener("click", showTip);
document.body.appendChild(tipBtn);

// --- Підсвічування елементів списку (float-box ul)
const list = document.querySelector('.float-box ul');

list.onclick = function (event) {
  if (event.target.tagName === 'LI') {
      const items = list.querySelectorAll('li');
      items.forEach(item => item.style.backgroundColor = '');
      event.target.style.backgroundColor = '#81ecec';
  }
};

// --- Меню data-* Фільтр новин (Поведінка)
const filterMenu = document.createElement("div");
filterMenu.innerHTML = `
    <h3>Фільтр новин</h3>
    <button data-category="Економіка">Економіка</button>
    <button data-category="Спорт">Спорт</button>
    <button data-category="Наука">Наука</button>
    <button data-category="Технології">Технології</button>
    <button data-category="Усі">Усі</button>
`;
filterMenu.style.padding = "15px";
filterMenu.style.backgroundColor = "#ecf0f1";
filterMenu.style.borderRadius = "5px";
filterMenu.style.margin = "20px auto";
filterMenu.style.textAlign = "center";
document.body.appendChild(filterMenu);

filterMenu.addEventListener("click", function (event) {
    if (event.target.tagName !== "BUTTON") return;

    const category = event.target.dataset.category;

    document.querySelectorAll("article h2").forEach(h2 => {
        const article = h2.closest("article");

        if (category === "Усі" || h2.textContent.includes(category)) {
            h2.style.display = "";
            if (h2.nextElementSibling) h2.nextElementSibling.style.display = "";
        } else {
            h2.style.display = "none";
            if (h2.nextElementSibling) h2.nextElementSibling.style.display = "none";
        }
    });
});

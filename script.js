const map = document.getElementById("map");

const points = [
  { text: "Стадион", position: { left: 36, top: 49 }, color: "#6abf4b" },
  { text: "Мост", position: { left: 23, top: 74 }, color: "#3877EE" },
  { text: "Офис Only", position: { left: 29, top: 29 }, color: "#3877EE" },
  { text: "Музей", position: { left: 56, top: 65 }, color: "#3877EE" },
  { text: "Вокзал", position: { left: 60, top: 41 }, color: "#6abf4b" },
  { text: "Жилой комплекс", position: { left: 67, top: 70 }, color: "#6abf4b" },
  { text: "Отель у моря", position: { left: 57, top: 81 }, color: "#6abf4b" },
  { text: "ЖК лесной", position: { left: 71, top: 26 }, color: "#3877EE" },
  { text: "Автовокзал", position: { left: 73, top: 47 }, color: "#3877EE" },
  { text: "Лаборатория", position: { left: 82, top: 75 }, color: "#3877EE" },
];

const backdrop = () => {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    }
  });
};

points.forEach((point) => {
  const button = document.createElement("button");
  const span = document.createElement("span");

  span.textContent = point.text;
  button.style.top = point.position.top + "%";
  button.style.left = point.position.left + "%";

  button.style.backgroundColor = point.color;

  span.classList.add("point__text");
  button.classList.add("point");

  button.append(span);
  map.append(button);
});

map.addEventListener("click", (e) => {
  let button = e.target.closest("button");
  if (!button) {
    backdrop();
    return;
  }
  if (!map.contains(button)) return;

  if (button.classList.contains("active")) {
    button.classList.remove("active");
  } else {
    button.classList.add("active");
  }
});

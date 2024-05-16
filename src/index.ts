import data from "./data";
import "./index.scss";

const root = document.querySelector("#app");

interface Item {
  id: number;
  title: string;
}

function renderItem(item: Item, id: number) {
  const li = document.createElement("li");
  li.textContent = item.title;
  if (id % 2 == 0) {
    li.style.color = "red";
  }
  root.append(li);
}

data.forEach(renderItem);

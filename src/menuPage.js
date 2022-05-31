import { clearPage } from "./clearPage";

export function loadMenuPageContent() {
  clearPage();
  const welcomeTextElement = document.createElement("h1");

  welcomeTextElement.textContent = "Here is our expansive menu:";

  document.getElementById("container").appendChild(welcomeTextElement);

  let el = document.createElement("div");
  el.classList.add("card");
  el.textContent = "Pizza 2 €";
  document.getElementById("container").appendChild(el);
}

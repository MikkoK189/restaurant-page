import { clearPage } from "./clearPage";

export function loadContactPageContent() {
  clearPage();
  const welcomeTextElement = document.createElement("h1");

  welcomeTextElement.textContent = "You can contact us at:";

  document.getElementById("container").appendChild(welcomeTextElement);

  let el = document.createElement("div");
  el.classList.add("card");
  el.textContent = "google.com lol";
  document.getElementById("container").appendChild(el);
}

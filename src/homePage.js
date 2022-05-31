import { clearPage } from "./clearPage";

export function loadHomePage() {
  const headerElement = document.createElement("header");

  document.getElementById("content").appendChild(headerElement);

  const homeButton = document.createElement("button");
  homeButton.textContent = "Home";
  homeButton.id = "home";
  headerElement.appendChild(homeButton);

  const menuButton = document.createElement("button");
  menuButton.textContent = "Menu";
  menuButton.id = "menu";
  headerElement.appendChild(menuButton);

  const contactButton = document.createElement("button");
  contactButton.textContent = "Contact";
  contactButton.id = "contact";
  headerElement.appendChild(contactButton);

  const siteContainerElement = document.createElement("div");

  siteContainerElement.id = "container";

  document.getElementById("content").appendChild(siteContainerElement);

  const footerElement = document.createElement("footer");

  footerElement.textContent = "Copyright © MikkoK";

  document.getElementById("content").appendChild(footerElement);
}

export function loadHomePageContent() {
  clearPage();

  const welcomeTextElement = document.createElement("h1");

  welcomeTextElement.textContent = "Welcome to our restaurant!";

  document.getElementById("container").appendChild(welcomeTextElement);

  let el = document.createElement("div");
  el.classList.add("card");
  el.textContent =
    "Welcome to our old restaurant! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla egestas ut risus at aliquam. Quisque a ullamcorper lacus. Aenean sit amet finibus nisi, sit amet rhoncus tortor. Duis pulvinar dui sed est vehicula, eget ultrices erat euismod. Aliquam consectetur sodales iaculis. Vivamus gravida, tellus et lacinia laoreet, quam nisl volutpat mi, sit amet bibendum quam turpis sed libero. Etiam imperdiet lacinia eros id aliquet. Vestibulum ultrices diam maximus eleifend elementum.";
  document.getElementById("container").appendChild(el);
}

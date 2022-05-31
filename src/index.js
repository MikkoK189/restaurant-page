import "./style.css";
import { loadHomePage, loadHomePageContent } from "./homePage";
import { loadMenuPageContent } from "./menuPage";
import { loadContactPageContent } from "./contactPage";

loadHomePage();
loadHomePageContent();

document.getElementById("home").onclick = loadHomePageContent;
document.getElementById("menu").onclick = loadMenuPageContent;
document.getElementById("contact").onclick = loadContactPageContent;

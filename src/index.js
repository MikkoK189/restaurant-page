import "./style.css";
import { loadHomePage, loadHomePageContent } from "./homePage";
import { loadMenuPageContent } from "./menuPage";

loadHomePage();
loadHomePageContent();

document.getElementById("home").onclick = loadHomePageContent;
document.getElementById("menu").onclick = loadMenuPageContent;

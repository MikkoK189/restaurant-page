export function clearPage() {
  const pageContent = document.getElementById("container");

  while (pageContent.firstChild) {
    pageContent.removeChild(pageContent.lastChild);
  }
}

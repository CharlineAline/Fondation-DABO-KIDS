
function switchLang(lang) {
    const elements = document.querySelectorAll("[data-fr], [data-en]");
    elements.forEach(el => {
        el.innerText = lang === "fr" ? el.getAttribute("data-fr") : el.getAttribute("data-en");
    });
}

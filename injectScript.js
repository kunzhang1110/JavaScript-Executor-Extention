document.title = "Injected by injectScript.js";

// Style manipulation
document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)'; // Invert colors to dark mode

// DOM manipulation
const newH1 = document.createElement("h1");
newH1.textContent = "This H1 was injected by injectScript.js";
document.body.appendChild(newH1);

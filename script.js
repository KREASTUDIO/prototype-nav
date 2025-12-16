/* --------- EFECTO TYPING --------- */
const text = "Cuéntame, ¿qué es lo que estás buscando?";
const typingElement = document.getElementById("typing-text");
let index = 0;

function typingEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typingEffect, 50);
  }
}

typingEffect();

/* --------- BUSCADOR --------- */
document.getElementById("searchButton").addEventListener("click", search);
document.getElementById("searchInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    search();
  }
});

function search() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  // 🔑 PALABRAS CLAVE
  if (query.includes("pizza")) {
    window.location.href = "https://creativecompanys.my.canva.site/sancris-hub/page-3";
    return;
  }

  if (query.includes("pollo")) {
    window.location.href = "https://creativecompanys.my.canva.site/sancris-hub/pollo";
    return;
  }

  if (query.includes("tacos")) {
    window.location.href = "https://creativecompanys.my.canva.site/sancris-hub/page-3";
    return;
  }

  if (query.includes("hamburguesa") || query.includes("hamburguesas")) {
    window.location.href = "https://creativecompanys.my.canva.site/sancris-hub/hamburguesotas";
    return;
  }

  alert("No encontramos resultados todavía 😅");
}

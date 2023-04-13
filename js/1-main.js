let textoAEncriptar;
const d = document,
  n = navigator;

const $encriptarBtn = d.querySelector(".btn-encriptar");
const $textarea = d.getElementById("content-textarea");
const $titleFin = d.querySelector(".texto-tratado__title");
const $parrafoFin = d.querySelector("texto-tratado__parrafo");
const newParraf = d.createElement("p");
const $limpiarBtn = d.querySelector(".btn-limpiar");
const $copiarBtn = d.querySelector(".btn-copiar");
const $desencriptarBtn = d.querySelector(".btn-desencriptar");

/*  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsum debitis eius temporibus vero sunt velit sapiente necessitatibus dignissimos maxime, iusto deleniti nam amet minima laborum esse ut! Alias, fugiat. */

//console.log($titleFin.textContent);

$textarea.focus();

$copiarBtn.addEventListener("click", async () => {
  if (newParraf.textContent === "") {
    alert("Campo Vacio");
  } else {
    await n.clipboard.writeText(newParraf.textContent);
    alert("texto copiado");
  }
});

d.addEventListener("click", (e) => {
  if (e.target === $encriptarBtn) {
    e.preventDefault();
    textoAEncriptar = $textarea.value;

    //console.log(textoAEncriptar);

    textoAEncriptar = textoAEncriptar.replace(/e/g, "enter");
    textoAEncriptar = textoAEncriptar.replace(/i/g, "imes");
    textoAEncriptar = textoAEncriptar.replace(/a/g, "ai");
    textoAEncriptar = textoAEncriptar.replace(/o/g, "ober");
    textoAEncriptar = textoAEncriptar.replace(/u/g, "ufat");

    $titleFin.textContent = "Tu texto es:";
    newParraf.classList.add("newParraf");
    newParraf.textContent = textoAEncriptar;
    $titleFin.insertAdjacentElement("afterend", newParraf);

    console.log(textoAEncriptar);
  }
});

d.addEventListener("click", (e) => {
  if (e.target === $desencriptarBtn) {
    e.preventDefault();
    textoAEncriptar = $textarea.value;
    /* 
    textoAEncriptar = textoAEncriptar.replace(/e/g, "enter");
    textoAEncriptar = textoAEncriptar.replace(/i/g, "imes");
    textoAEncriptar = textoAEncriptar.replace(/a/g, "ai");
    textoAEncriptar = textoAEncriptar.replace(/o/g, "ober");
    textoAEncriptar = textoAEncriptar.replace(/u/g, "ufat"); */

    textoAEncriptar = textoAEncriptar.replace(/enter/g, "e");
    textoAEncriptar = textoAEncriptar.replace(/imes/g, "i");
    textoAEncriptar = textoAEncriptar.replace(/ai/g, "a");
    textoAEncriptar = textoAEncriptar.replace(/ober/g, "o");
    textoAEncriptar = textoAEncriptar.replace(/ufat/g, "u");

    $titleFin.textContent = "Tu texto es:";
    newParraf.classList.add("newParraf");
    newParraf.textContent = textoAEncriptar;
    $titleFin.insertAdjacentElement("afterend", newParraf);

    console.log(textoAEncriptar);
  }
});

d.addEventListener("click", (e) => {
  if (e.target === $limpiarBtn) {
    e.preventDefault();
    newParraf.textContent = "";

    $titleFin.textContent = "Ningun mensaje fue encontrado";
  }
});

//console.log(textoAEncriptar);

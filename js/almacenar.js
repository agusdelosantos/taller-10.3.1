// Seleccionamos los elementos
const input = document.getElementById("item");
const btnAgregar = document.getElementById("agregar");
const btnLimpiar = document.getElementById("limpiar");
const contenedor = document.getElementById("contenedor");

// Traemos el listado desde localStorage o inicializamos vacío
let listado = JSON.parse(localStorage.getItem("listado")) || [];

// Función para renderizar la lista en el DOM
function renderizar() {
  contenedor.innerHTML = ""; // limpiamos primero
  listado.forEach((elemento, i) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = elemento;
    contenedor.appendChild(li);
  });
}

// Evento para agregar ítem
btnAgregar.addEventListener("click", () => {
  const nuevoItem = input.value.trim();

  if (nuevoItem !== "") {
    listado.push(nuevoItem); // agregamos al array
    localStorage.setItem("listado", JSON.stringify(listado)); // lo guardamos
    renderizar(); // actualizamos vista
    input.value = ""; // limpiamos campo
  }
});

// Evento para limpiar todo
btnLimpiar.addEventListener("click", () => {
  localStorage.removeItem("listado"); // borramos del storage
  listado = []; // vaciamos array
  renderizar(); // actualizamos vista
});

// Renderizamos al cargar la página para mantener datos guardados
renderizar();


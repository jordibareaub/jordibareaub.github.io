//Funcionalidad "Lista de TODOs" SIN usar Vue
// Aproximación imperativa: le decimos paso por paso lo que tiene que hacer

/* creo 3 constantes, la primera para acceder al único elemento 
   button de la pagina,
   idem para el elemento input y lista
   querySelector devuelve el primer elemento que coincida con el
   grupo especificado de selectores
*/
const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

//se ejecuta al cliclar al button
function addTask() {
  const enteredValue = inputEl.value;
  if (inputEl.value != "") {
    const listItemEl = document.createElement("li");
    listItemEl.textContent = enteredValue;
    listEl.appendChild(listItemEl);
  }
  inputEl.value = "";
  refreshButton();
}

buttonEl.addEventListener("click", addTask);

// Execute a function when the user presses a key on the keyboard
inputEl.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

    // buttonEl.click();
    addTask();
  }

  refreshButton();
});

// Deshabilitamos el boton si no hay texto y lo habilitamos si hay. 
function refreshButton() {
  if (inputEl.value != "")
    buttonEl.disabled = false;
  else 
    buttonEl.disabled = true;
}
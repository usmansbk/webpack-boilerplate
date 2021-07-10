function component() {
  const element = document.createElement("div");

  element.innerHTML = "Welcome to Microverse";

  return element;
}

document.body.appendChild(component());

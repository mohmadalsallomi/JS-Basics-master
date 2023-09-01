const inputElement = document.querySelector('#name');
const divElement = document.createElement('div');
document.body.appendChild(divElement);
inputElement.addEventListener('input', () => {
  const newText = inputElement.value;
  divElement.textContent = newText;
});

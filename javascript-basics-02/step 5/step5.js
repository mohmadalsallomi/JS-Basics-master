const container = document.querySelector('.container');
function handleImageClick(event) {
  alert(`You clicked on ${event.target.id}`);
}

for (let i = 1; i <= 5; i++) {
  const image = document.querySelector(`#image${i}`);
  image.addEventListener('click', handleImageClick);
}

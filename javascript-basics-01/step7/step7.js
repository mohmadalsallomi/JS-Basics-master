const shoeSizeInput = document.getElementById('shoe_size');
const birthYearInput = document.getElementById('year');
const validateButton = document.getElementById('validate');
function performCalculations() {
    const shoeSize = parseFloat(shoeSizeInput.value);
    const birthYear = parseInt(birthYearInput.value);
    if (isNaN(shoeSize) || isNaN(birthYear)) {
        alert('Please enter valid numbers for shoe size and birth year.');
        return;
    }
    let result = (((shoeSize * 2) + 5) * 50) - birthYear + 1766;
    alert('Result: ' + result);
}
validateButton.addEventListener('click', performCalculations);

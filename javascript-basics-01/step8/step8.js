const ageInput = document.getElementById('age');
const validateButton = document.getElementById('validate');
function checkAge() {
    const age = parseInt(ageInput.value);
    if (isNaN(age)) {
        alert('Please enter a valid age.');
        return;
    }
    if (age > 18) {
        alert('You are over 18.');
    } else {
        alert('You are under 18.');
    }
}
validateButton.addEventListener('click', checkAge);

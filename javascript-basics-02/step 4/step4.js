document.addEventListener('DOMContentLoaded', function () {
    const resetButton = document.querySelector('button[name="button"]');
    resetButton.addEventListener('click', function () {
      const userConfirmed = confirm('Do you want to reset all fields?');
      if (userConfirmed) {
        const inputFields = document.querySelectorAll('input[type="text"]');
        inputFields.forEach(function (inputField) {
          inputField.value = '';
        });
      }
    });
  });
  
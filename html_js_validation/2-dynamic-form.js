document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('dynamicForm');
    const inputContainer = document.getElementById('inputContainer');

    function generateInputFields(numFields) {
        inputContainer.innerHTML = '';
        for (let i = 0; i < numFields; i++) {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.name = 'field' + (i + 1);
            inputContainer.appendChild(inputField);
        }
    }

    function validateForm(event) {
        const inputs = inputContainer.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value.trim() === '') {
                event.preventDefault();
                alert('Please fill in all fields');
                return;
            }
        }
    }

    document.getElementById('numFields').addEventListener('change', function () {
        const numFields = parseInt(this.value);
        generateInputFields(numFields);
    });

    form.addEventListener('submit', validateForm);
});
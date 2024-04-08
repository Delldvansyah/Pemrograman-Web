document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const nama = document.getElementById('nama').value.trim();
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;

        if (nama === '') {
            isValid = false;
            displayError('nama', 'Nama harus diisi');
        } else {
            removeError('nama');
        }

        if (username === '') {
            isValid = false;
            displayError('username', 'Username harus diisi');
        } else {
            removeError('username');
        }

        if (email === '') {
            isValid = false;
            displayError('email', 'Email harus diisi');
        } else if (!isValidEmail(email)) {
            isValid = false;
            displayError('email', 'Email tidak valid');
        } else {
            removeError('email');
        }

        if (password === '') {
            isValid = false;
            displayError('password', 'Password harus diisi');
        } else {
            removeError('password');
        }

        if (isValid) {
            // Lakukan sesuatu jika formulir valid
            form.submit();
        }
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function displayError(fieldId, errorMessage) {
        const errorElement = document.getElementById(`${fieldId}Error`);
        errorElement.textContent = errorMessage;
    }

    function removeError(fieldId) {
        const errorElement = document.getElementById(`${fieldId}Error`);
        errorElement.textContent = '';
    }
});

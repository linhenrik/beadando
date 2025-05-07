function jelentkezes() {
    let valid = true;

    const form = document.getElementById('jelentkezes');
    const nevInput = document.getElementById('nev');
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const szuletesInput = document.getElementById('szuletes');
    const vegzettsegInput = document.getElementById('vegzettseg');
    const teherbirasInput = document.getElementById('teherbiras');
    const munkahelyInput = document.getElementById('munkahely');

    const nevError = document.getElementById('nevError');
    const emailError = document.getElementById('emailError');
    const szuletesError = document.getElementById('szuletesError');
    const vegzettsegError = document.getElementById('vegzettsegError');
    const teherbirasError = document.getElementById('teherbirasError');
    const munkahelyError = document.getElementById('munkahelyError');

    nevError.textContent = '';
    emailError.textContent = '';
    szuletesError.textContent = '';
    vegzettsegError.textContent = '';
    teherbirasError.textContent = '';
    munkahelyError.textContent = '';
    nevInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');
    szuletesInput.classList.remove('is-invalid');
    vegzettsegInput.classList.remove('is-invalid');
    teherbirasInput.classList.remove('is-invalid');
    munkahelyError.classList.remove('is-invalid');

    if (!nevInput.value) {
        nevError.textContent = 'Kötelező mező!';
        nevInput.classList.add('is-invalid');
        valid = false;
    }else if (nevInput.value.length < 10) {
        nevError.textContent = 'Minimum 10 karakter hosszú!';
        nevInput.classList.add('is-invalid');
        valid = false;
    }

    if (!emailInput.value) {
        emailError.textContent = 'Kötelező mező!';
        emailInput.classList.add('is-invalid');
        valid = false;
    }else if (emailInput.value.length < 10) {
        emailError.textContent = 'Minimum 10 karakter hosszú!';
        emailInput.classList.add('is-invalid');
        valid = false;
    }else if (!emailPattern.test(emailValue)) {
        emailError.textContent = 'Érvénytelen e-mail cím!';
        emailInput.classList.add('is-invalid');
        valid = false;
    }

    if (!szuletesInput.value) {
        szuletesError.textContent = 'Kötelező mező!';
        szuletesInput.classList.add('is-invalid');
        valid = false;
    }

    if (vegzettsegInput.value == 0) {
        vegzettsegError.textContent = 'Kötelező mező!';
        vegzettsegInput.classList.add('is-invalid');
        valid = false;
    }

    if (teherbirasInput.value == 0) {
        teherbirasError.textContent = 'Kötelező mező!';
        teherbirasInput.classList.add('is-invalid');
        valid = false;
    }

    if (!munkahelyInput.value) {
        munkahelyError.textContent = 'Kötelező mező!';
        munkahelyInput.classList.add('is-invalid');
        valid = false;
    }else if (munkahelyInput.value.length < 10) {
        munkahelyError.textContent = 'Minimum 10 karakter hosszú!';
        munkahelyInput.classList.add('is-invalid');
        valid = false;
    }

    if (valid) {
        form.classList.add('d-none');
        alert('Köszönjük a jelentkezést.');
    }
}
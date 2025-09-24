const data = {
    username: 'as',
    password: 'Pas!',
    email: 'jsmith',
}

async function checkUsername(username) {
    return username.length >= 3;
}

async function checkPassword(password) {
    return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
}

async function checkEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

async function validateForm(formData) {
    const { username, password, email } = formData;

    const [isUsernameValid, isPasswordValid, isEmailValid] = await Promise.allSettled([
        checkUsername(username),
        checkPassword(password),
        checkEmail(email)
    ]);

    return {
        username: isUsernameValid.status === 'fulfilled' ? isUsernameValid.value : false,
        password: isPasswordValid.status === 'fulfilled' ? isPasswordValid.value : false,
        email: isEmailValid.status === 'fulfilled' ? isEmailValid.value : false,
    }
}

validateForm(data).then(value => console.log(value));
document.getElementById('login-submit').addEventListener('click', function() {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;


    // check email and password
    if (userEmail == 'alaminsbl502@gmail.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    } else {
        console.log('Invalid information, please! give me right information');
    }
})
//document addEventListener
document.addEventListener('DOMContentLoaded', function () {
    //Content
    const form = document.getElementById('frmEmployee');
    const nameInput = document.getElementById('txtFullName');
    const emailInput = document.getElementById('emailAddress');
    const phoneInput = document.getElementById('telPhone');
    const passwordInput = document.getElementById('pswrd');
    const confirmPswrdInput = document.getElementById('confirmPswrd');

    //Error message
    const nameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const passwordError = document.getElementById('passwordError');
    const confirmPswrdError = document.getElementById('confirmPswrdError');

    //form addEventListener
    form.addEventListener('submit', function (event) {
        //prevent form submission
        event.preventDefault();

        //validation - FullName
        if (!nameInput.value.trim()) {
            nameError.textContent = "Enter full name.";
        }
        else {
            nameError.textContent = '';
        }

        //validation - email
        if (!nameInput.email) {
            emailError.textContent = "Enter your email address";
        }
        else {
            emailError.textContent = '';
        }
        //validation - phone
        if (!phoneInput.value) {
            phoneError.textContent = "Enter a phone number.";
        }
        
        else if(phoneInput.value.length!=10){
            phoneError.textContent = "phone number must be 10 digits long";
        }
        else {
            phoneError.textContent = '';
        }
        //validation - password
        if (!passwordInput.value) {
            passwordError.textContent = "Enter password.";
        }
        else {
            passwordError.textContent = '';
        }
        //validation - password confirmation
        if (!confirmPswrdInput.value) {
            confirmPswrdError.textContent = "Enter password confirmation";
        }
        else if(passwordInput.value!=confirmPswrdInput.value){
            confirmPswrdError.textContent = "Password is not matching";
        }
        else {
            confirmPswrdError.textContent = '';
        }

        
        
    })
    

    

})

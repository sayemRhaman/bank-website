
document.getElementById('btnSubmit').addEventListener('click', function() {
    const emailField = document.getElementById('userEmail');
    const email = emailField.value;
    console.log(email);
    
    const passwordFild = document.getElementById('userPassword');
    const password =passwordFild.value;
    console.log(password);
}) 
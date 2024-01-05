let Button = document.querySelector(".Button");
let Input = document.querySelector(".Input");


function passwordGenerator() {
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let password = ""

    for (let i=0; i < 12; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    console.log(password);
    return password;
}

Button.addEventListener("click", function () {
    let newPassword = passwordGenerator();
    Input.value = newPassword;
})
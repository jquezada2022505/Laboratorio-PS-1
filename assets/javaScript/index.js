var usuarios = [
    { nombreUsuario: "admin", password: "123" },
    { nombreUsuario: "user", password: "123" },
];

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombreUsuario = document.getElementById('nombreUsuario').value;
    var password = document.getElementById('password').value;

    var isValid = usuarios.some(function(user) {
        return user.nombreUsuario === nombreUsuario && user.password === password;
    });

    document.getElementById("nombreUsuario").value = "";
    document.getElementById("password").value = "";

    if (isValid) {
        alert("BIENVENIDO AL SISTEMA");
        window.location.href = "./assets/pages/contacto.html";
    } else {
        alert("Contraseña incorrecta, intente de nuevo");

    }
});
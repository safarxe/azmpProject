function handleLogin(event) {
    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email === "test@gmail.com" && password === "12345678") {
        alert("Login uğurlu!");
        window.location.href = "./dashboard.html"; // İstifadəçini yönləndirmə
    } else {
        alert("Email və ya şifrə səhvdir!");
    }

    return false;
}

function handleRegister(event) {
    event.preventDefault(); 

    document.getElementById("serviceModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
}

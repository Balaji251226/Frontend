function openMenu() {
    document.getElementById("fullscreenMenu").classList.add("show");
}

function closeMenu() {
    document.getElementById("fullscreenMenu").classList.remove("show");
}

fetch("./navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));

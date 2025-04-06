fetch("./whatsapp.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("whatsapp-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error))

document.getElementById("contact").addEventListener("submit", function(event) {
    // Hämta fältens värden
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Hämta felmeddelande-platserna
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // kontrollera namn
    if (username === "") {
        usernameError.textContent = "fyll i ditt namn.";
        isValid = false;
    }

    // kontrollera e-postadress
    if (email === "") {
        emailError.textContent = "fyll i din e-postadress.";
        isValid = false;
    }

    // kontrolera meddelande
    if (message === "") {
        messageError.textContent = "fyll i ett meddelande.";
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});
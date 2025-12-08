let currentCard = 1;

document.getElementById("submitBtn").addEventListener("click", function () {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const roll = document.getElementById("roll").value;
    const job = document.getElementById("job").value;

    if (!name || !email) {
        alert("Name and Email are required!");
        return;
    }

    const text = `Name: ${name}
Email: ${email}
Roll: ${roll}
Job: ${job}`;

    document.getElementById(`card${currentCard}`).textContent = text;

    currentCard++;
    if (currentCard > 3) currentCard = 1;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("job").value = "";
});
